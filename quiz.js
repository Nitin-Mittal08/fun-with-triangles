const submitBtn = document.querySelector("#submit-btn");
const quizForm = document.querySelector(".quiz-form");
const output = document.querySelector("#output");

const rightAnswers = ["90°", "right angled","one right angle","Equilateral triangle","85°"];

function checkAnswers(){
    let score = 0;
    let index = 0;
    const formResponse = new FormData(quizForm);
    for(let value of formResponse.values()){
        if(value==rightAnswers[index]){
            score = score + 1;
        }
        index+=1;
    }

    output.innerText = "Your Score is:" + score;
}

submitBtn.addEventListener("click", checkAnswers);
