function start() {
   //Vincula uma variável ao elemento botão
    var buttonCalculate = document.querySelector('#button-calculate-imc');
   //cria o evento de click no botão e executa a função.
   buttonCalculate.addEventListener('click', handleButtonClick);
   
   //Vincula as variáveis aos espaços onde se colocar o valor de peso e altura
   var inputWeight = document.querySelector('#input-weight');
   var inputHeight = document.querySelector('#input-height');

   //cria o evento para executar a função ao colocar o valor no espaço de peso e altura
   inputWeight.addEventListener('input', handleButtonClick);
   inputHeight.addEventListener('input', handleButtonClick);

   //Chama a execução da função
   handleButtonClick();
}

//Calcula o IMC
function calculateImc(weight, height) {
    return weight / (height * height);
}

//informa forma fisica de acordo com o IMC
function imcGrauF(imc) {
    if(imc == 16 || imc < 16.99){
        return "muito abaixo do peso"
    } else if (imc == 18 || imc < 18.49){
        return "abaixo do peso"
    } else if (imc == 18.50 || imc < 24.99){
        return "peso normal"
    } else if (imc == 25 || imc < 29.99){
        return "acima do peso"
    } else if (imc == 30 || imc < 34.99){
        return "Obesidade grau I"
    } else if (imc == 35 || imc < 40){
        return "obesidade grau II"
    } else if (imc > 40){
        return "obesidade grau III"
    }
}
 
function handleButtonClick() {
    //Vincula as variáveis aos espaços onde se colocar o valor de resultado, peso e altura
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imc-result');
    var imcGrau = document.querySelector('#imc-grau');

    //Armazena na variável o valor digitado no espaço de peso e altura.
    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);

    //Armazena o resultado do calculo de imc
    var imc = calculateImc(weight, height);
    //Formata o valor do IMC em duas casas decimais e muda o ponto para virgula.
    var formatted = imc.toFixed(2).replace('.', ',');
    //Exibe o valor formatado
    imcResult.textContent = formatted;
       
    imcGrau.textContent = imcGrauF(imc);

   
}


 start();