const progressBar = document.getElementById("progress-bar");
const progressNext = document.getElementById("progress-next");
const progressPrev = document.getElementById("progress-prev");
const steps = document.querySelectorAll(".step");
const infoBlock = document.querySelector(".info-block");
const inputBlock = document.querySelector(".input-block");
const startBlock = document.querySelector(".start-block");
const quizContainer = document.querySelector(".quizz-container")
const questionHeader = document.querySelector(".question");
const nextBtn = document.querySelector(".next");
const startBtn = document.querySelector(".start");
const answersContainer = document.querySelector(".answers-container");
const content = document.querySelector(".wrapper")
const time = document.querySelector(".time");
const resBtn = document.querySelector('.result');
console.log(resBtn)
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
let active = 1;

progressNext.addEventListener("click", () => {
    console.log("eeeee");
    active++;
    if (active > steps.length) {
        active = steps.length;
    }
    updateProgress();
});

  progressPrev.addEventListener("click", () => {
    active--;
    if (active < 1) {
      active = 1;
    }
    updateProgress();
  });

  const updateProgress = () => {
    // toggle active class on list items
    steps.forEach((step, i) => {
      if (i < active) {
        step.classList.add("active");
      } 
      else {
        step.classList.remove("active");
      }
    });
    // set progress bar width  
    progressBar.style.width = 
      ((active - 1) / (steps.length - 1)) * 100 + "%";
    // enable disable prev and next buttons
    if (active === 1) {
      progressNext.disabled = false;
      progressPrev.disabled = true;
      infoBlock.style.display="none";
      inputBlock.style.display = "block";
    }else if(active === steps.length - 1) {
      progressPrev.disabled = false;
      startBlock.style.display = "none";
      infoBlock.style.display="block";
      inputBlock.style.display = "none";

    }
    else if (active === steps.length) {
      progressNext.disabled = true;
      startBlock.style.display = "block";
      infoBlock.style.display="none";
      inputBlock.style.display = "none";
    } else {
      progressPrev.disabled = false;
      progressNext.disabled = false;
      startBlock.style.display = "none";
    }
  };



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
        nextBtn.style.display = "block";
        showProg();
    });
    }else{
        quizContainer.style.display = "none"
        resBtn.style.display = "block"
    }
    
}

function showCorrectAnswer(){
    time.style.display = "none";
    progBar.style.display = "none";
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
        questionBlock.classList.add('result-card');
        const question = document.createElement('h3');
        const answersBlock = document.createElement('div');
        answersBlock.classList.add('answersBlock')
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
        questionBlock.appendChild(answersBlock)
    })
}

function showProg(){
    progBar.style.display = "block";
    progBar.style.width = `${(200/10)*questionIndex/2}%`;
}
startBtn.addEventListener("click", startQuiz)
nextBtn.addEventListener("click", displayQuestions)
resBtn.addEventListener("click", showResults)