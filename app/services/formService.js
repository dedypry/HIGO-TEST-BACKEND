const { now } = require("mongoose");
const formModel = require("../models/formModel");
const InvalidData = require("../exceptions/InvalidData");

async function list () {
    return await formModel.find();

}
async function detail (id) {
    return await formModel.findById(id);

}
async function insert (body) {
    return await formModel(body).save();

}
async function update (id, body) {
    try {
        await formModel.updateOne(
            { _id: id },
            {
                $set: body
            }
        )
    } catch (error) {
        console.log(error)
    }
}
async function deleteForm (id) {
    try {
        await formModel.deleteOne({ _id: id })
    } catch (error) {
        throw new InvalidData(error)
    }
}

async function surveyor (id, body) {
    body.date = now()
    await formModel.updateOne({
        _id: id
    }, {
        $push: {
            surveyor: body
        }
    })
}

module.exports = {
    list,
    detail,
    insert,
    update,
    deleteForm,
    surveyor
}