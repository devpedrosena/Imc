const calcular = document.getElementById('calcular');

//function calculate the Imc

function imc(){
    
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(altura % 1 === 0){
        alturaConvert = altura / 100;
    }else{
        alturaConvert = altura;
    }

    if (nome !== '' && altura !== '' && peso !== ''){
        const Seuimc = peso / (alturaConvert * alturaConvert);

        let imcConvert = Seuimc.toFixed(1);

    let mgsImc = '';

    if (imcConvert < 18.5 ) {
        mgsImc = ('você está abaixo do peso');
    }else if (imcConvert >= 18.5 && imcConvert < 25){
        mgsImc = ('seu peso é ideal');
    }else if (imcConvert >= 25 && imcConvert < 30){
        mgsImc = ('você está com sobrepeso');
    }else if(imcConvert >= 30 && imcConvert < 35){
        mgsImc = ('você está com obesidade grau 1');
    }else if(imcConvert >= 35 && imcConvert < 40){
        mgsImc = ('você está com obesidade grau2');
    }else if(imcConvert >= 40){
        mgsImc = ('você está com obesidade morbida');
    }

    //Print in screen the result for user

    resultado.textContent = `${nome}, o seu imc é ${imcConvert}, ${mgsImc}.`.toUpperCase();

    }else{
        resultado.textContent = 'Preencha todos os campos!'.toUpperCase();
    }

}

calcular.addEventListener('click', imc);