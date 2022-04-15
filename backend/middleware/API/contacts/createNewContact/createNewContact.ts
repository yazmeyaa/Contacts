import jwtDecode from 'jwt-decode'
import config from 'config'
import JWT from 'jsonwebtoken'

import type { DataFromRequest } from "./types";
import {Request, Response} from 'express'

import Contacts from "../../../../models/contactsModel";

const createNewContact = (req: Request, res: Response) => {
    const {token}: DataFromRequest = req.body

    if(!token){
        return res.status(400).send({ERROR:"TOKEN IS REQUIRED"})
    }

    interface DecodedData {
        email: string;
    }

    const decodedToken = jwtDecode<DecodedData>(token)
    

    console.log(decodedToken.email)

    return res.status(200).send(decodedToken)

}

export default createNewContact