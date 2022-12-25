const questionHeader = document.querySelector(".question");
const nextBtn = document.querySelector(".next");
const startBtn = document.querySelector(".start");
const answersContainer = document.querySelector(".answers-container");
const content = document.querySelector(".wrapper")
const time = document.querySelector(".time");
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
    questionIndex++;
}

function displayQuestions(){ 
    if(questionIndex <= shuffledQuestions.length-1){
        showCorrectAnswer()
        clearTimeout(timeOut)
        timeOut = setTimeout(()=>showQuestion(shuffledQuestions[questionIndex]),3000);
    }else{
        startBtn.innerText = "Restart";
        startBtn.style.display = "block"
        nextBtn.style.display = "none"
    }
    // console.log(selected)
    console.log(sessionAnswers)
    questionIndex++;
}

function highlightSelected(element, isCorrect){
    userChoice = {};
    const Btns = document.querySelectorAll('.answerBtn');
    for(let i = 0; i< Btns.length;i++){
        Btns[i].classList.remove('selected');
    }
    element.classList.add('selected');
    userChoice.answer = element.innerText;
    userChoice.isItCorrect = isCorrect;
    selected=element;
    console.log(selected)
}

function showQuestion(quizQuestion){
    questionHeader.innerText = quizQuestion.question;
    answersContainer.innerHTML = "";
    quizQuestion.choices.forEach(choice => {
        answersContainer.innerHTML += `
        <button type="button" class="answerBtn" data-correct=${(choice.value == quizQuestion.correctValue) ? true : false} onclick='highlightSelected(this, this.dataset.correct)'>${choice.answer}</>
        `
    });
    userChoice = {answer:"No answer is selected", isItCorrect: "false"};
}

function showCorrectAnswer(){
    document.querySelectorAll('.answerBtn').forEach((btn)=>{
        if(selected.dataset.correct == "true"){
            selected.classList.remove('selected')
            selected.classList.add('correct')
        }else{
            selected.classList.remove('selected')
            selected.classList.add('false')
        }

        if(btn.dataset.correct == "true"){
            btn.classList.add('correct')
        }
    })
    sessionAnswers.push(userChoice);
}

startBtn.addEventListener("click", startQuiz)
nextBtn.addEventListener("click", displayQuestions)