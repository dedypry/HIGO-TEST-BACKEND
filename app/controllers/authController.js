const authService = require("../services/authService");
const SuccessResult = require('../utils/SuccessResult')

async function signup (req, res) {
    const data = await authService.insert(req.body)
    return SuccessResult.make(res).send(data)
}
async function sigin (req, res) {
    const data = await authService.signWithEmail(req.body)
    return SuccessResult.make(res).sendMessageData(data, 'login success')
}

module.exports = {
    signup,
    sigin
}