function userName(req, res, next){
const { username, email, password } = req.body;
const re = /\S+@\S+\.\S+/;
    if(username.length <= 3 || !re.test(email) || (JSON.stringify(password).length < 4
     || JSON.stringify(password).length > 8) || typeof password !== 'number'){
        return res.status(400).json({"message": "invalid data"});
    }
    next();
}

function loginTest(req, res, next){
    const { email, password } = req.body;
    const re = /\S+@\S+\.\S+/;
    if( !re.test(email) || (JSON.stringify(password).length < 4
    || JSON.stringify(password).length > 8) || typeof password !== 'number'){
        return res.status(400).json({"message": "email or password is incorrect"});
    }
    next();

}

module.exports = {userName, loginTest};


