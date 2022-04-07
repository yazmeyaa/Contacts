import { userActionsEnum, UserActions } from '../types/user'

type userStateType = string | null

const initialState: userStateType = null

export const userReducer = (state: userStateType = initialState, action: UserActions):userStateType => {
    switch(action.type){
        case userActionsEnum.SET_JWT:
            return action.payload
        case userActionsEnum.REMOVE_JWT:
            return null
        default: 
            return state
    }
}