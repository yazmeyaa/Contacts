interface IInitialState {
    JWT: string;
    email: string;
}

const initialState: IInitialState = {
    JWT: '',
    email: '',
}

export const userAuthData = (state = initialState, action):IInitialState => {
    switch (action.type){
        case "GET_JWT":
            return {JWT: '', email: ''}
            break;
    }
}