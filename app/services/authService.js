const userModel = require("../models/userModel");
const { generatePassword } = require("../utils/string");
const { setToken } = require('../utils/jwtToken')
const DataNotFound = require('../exceptions/DataNotFound')
const { DURATION, SHORT_HAND_UNIT } = require('../enums/jwt');
const { comparePassword } = require('../utils/string');

async function insert (body) {
    const user = await userModel({
        name: body.name,
        email: body.email,
        password: generatePassword(body.password)
    }).save()

    const paramToken = {
        id: user._id,
        name: user.name,
        email: user.email,
    };
    return {
        ...paramToken,
        token: setToken(paramToken, { duration: DURATION, shorthandUnit: SHORT_HAND_UNIT }),
    };
}

async function signWithEmail (body) {
    const user = await userModel.findOne({
        email: body.email
    })
    if (!user){
         throw new Error('data not found')
    }


    await comparePassword(user.password, body.password);
    const paramToken = {
        id: user._id,
        name: user.name,
        email: user.email,
    };
    return {
        ...paramToken,
        token: setToken(paramToken, { duration: DURATION, shorthandUnit: SHORT_HAND_UNIT }),
    };
}

module.exports = {
    insert,
    signWithEmail
}