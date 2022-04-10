export enum userActionsEnum {
    SET_JWT = 'SET_JWT',
    REMOVE_JWT = 'REMOVE_JWT',
    SET_MESSAGE_VISIBLE = 'SET_MESSAGE_VISIBLE',
    SET_MESSAGE_TEXT = 'SET_MESSAGE_TEXT'
}

interface ISetJWTAction{
    type: userActionsEnum.SET_JWT
    payload: string
}

interface IRemoveJWTAction{
    type: userActionsEnum.REMOVE_JWT
}

interface ISetMessageVisible{
    type: userActionsEnum.SET_MESSAGE_VISIBLE,
    payload: boolean
}

interface ISetMessageText{
    type: userActionsEnum.SET_MESSAGE_TEXT,
    payload: string
}


export type UserActions = ISetJWTAction | IRemoveJWTAction | ISetMessageVisible | ISetMessageText