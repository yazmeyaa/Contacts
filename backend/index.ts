import  express, {Express, Request, Response} from "express";
import mongoose from "mongoose";
import config from 'config'
const URI: string = config.get('mongoKey')
const app: Express = express()
const PORT:number = 13813

//import middlewares
import login from "./middleware/API/login";
import register from './middleware/API/register'
import getContacts from "./middleware/API/contacts/getContactList/getcontacts";
//

import checkToken from './middleware/API/checkToken/checkToken'

async function start() {
    try{
        mongoose.connect(URI, {}, ()=>{
            console.log('Connected to DB')
        })

        app.listen(PORT, ()=>{
            console.log(`Server started at port ${PORT}`)
        })
    }
    catch(e: unknown){
        if(e instanceof Error && e){
            throw new Error(e.message)
        } else{
            throw new Error( 'Unknown error')
        }
    }
}

app.use(express.json())
app.use('*', (req:Request, res:Response, next)=> {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "authorization, Origin, Content-type")
    if(req.method == "OPTIONS"){
        return res.status(200).send("ok");
    }
    next();
})


app.post('/api/login',  login)

app.post('/api/checktoken', checkToken)

app.post('/api/register', register)

app.post('/api/contacts', getContacts)

start()