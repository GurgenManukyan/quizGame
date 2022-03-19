export const getElement = () => {

};

export const tagSetValue = (selectorName, value) => {
    document.querySelector(selectorName).innerHTML = value;
};

export const setValuesResult = (selectorName, value) => {
    document.querySelector(selectorName).innerHTML += value;
};

export const addEvent = (eventType, selectorName, callBack) => {
    document.querySelector(selectorName).addEventListener(eventType, callBack)
}

export const isShowElement = (selectorName, displayType) => {
    document.querySelector(selectorName).style.display = displayType;
}


export const optionGenerator = (options) => {
    let buttonsList = '';
    options.forEach((item, index) => {
        buttonsList+= `<button class="button" data-index="${index + 1}" id="button${index + 1}">${item}</button>`;
    });
    return buttonsList;
};



export const checkAnswer = () => {
   let rightAnswer = 0;
   const quizOverResult = [];
   return (selectAnswer, correctAnswer,quizTitle)=>{
    if (selectAnswer == correctAnswer) {
        rightAnswer++
        quizOverResult.push({
            title: quizTitle,
            point: 1 
        })
    }else{
        quizOverResult.push({
            title: quizTitle,
            point: 0 
        });
    }
    return {rightAnswer, quizOverResult};
   }
};

export const checkCorrectAnswer = checkAnswer();