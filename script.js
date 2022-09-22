const calculo = document.getElementById("calcular");
const clean = document.getElementById("clean");
const back = document.getElementById("back");
const result = document.getElementById("res");
const DivImc = document.getElementById("DivImc");
const MyImc = document.getElementById("MyImc");
const situation = document.getElementById("situation");
let altura = document.getElementById("altura");
let peso = document.getElementById("peso");

//-----------BMI calculation---------
function CalculoImc(){
    
    if(altura.value.length == 0 || peso.value.length == 0){
        alert("Please, type something");
    }else{
        
        let imc = parseInt(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value));
        if(imc < 18.5){
            result.style.display = "flex";
            DivImc.style.display = "none";
            MyImc.innerHTML = `Seu IMC: ${parseFloat(imc.toFixed(1))}`;
            situation.innerHTML = `Situação atual: Magreza`;
        }else if(imc >= 18.5 || imc <= 24.9){
            result.style.display = "flex";
            DivImc.style.display = "none";
            MyImc.innerHTML = `Seu IMC: ${parseFloat(imc.toFixed(1))}`;
            situation.innerHTML = `Situação atual: Normal`;
        }else if(imc >= 25.0 || imc <= 29.9){
            result.style.display = "flex";
            DivImc.style.display = "none";
            MyImc.innerHTML = `Seu IMC: ${parseFloat(imc.toFixed(1))}`;
            situation.innerHTML = `Situação atual: Sobrepeso`;
        }else if(imc >= 30.0 || imc <= 39.9){
            result.style.display = "flex";
            DivImc.style.display = "none";
            MyImc.innerHTML = `Seu IMC: ${parseFloat(imc.toFixed(1))}`;
            situation.innerHTML = `Situação atual: Obesidade`;
        }else{
            result.style.display = "flex";
            DivImc.style.display = "none";
            MyImc.innerHTML = `Seu IMC: ${parseFloat(imc.toFixed(1))}`;
            situation.innerHTML = `Situação atual: Obesidade grave`;
        }
    }
       
    
}


//------CLEAN BUTTON-----

function CleanButton(){
    altura.value = "";
    peso.value = "";
}


//----BACK BUTTON-----
function BackButton(){
    result.style.display = "none";
    DivImc.style.display = "flex";
}


//------ADD EVENT LISTENER-----
calculo.addEventListener("click", CalculoImc);
clean.addEventListener("click", CleanButton);
back.addEventListener("click", BackButton);





