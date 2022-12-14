const baseValue = document.querySelector("#base-value");
const heightValue = document.querySelector("#height-value");
const calculateBtn = document.querySelector("#calc-hypotenuse");
const outputEl = document.querySelector("#output");


function sumOfSquares(a, b){
    return a*a + b*b;
}

function calculateHypotenuse(){
    if(Number(baseValue.value)>0 && Number(heightValue.value)>0){
    const sumSquares = sumOfSquares(Number(baseValue.value), Number(heightValue.value));
    const hypotenuse = Math.sqrt(sumSquares).toFixed(2);

    outputEl.innerText = "The value of Hypotenuse is: " + hypotenuse;
    }else{
        outputEl.innerText = "Enter positive values of sides of triangle";
    }
}


calculateBtn.addEventListener("click",calculateHypotenuse);
