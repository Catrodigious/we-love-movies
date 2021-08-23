const service = require("./critics.service");

async function list(req, res){
    const critics = await service.list();
    res.status(200).json({ data: critics });
}

module.exports = {
    list
}