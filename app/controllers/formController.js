const formService = require("../services/formService");
const SuccessResult = require('../utils/SuccessResult')

async function index (req, res) {
    const data = await formService.list()
    return SuccessResult.make(res).send(data)
}
async function detail (req, res) {
    const data = await formService.detail(req.params.id)
    return SuccessResult.make(res).send(data)
}

async function store (req, res) {

    const body = req.body;
    body.status = 'active';
    await formService.insert(body)
    return SuccessResult.make(res).sendMessage('data saved')
}

async function update (req, res) {

    const body = req.body;
    body.status = 'active';
    const data = await formService.update(req.params.id, body)
    return SuccessResult.make(res).sendMessageData(data, 'data updated')
}
async function destroy (req, res) {
    const data = await formService.deleteForm(req.params.id)
    return SuccessResult.make(res).sendMessageData(data, 'data deleted')
}
async function surveyor (req, res) {

    const data = await formService.surveyor(req.params.id, req.body)
    return SuccessResult.make(res).sendMessageData(data, 'data update')
}

module.exports = {
    index,
    detail,
    store,
    update,
    destroy,
    surveyor
}