import {Schema, model} from 'mongoose'

const schema = new Schema({
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const Users =  model('Users', schema)

export default Users