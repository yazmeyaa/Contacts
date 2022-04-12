import {Schema, model} from 'mongoose'

const schema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    lastName: {
        type: String,
        required: false,
        minlength: 1
    },
    phoneNumber: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
})

const Contacts = model('Contacts', schema)

export default Contacts