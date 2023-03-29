// variables

let iconClose=document.querySelector('.icon-close');
let resultcont=document.querySelector('.result-container')
let heightInput=document.querySelector('.height-input');
let weightInput=document.querySelector('.weight-input');
let calculateButton=document.querySelector('.calculate');
let result=document.querySelector('.result');
let resultStatement=document.querySelector('.statement')
let BMI, height,weight;

iconClose.addEventListener('click',() =>{
    resultcont.style.display = 'none';
});

calculateButton.addEventListener('click', ()=>{
    resultcont.style.display= 'block';
});

// javascript below calculate the bmi and return the result to inner html

calculateButton.addEventListener('click', ()=>{
    height=heightInput.value;
    weight=weightInput.value;
    BMI=weight/(height**2);
    result.innerText = BMI;

    if(BMI < 18.5){
        resultStatement.innerText = "Underweight with minimal health risk", (0x1F525);
    }
    else if((BMI >= 18.5)&&(BMI <= 24.9)){
        resultStatement.innerText = "Normal with minimal health risk";
    }
    else if((BMI >= 25)&&(BMI <= 29.9)){
        resultStatement.innerText = "Overweight with increased health risk";
    }
    else if((BMI >= 30)&&(BMI <= 34.9)){
        resultStatement.innerText = "obesse with high health risk";
    }
    else if((BMI >= 35)&&(BMI <= 39.9)){
        resultStatement.innerText = "Severely obesse with highly increased health risk";
    }
    else{
        resultStatement.innerText = "Mobility obesse with extremely high health risk";
    }
});