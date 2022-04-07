import { combineReducers } from "redux"; 
import { contactsReducer } from "./contacts";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    JWT: userReducer
})

export type RootState = ReturnType<typeof rootReducer>