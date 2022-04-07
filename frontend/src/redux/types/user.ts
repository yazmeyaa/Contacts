export enum userActionsEnum {
    SET_JWT = 'SET_JWT',
    REMOVE_JWT = 'REMOVE_JWT',
}

interface ISetJWTAction{
    type: userActionsEnum.SET_JWT
    payload: string
}

interface IRemoveJWTAction{
    type: userActionsEnum.REMOVE_JWT
}


export type UserActions = ISetJWTAction | IRemoveJWTAction 