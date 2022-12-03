const inputs = document.querySelectorAll(".side-value");
const calcAreaBtn = document.querySelector("#calc-area");
const outputEl = document.querySelector("#output");

function triangleArea(a,b,c){
    const s = (a+b+c)/2
    const area = Math.sqrt([s * (s-a) * (s-b) * (s-c)]);
    return area;
}

function calculateArea(){
    const triangleA = triangleArea(Number(inputs[0].value),Number(inputs[1].value), Number(inputs[2].value));

    outputEl.innerText = "The area of the Triangle is: "  + triangleA;
}



calcAreaBtn.addEventListener("click",calculateArea);