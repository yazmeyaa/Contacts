import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import {Schema} from 'express-validator'

const validationSchema: Schema = ({
    password: {
        isString: {
            options: [],
            errorMessage: 'Password must be a string type.'
        },
        isLength:{
            errorMessage: 'Password must be more then 8 chars.',
            options:{min: 8}
        }
    }
})

function login (req: Request, res: Response){
    
}

export default login