const service = require("./theaters.service");

function list(req, res){
    res.status(200).json({data: `${req.method} to ${req.originalUrl}`})
}

module.exports = {
    list
}