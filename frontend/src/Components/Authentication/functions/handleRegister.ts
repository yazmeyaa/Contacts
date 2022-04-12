import axios, {AxiosResponse} from 'axios'
import { UserActions, userActionsEnum } from '../../../redux/types/user'
import { Dispatch } from 'redux'
import {DataType, messageFromServer} from '../types/types'

export async function handleRegister(values: DataType, dispatch: Dispatch<UserActions>){
    const rcv_data = await axios.post('http://localhost:13813/register', values)
    .then((response: AxiosResponse<{message: string}>) => {
        return new messageFromServer(response.data.message)
    }, (error)=>{
        throw new Error(error)
    })

    if(typeof rcv_data === 'string'){
        dispatch({type: userActionsEnum.SET_JWT, payload: rcv_data})
    }

}