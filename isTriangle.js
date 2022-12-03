const inputs = document.querySelectorAll(".input-angle");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

function sumOfAnglesFunction(a,b,c){
    const sumAngle = a + b +c;
    return sumAngle;
}


function checkIfTriangle(){
    
    const sumOfAngles = sumOfAnglesFunction(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sumOfAngles==180){
        output.innerText = "Yay! It is a Triangle.🙌"
    }else{
        output.innerText = "Oh no, It isn't a Triangle.🤷‍♀️"
    }
}



checkBtn.addEventListener("click", checkIfTriangle);