import React from "react";
import { useTypedSelector } from "../../redux/reducers/useTypedSelector";
import SingleContact from "./SingleContact";
import {ContactsContainer} from './styled'

const Contacts: React.FC = () => {
    const contacts = useTypedSelector(state => state.contacts.contactList)
    return(
        <ContactsContainer>
            {contacts.map((item, index)=>{
                return <SingleContact name={item.name} lastName={item.lastName} phoneNumber={item.phoneNumber} id={item.id}/>
            })}
        </ContactsContainer>
    )
}

export {Contacts}