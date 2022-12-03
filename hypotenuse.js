const baseValue = document.querySelector("#base-value");
const heightValue = document.querySelector("#height-value");
const calculateBtn = document.querySelector("#calc-hypotenuse");
const outputEl = document.querySelector("#output");


function sumOfSquares(a, b){
    return a*a + b*b;
}

function calculateHypotenuse(){
    const sumSquares = sumOfSquares(Number(baseValue.value), Number(heightValue.value));
    const hypotenuse = Math.sqrt(sumSquares);

    outputEl.innerText = "The value of Hypotenuse is: " + hypotenuse;
}


calculateBtn.addEventListener("click",calculateHypotenuse);