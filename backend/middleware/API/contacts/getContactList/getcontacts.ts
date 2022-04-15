import {Request, Response} from 'express'
import config from 'config'
import JWT from 'jsonwebtoken'

const getContacts = async (req: Request, res: Response) => {
    const {token}: {token: string} = req.body

    const decodedToken = JWT.verify(token, config.get('JWTsecret'), (error, decoded)=>{
        if(error){
            
        }
        return decoded
    })
    

    if(!token){
        return res.status(403).send({"ERROR": "User token required"})
    }

}

export default getContacts