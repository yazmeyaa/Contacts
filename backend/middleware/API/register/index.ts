import {Request, Response} from 'express'
import Users from '../../../models/userModel'

interface ILoginData {
    email: string,
    password: string
}

const register = async(req: Request, res: Response)=>{
    const {email, password}: ILoginData = await req.body
    console.log(email, password)
    
    if( !(email && password) ){
        return res.status(403).send({message: 'Every fields is required'})
    }

    const isUserAlreadyExist = await Users.findOne({email: email})

    if(isUserAlreadyExist){
        return res.status(400).send({message: 'This email is already taken'})
    }

    const newUser = new Users({
        email: email,
        password: password
    })

    await newUser.save()
    console.log('OK')
    res.status(200).send({message: 'ok'})
}

export default register