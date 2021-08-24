const service = require("./reviews.service");

async function list(req, res){
    const reviews = await service.list();
    res.status(200).json({ data: reviews });
}

module.exports = {
    list
}