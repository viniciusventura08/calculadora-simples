const iniciar = document.getElementById('iniciar');


function calculadora(){

alert('Bem-vindo à calculadora!');

let numero1 = Number(prompt('Digite o primeiro número à ser calculado:'));
let operador = prompt('Digite o operador a ser usado (+, -, *, /)');
let numero2 = Number(prompt('Digite o segundo número a ser calculado:'));

let resultado;

if (operador == '+'){
    resultado = numero1 + numero2;
} 
else if (operador == '-'){
    resultado = numero1 - numero2;
}
else if (operador == '*'){
    resultado = numero1 * numero2;
}
else if (operador == '/'){
    resultado = numero1 / numero2;
}
else {
    alert('Digite um operador válido!');
}
alert('O resultado é: ' + resultado);
}

iniciar.addEventListener('click', calculadora);