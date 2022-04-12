import JWT from 'jsonwebtoken'
import {Request, Response} from "express"
import config  from 'config'

function checkToken(req:Request, res:Response){
    const {token} = req.body
    return res.status(200).send('asd')
    
}

export default checkToken