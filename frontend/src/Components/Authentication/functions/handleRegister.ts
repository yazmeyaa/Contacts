import axios, {AxiosResponse} from 'axios'
import { UserActions, userActionsEnum } from '../../../redux/types/user'
import { Dispatch } from 'redux'

type DataType = {
    email: string;
    password: string;
}

class messageFromServer{
    message: string
    constructor(message: string){
        this.message = message
    }
} 

export  function handleRegister(values: DataType, dispatch: Dispatch<UserActions>){

    const rcv_data = axios.post('http://localhost:13813/register', values)
    .then((response: AxiosResponse<{message: string}>) => {
        return new messageFromServer(response.data.message)
    }, (error)=>{
        throw new Error(error)
    })

    if(typeof rcv_data === 'string'){
        dispatch({type: userActionsEnum.SET_JWT, payload: rcv_data})
    }

}