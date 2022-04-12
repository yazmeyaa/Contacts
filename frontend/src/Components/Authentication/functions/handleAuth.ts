import axios, {AxiosResponse} from 'axios'
import { UserActions, userActionsEnum } from '../../../redux/types/user'
import { Dispatch } from 'redux'
import { DataType, dataFromServer } from '../types/types'


export async function handleAuth(values: DataType, dispatch: Dispatch<UserActions>){
    dispatch({type: userActionsEnum.JWT_FETCH_START})

    const rcv_data = await axios.post('http://localhost:13813/api/login', values)
    .then((response: AxiosResponse<{JWT: string}>) => {
        return new dataFromServer(response.data.JWT)
    }, (error)=>{
        dispatch({type: userActionsEnum.JWT_FETCH_END})
        throw new Error(error.message)
    })
    .then(res => {
        dispatch({type: userActionsEnum.JWT_FETCH_END})
        return res.JWT
    })

    if(typeof rcv_data === 'string' && rcv_data.length > 0){
        localStorage.setItem('JWT', rcv_data)
        dispatch({type: userActionsEnum.SET_JWT, payload: rcv_data})
    } 

}