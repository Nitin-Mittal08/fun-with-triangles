const inputs = document.querySelectorAll(".side-value");
const calcAreaBtn = document.querySelector("#calc-area");
const outputEl = document.querySelector("#output");

function triangleArea(a,b,c){
    const s = (a+b+c)/2
    const area = Math.sqrt([s * (s-a) * (s-b) * (s-c)]).toFixed(2);
    return area;
}

function calculateArea(){
    if(Number(inputs[0].value)>0 && Number(inputs[1].value)>0 && Number(inputs[2].value)>0){
    const triangleA = triangleArea(Number(inputs[0].value),Number(inputs[1].value), Number(inputs[2].value));

    outputEl.innerText = "The area of the Triangle is: "  + triangleA;
    }else{
        outputEl.innerText = "Enter positive values for sides of triangle";
    }
}



calcAreaBtn.addEventListener("click",calculateArea);
