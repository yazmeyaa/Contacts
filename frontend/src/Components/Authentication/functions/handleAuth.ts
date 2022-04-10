import axios, {AxiosResponse} from 'axios'
import { UserActions, userActionsEnum } from '../../../redux/types/user'
import { Dispatch } from 'redux'

type DataType = {
    email: string;
    password: string;
}

class tokenFromServer{
    JWT: string
    constructor(JWT: string){
        this.JWT = JWT
    }
} 

export async function handleAuth(values: DataType, dispatch: Dispatch<UserActions>){

    const rcv_data = await axios.post('http://localhost:13813/login', values)
    .then((response: AxiosResponse<{JWT: string}>) => {
        return new tokenFromServer(response.data.JWT)
    }, (error)=>{
        throw new Error(error)
    })
    .then(res => res.JWT)

    if(typeof rcv_data === 'string'){
        dispatch({type: userActionsEnum.SET_JWT, payload: rcv_data})
    }

}