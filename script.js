document.querySelector('.display-calculation').innerHTML = localStorage.getItem('calculation');
let calculation = localStorage.getItem('calculation');
function updateCalc(value){
    calculation += value;
    document.querySelector('.display-calculation').innerHTML = calculation;
    localStorage.setItem('calculation', calculation);
}