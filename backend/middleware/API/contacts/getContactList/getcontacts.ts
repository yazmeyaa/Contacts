import {Request, Response} from 'express'
import config from 'config'
import JWT from 'jsonwebtoken'

const getContacts = async (req: Request, res: Response) => {
    const {token}: {token: string} = req.body

    if(!token){
        return res.status(403).send({"ERROR": "User token required"})
    }

    try{
        const verifyToken = JWT.verify(token, config.get('JWTsecret'))
        console.log(verifyToken)
    }
    catch(Error){
        console.log(Error)
        throw res.status(403).send({"ERROR": "Invalid token!"})
    }
    

    const something = JWT.decode(token)
    console.log(something)
    return res.status(200).send(something)
}

export default getContacts