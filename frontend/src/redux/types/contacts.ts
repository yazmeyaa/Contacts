export enum ContactActionTypes {
    ADD_CONTACTS = 'ADD_CONTACTS',
    REMOVE_CONTACT = 'REMOVE_CONTACT',
    FETCH_CONTACT = 'FETCH_CONTACT',
    EDIT_CONTACT = 'EDIT_CONTACT'
}

export type singleContact = {
    name: string,
    lastName: string,
    phoneNumber: string,
    id: number

}

interface IAddContactAction{
    type: ContactActionTypes.ADD_CONTACTS
    payload: singleContact
}

interface IRemoveContactAction{
    type: ContactActionTypes.REMOVE_CONTACT
    payload: string
}

interface IEditContactAction{
    type: ContactActionTypes.EDIT_CONTACT
    payload: singleContact
}

interface IFetchContactAction{
    type: ContactActionTypes.FETCH_CONTACT
    payload: Array<singleContact>
}

export type ContactAction = IAddContactAction | IRemoveContactAction | IEditContactAction | IFetchContactAction
