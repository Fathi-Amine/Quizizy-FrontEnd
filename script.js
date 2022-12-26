const quizContainer = document.querySelector(".quizz-container")
const questionHeader = document.querySelector(".question");
const nextBtn = document.querySelector(".next");
const startBtn = document.querySelector(".start");
const answersContainer = document.querySelector(".answers-container");
const content = document.querySelector(".wrapper")
const time = document.querySelector(".time");
const resBtn = document.querySelector('.result');
const resultBoard = document.querySelector('.resultBoard');
const progBar = document.querySelector(".progBar")
var selected;
let timeOut;
let shuffledQuestions = questions.sort(()=>Math.random() - 0.5);
let questionIndex = 0;
let userChoice = {}
let sessionAnswers = [];
let timeInSeconds = 0;
let interval = 0;


function countDown(){
    if(timeInSeconds === 30){
        clearInterval(interval);
        nextBtn.click();
    }else{
        time.style.display = "inline-block"
        timeInSeconds++;
        time.innerText = timeInSeconds;
    }
}
function startQuiz(){
    nextBtn.style.display = "block";
    startBtn.style.display = "none";
    // showQuestion(shuffeledQuestions)
    showQuestion(shuffledQuestions[questionIndex]);
    // questionIndex++;
}

function displayQuestions(){ 
    nextBtn.style.display = "none"
    showCorrectAnswer();
    clearTimeout(timeOut)
    timeOut = setTimeout(()=>showQuestion(shuffledQuestions[questionIndex]),2000);
    questionIndex++;
    // console.log(selected)
    console.log(sessionAnswers)
    console.log(shuffledQuestions);
    console.log(questionIndex)
}

function highlightSelected(element, isCorrect){
    userChoice = {};
    const Btns = document.querySelectorAll('.answerBtn');
    for(let i = 0; i< Btns.length;i++){
        Btns[i].classList.remove('selected');
    }
    element.classList.add('selected');
    selected=element;
    userChoice.id = selected.parentElement.previousElementSibling.dataset.quesId;
    userChoice.answer = element.innerText;
    userChoice.isItCorrect = isCorrect;
    
}

function showQuestion(quizQuestion){
    showProg();
    if(questionIndex < shuffledQuestions.length){
        timeInSeconds = 0
        clearInterval(interval);
        interval = setInterval(countDown, 1000);
        userChoice = {id:quizQuestion.id, answer:"No answer is selected", isItCorrect: "false"};
        questionHeader.innerText = quizQuestion.question;
        questionHeader.dataset.quesId = quizQuestion.id
        answersContainer.innerHTML = "";
        quizQuestion.choices.forEach(choice => {
        answersContainer.innerHTML += `
        <button type="button" class="answerBtn" data-correct=${(choice.value == quizQuestion.correctValue) ? true : false} onclick='highlightSelected(this, this.dataset.correct)'>${choice.answer}</>
        `
        nextBtn.style.display = "block"
    });
    }else{
        quizContainer.style.display = "none"
        resBtn.style.display = "block"
    }
    
}

function showCorrectAnswer(){
    time.style.display = "none"
    clearInterval(interval);
    document.querySelectorAll('.answerBtn').forEach((btn)=>{
        
        if(btn.dataset.correct == "true"){
            btn.classList.add('correct')
        }
    })
    if (selected != undefined) {
        if(selected.dataset.correct == "true"){
            selected.classList.remove('selected')
            selected.classList.add('correct')
        }else{
            selected.classList.remove('selected')
            selected.classList.add('false')
        }
    }

    sessionAnswers.push(userChoice);
}

function showResults(){
    console.log(sessionAnswers)
    // console.log(sessionAnswers.sort(function(a,b){
    //     return (a.id - b.id)    
    // }))
    // questions.forEach((question)=>{
    //     resultBoard
    // })
    sessionAnswers.forEach((userAnswer)=>{
        const questionBlock = document.createElement('div');
        const question = document.createElement('h3');
        const answersBlock = document.createElement('div');
        const noAnswerSpan = document.createElement('span');
        const matchingQuestion = questions.find((ques)=> ques.id == userAnswer.id);
        const correctAnswer = matchingQuestion.choices.find((rightAnswer)=> matchingQuestion.correctValue == rightAnswer.value);
        console.log(correctAnswer);
        question.innerText = `${matchingQuestion.question}`;
        matchingQuestion.choices.forEach((choice)=>{
            const choiceBtn = document.createElement("p");
            choiceBtn.innerText = choice.answer;

            if (userAnswer.answer == choice.answer) {
                if(userAnswer.isItCorrect == "false"){
                    choiceBtn.classList.add('false')
                }else{
                    choiceBtn.classList.add('correct')
                }
            }else if(userAnswer.answer == "No answer is selected"){
                noAnswerSpan.innerText = "You have not answered this question";
                questionBlock.appendChild(noAnswerSpan)
            }
            if(correctAnswer.answer == choice.answer){
                choiceBtn.classList.add('correct')
            }
            answersBlock.appendChild(choiceBtn)
        })
        questionBlock.appendChild(question);
        resultBoard.appendChild(questionBlock)
        resultBoard.appendChild(answersBlock)
    })
}

function showProg(){
    progBar.style.width = `${(200/10)*questionIndex/2}%`;
}
startBtn.addEventListener("click", startQuiz)
nextBtn.addEventListener("click", displayQuestions)
resBtn.addEventListener("click", showResults)