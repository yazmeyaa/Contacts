export type DataType = {
    email: string;
    password: string;
}

class dataFromServer{
    JWT: string
    constructor(JWT: string){
        this.JWT = JWT
    }
} 

class messageFromServer{
    message: string
    constructor(message: string){
        this.message = message
    }
} 


export { dataFromServer, messageFromServer } 