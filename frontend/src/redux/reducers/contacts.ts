import { ContactAction, ContactActionTypes, singleContact } from '../types/contacts'


interface IContactsInitialState {
    contactList: Array<singleContact> | []
}

const initialState: IContactsInitialState = {           //TODO:
    contactList: [{                                     //-empty array =_=
        name: 'Evgeniy',
        lastName: 'Antonenkov',
        phoneNumber: '+79506825716',
        id: 1
    },
    {
        name: 'Alexey',
        lastName: 'Avramov',
        phoneNumber: '+79512825732',
        id: 2
    },
    {
        name: 'Ivan',
        lastName: 'Pupkin',
        phoneNumber: '+79446825535',
        id: 3
    },
    {
        name: 'Valery',
        lastName: 'Karpov',
        phoneNumber: '+79236825715',
        id: 4
    }]
}

export const contactsReducer = (state = initialState, action: ContactAction):IContactsInitialState => {
    switch(action.type){
        case ContactActionTypes.FETCH_CONTACT:
            return{ ...state, contactList: action.payload }
        case ContactActionTypes.ADD_CONTACTS:
            return {...state, ...action.payload}
        case ContactActionTypes.EDIT_CONTACT:       //TODO:
            return {...state}                       //-EDIT_CONTACT

        case ContactActionTypes.REMOVE_CONTACT:{
            const newArray = state.contactList.filter(function(currentValue){
                return currentValue.id.toString() === action.payload ? false : true
            })
            return {...state, contactList: newArray}
        }

        default: 
            return state
    }
}