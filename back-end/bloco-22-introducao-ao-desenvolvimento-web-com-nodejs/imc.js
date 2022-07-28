function imc (height, weigh){
let totalImc = (weigh / Math.pow(height,2)).toFixed(2);

if (totalImc >= 18.5 && totalImc <= 24.9){
    console.log(`Hello man, your IMC is ${totalImc}. Peso normal `);
}
else if (totalImc >= 25 && totalImc <= 29.9){
    console.log(`Hello man, your IMC is ${totalImc}. Acima do peso `);
}
else if (totalImc >= 30 && totalImc <= 34.9){
    console.log(`Hello man, your IMC is ${totalImc}. Obesidade grau I `);
}
else if (totalImc >= 35.0){
    console.log(`Hello man, your IMC is ${totalImc}. Obesidade grau II `);
}
else if (totalImc < 18.5){
    console.log(`Hello man, your IMC is ${totalImc}. you are underweight (thinness) `);
}


}

module.exports = imc;