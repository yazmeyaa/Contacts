import {Request, Response, NextFunction} from 'express'
import JWT from 'jsonwebtoken'
import config from 'config'

const extractToken = (req: Request, res: Response, next: NextFunction) => {
    const {token}  = req.body

    if(typeof token == (null || undefined)){
        return res.status(403).json({
            "ERROR": "Token required"
        })
    }

    const trustToken = JWT.verify(token, config.get('JWTsecret'))
    console.log(trustToken)

    res.status(200).send({'message':'ok'})

    next()
}


export default extractToken