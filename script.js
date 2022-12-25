const questionHeader = document.querySelector(".question");
const nextBtn = document.querySelector(".next");
const startBtn = document.querySelector(".start");
const answersContainer = document.querySelector(".answers-container");
const content = document.querySelector(".wrapper")
const time = document.querySelector(".time");
const resBtn = document.querySelector('.result')
var selected;
let timeOut;
let shuffledQuestions = questions.sort(()=>Math.random() - 0.5);
let questionIndex = 0;
let userChoice = {}
let sessionAnswers = [];
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
    timeOut = setTimeout(()=>showQuestion(shuffledQuestions[questionIndex]),3000);
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
    userChoice.id = selected.parentElement.previousElementSibling.dataset.quesId;
    userChoice.answer = element.innerText;
    userChoice.isItCorrect = isCorrect;
    selected=element;
}

function showQuestion(quizQuestion){
    
    if(questionIndex < shuffledQuestions.length){
        questionHeader.innerText = quizQuestion.question;
        questionHeader.dataset.quesId = quizQuestion.id
        answersContainer.innerHTML = "";
        quizQuestion.choices.forEach(choice => {
        answersContainer.innerHTML += `
        <button type="button" class="answerBtn" data-correct=${(choice.value == quizQuestion.correctValue) ? true : false} onclick='highlightSelected(this, this.dataset.correct)'>${choice.answer}</>
        `
    });
    }else{
        resBtn.style.display = "block"
    }
    userChoice = {id:quizQuestion.id, answer:"No answer is selected", isItCorrect: "false"};
    nextBtn.style.display = "block"
}

function showCorrectAnswer(){
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

startBtn.addEventListener("click", startQuiz)
nextBtn.addEventListener("click", displayQuestions)