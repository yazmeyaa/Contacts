import {Dispatch} from 'redux'
import { UserActions } from "../../../redux/types/user";
import { handleAuth } from "./handleAuth";
import { handleRegister } from './handleRegister'

type DataType = {
    email: string;
    password: string;
}

export function handleSubmit(data: DataType, isCurrentAuthentication: boolean, dispatch: Dispatch<UserActions> ) {
    if(isCurrentAuthentication){
        handleAuth(data, dispatch)
    } else{
        handleRegister(data, dispatch)
    }
}