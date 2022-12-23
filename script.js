const questionHeader = document.querySelector(".question");
const nextBtn = document.querySelector(".next");
const answersContainer = document.querySelector(".answers-container");
const content = document.querySelector(".wrapper")
const time = document.querySelector(".time");
let shuffledQuestions = questions.sort(()=>Math.random() - 0.5);
console.log(shuffledQuestions)
let questionIndex = 0;
let timeInSeconds = 0;
let interval = 0;
let sessionAnswers = [];
function countDown(){
    if(timeInSeconds === 30){
        clearInterval(interval);
        nextBtn.click();
    }else{
        timeInSeconds++;
        time.innerText = timeInSeconds;
    }
}
// setInterval(countdown,1000);
function shuffleArray(){
    if(questionIndex <= shuffledQuestions.length-1){
        showQuestion(shuffledQuestions[questionIndex]);
    }else{
        content.style.display = "none"
        document.body.style.backgroundColor = "red"
    }
    timeInSeconds = 0
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
    questionIndex++;
}

function showQuestion(randomquestion){
    questionHeader.innerText = randomquestion.question;
    answersContainer.innerHTML = '';
    randomquestion.choices.forEach(choice=> {
        const button = document.createElement('button');
        button.innerText = choice.answer;
        answersContainer.appendChild(button);
        if(choice.value === randomquestion.correctValue){
            button.setAttribute("data-correctValue", "");
        }
        button.addEventListener("click", function(e){
            let answered = {};
            const userChoice = e.target;
            console.log(userChoice)
            console.log()
            if(userChoice.hasAttribute("data-correctValue")){
                userChoice.classList.add('correct');
            }else{
                userChoice.classList.add('false');
                answered.choice = userChoice.innerText;
                answered.ques = randomquestion.id;
                sessionAnswers.push(answered)
                console.log(sessionAnswers)
            }
            
        })
    });
    // shuffledQuestions.splice(randomquestion,1);
    // clearInterval(interval);
    // interval = setInterval(countDown, 1000);
    console.log(shuffledQuestions.length)
}



// shuffleArray()
nextBtn.addEventListener('click', shuffleArray);
console.log()