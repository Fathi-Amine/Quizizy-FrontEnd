
let shuffledQuestions = questions.sort(()=>Math.random() - 0.5);
let questionIndex = 0;
let timeInSeconds = 0;
let interval = 0;
let answered = {};
let sessionAnswers = [];
var userChoice;
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

function highlightSelected(element){
    const Btns = document.querySelectorAll('.answerBtn');
    for(let i = 0; i< Btns.length;i++){
        Btns[i].classList.remove('selected');
    }
    element.classList.add('selected')
}

function showQuestion(randomquestion){
    questionHeader.innerText = randomquestion.question;
    answersContainer.innerHTML = '';
    randomquestion.choices.forEach(choice=> {
        const button = document.createElement('button');
        button.classList.add('answerBtn')
        button.innerText = choice.answer;
        answersContainer.appendChild(button);
        if(choice.value === randomquestion.correctValue){
            button.setAttribute("data-correctValue", "");
        }
        
        button.addEventListener("click", function(){
            highlightSelected(button);
            userChoice = button;
            console.log(userChoice)
            // button.classList.toggle('selected')
        })
        
        timeInSeconds = 0
        clearInterval(interval);
        interval = setInterval(countDown, 1000);
        questionIndex++;
        //     let answered = {};
        //     const userChoice = e.target;
        //     console.log(userChoice)
        // 
        // if(userChoice == 0){
            // answered.choice = userChoice;
            // answered.ques = randomquestion.id;
            // sessionAnswers.push(answered)
        //     answered.text = "seeeee"
        //     console.log(answered)
        // }else if(userChoice.hasAttribute("data-correctValue")){
            // userChoice.classList.add('correct');
        //     answered.text="khdmaat"
        //     console.log(answered)
        // }else{
            // userChoice.classList.add('false');
            // answered.choice = userChoice.innerText;
            // answered.ques = randomquestion.id;
            // sessionAnswers.push(answered)
        //     answered.text = "zmtouna"
        //     console.log(answered)
        // }
            
        // })
    });
    // shuffledQuestions.splice(randomquestion,1);
    // clearInterval(interval);
    // interval = setInterval(countDown, 1000);
    console.log(shuffledQuestions.length)
}



// shuffleArray()
startBtn.addEventListener('click', function(){
    nextBtn.style.display = "block";
    startBtn.style.display = "none";
    shuffleArray()
})
nextBtn.addEventListener('click', showQuestion);
console.log()