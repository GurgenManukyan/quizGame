import { quizList1 } from './quizList.js';
import { 
    addEvent, 
    tagSetValue, 
    isShowElement,
    optionGenerator, 
    checkCorrectAnswer,
    setValuesResult,
} from './helpers.js';

(function() {
    let i = 0;

    const speed = 100;

    let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

    const warningText = document.getElementById('warning');

    const typeWriter = () => {
        if (i < text.length) {
            warningText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    };
    typeWriter()
})();

let currentQuestion = 0;
let rightAnswer = 0;

addEvent('click', '#start', () => {
    isShowElement('.start_game_container', 'none');
    isShowElement('.root', 'block');
    showCheckQuestion();
});

const showCheckQuestion = () => {
    const { title, options } = quizList1[currentQuestion];
    const data = optionGenerator(options);
    tagSetValue('#question', title);
    tagSetValue('#options', data);
};



addEvent('click', '#options', (event) => {
    let index = event.target.dataset.index;
    const { correctAnswer,title } = quizList1[currentQuestion];
    setResult(index,correctAnswer,title);
    if(index != undefined){
        if (index && currentQuestion < quizList1.length - 1) {
            currentQuestion++;
            showCheckQuestion();
        } else {
            isShowElement('.root', 'none');
            isShowElement('#fullResult', 'block');
           
        }
    }
});

const setResult = (index,correctAnswer,title)=>{
    const {rightAnswer,quizOverResult} = checkCorrectAnswer(index, correctAnswer,title);
    let quizResult = quizOverResult[quizOverResult.length-1];
    
    let value = `<div class= 'setResult'>
                <pre>${quizResult.title}</pre>
                <p>${quizResult.point}- point </p>
                </div>
    `;
    tagSetValue('#rightCount', `right answers:${rightAnswer} is ${quizList1.length} `)
    setValuesResult('#fullResult',value);
}
