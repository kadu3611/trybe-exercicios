
function numberState(number){
    try{
    if(number === 0){
        return 'neutro'
    }
    if(number > 0 ){
        return 'positivo'
    }
    if(number < 0) {
        return 'negativo'
}
    if(typeof number !== 'number'){
        return "o valor deve ser um número";
    }
}
catch (err){
    return null;
}
}

module.exports = numberState;