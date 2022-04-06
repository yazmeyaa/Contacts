import {contactsActions} from '../actions/actions'
const FETCH_CONTACTS = 'ADD_CONTACT'
const ADD_CONTACT = 'ADD_CONTACT'
const EDIT_CONTACT = 'ADD_CONTACT'
const REMOVE_CONTACT = 'ADD_CONTACT'

interface IContactsInitialState {
    contactList: [],
}

const initialState: IContactsInitialState = {
    contactList: []
}

interface IUserAction {
    type: string;
    payload?: any;
}

export const contactsReducer = (state = initialState, action: IUserAction):IContactsInitialState => {
    switch(action.type){
        case FETCH_CONTACTS:
            return {...state, contactList: action.payload}
            break
        default: 
            return state
    }
}