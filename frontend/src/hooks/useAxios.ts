import axios from "axios";
import {Dispatch} from 'redux'
import { UserActions, userActionsEnum } from "../redux/types/user";

const useAxios = async (url:string, data: typeof Object, dispath: Dispatch<UserActions>) => {
    dispath({type: userActionsEnum.JWT_FETCH_START})
    const fetchedData = await axios.post(url, data)
    .then(response => {
        return response.data
    })
    dispath({type: userActionsEnum.JWT_FETCH_END})
    return fetchedData
    
}

export default useAxios