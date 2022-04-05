import  express, {Express, Request, Response} from "express";
import mongoose from "mongoose";
import Users from './models/userModel'
const URI:string = 'mongodb+srv://yazmeyaa:123456Aa@contacts.xcivy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const app: Express = express()
const PORT:number = 13913

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

interface ILoginData {
    email: string,
    password: string
}

app.post('/login', async(req: Request, res: Response)=>{
    const {email, password}:ILoginData = await req.body
    if( !(email && password) ){
        return res.status(403).send({message: 'Every fields is required'})
    }
    
    const userData = await Users.findOne({email: email})
    if(userData && userData.password == password){
        return res.status(200).send({JWT: 'SOME.JWT.STRING'})
    }

    return res.status(400).send({message: 'wrong user data'})
})

app.post('/register', async(req: Request, res: Response)=>{
    const {email, password}: ILoginData = await req.body
    
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
})

app.post('/getContacts', (req: Request, res: Response) => {

})

start()