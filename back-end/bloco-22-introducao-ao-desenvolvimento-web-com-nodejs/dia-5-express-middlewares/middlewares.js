function validationMiddleware(req,res, next){
    const { productName } = req.body;
    // fazer desestrutura productName do body
    if(!productName) {
        // verificar se productName existe
        return res.status(400).json({
            message: 'O campo productName é obrigatório mano'
        },
        // res é para mandar uma resposta, transforma o status 400 em script e adiciona uma mensagem
        );
    }
    if(productName.length < 4){
        // condição de menor que 4
        return res.sattus(400).json({
            message: ' O campo productName deve ter pelo menos 4 caracteres mano'
        },
        );
    }
    next();
    // Next para fazer seguir o fluxo.
}

module.exports = validationMiddleware;
