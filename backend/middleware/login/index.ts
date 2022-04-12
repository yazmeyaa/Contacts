import {Request, Response} from 'express'
import JWT from 'jsonwebtoken'
import config from 'config'
import Users from '../../models/userModel'

type UserDataType = {
    email: string,
    password: string
}


async function login (req: Request, res: Response){
    const {email, password} = req.body
    if(!email || !password){
        return res.status(403).send({message: 'every field is required'})
    }

    const userData: UserDataType | null = await Users.findOne({email: email})
    if(!userData){
        return res.status(403).send({message: 'Invalid data'})
    }

    if(email == userData.email && password == userData.password){
        const token = JWT.sign({email: email}, config.get('JWTsecret'), {expiresIn: '30m'})
        return res.status(200).send({JWT: token})
    }
}

export default login