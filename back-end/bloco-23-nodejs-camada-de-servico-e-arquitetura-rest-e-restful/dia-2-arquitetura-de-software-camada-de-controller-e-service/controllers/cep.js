const okPong = (req, res)=>{
    return res.status(200).send({ "message": "pong!" });
}

module.exports = {
    okPong
}