const mongoose = require('mongoose')

const Form = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    quiz: {
        type: Array,
        require: true
    },
    surveyor: {
        type: Array,
        require: false
    }
})

module.exports = mongoose.model('Forms', Form);