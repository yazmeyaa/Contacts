export enum userActionsEnum {
    SET_JWT = 'SET_JWT',
    REMOVE_JWT = 'REMOVE_JWT',
    JWT_FETCH_START = 'JWT_FETCH_START',
    JWT_FETCH_END = 'JWT_FETCH_END'
}

interface ISetJWTAction{
    type: userActionsEnum.SET_JWT
    payload: string
}

interface IRemoveJWTAction{
    type: userActionsEnum.REMOVE_JWT
}

interface IJWT_FETCH_START{
    type: userActionsEnum.JWT_FETCH_START,
}

interface IJWT_FETCH_END{
    type: userActionsEnum.JWT_FETCH_END,
}


export type UserActions = ISetJWTAction | IRemoveJWTAction | IJWT_FETCH_START | IJWT_FETCH_END