import { userActionsEnum, UserActions } from '../types/user'

type userStateType = {
    JWT: string | null;
    loading: boolean;
}

const initialState: userStateType = {
    JWT: null,
    loading: false
}

export const userReducer = (state: userStateType = initialState, action: UserActions):userStateType => {
    switch(action.type){
        case userActionsEnum.SET_JWT: {
            return {...state, JWT: action.payload}
        }
        case userActionsEnum.REMOVE_JWT:{
            return {...state, JWT: null}
        }
        case userActionsEnum.JWT_FETCH_START:{
            return {...state, loading: true}
        }
        case userActionsEnum.JWT_FETCH_END: {
            return {...state, loading: false}
        }
        default: 
            return state
    }
}