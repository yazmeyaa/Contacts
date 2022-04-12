import axios from "axios"
import React from "react"
import { SingleContactContainer, Summary } from './styled'

interface SingleContactProps {
    name: string,
    lastName: string,
    phoneNumber: string,
    id: number
}

const SingleContact:React.FC<SingleContactProps> = ({name, lastName, phoneNumber, id}) => {

    const token = localStorage.getItem('JWT')

    const fetchToken = () => {
        axios.post('http://localhost:13813/api/getcontacts', {token: token})
    }
    
    return(
        <SingleContactContainer>
            <Summary>{name + ' ' + lastName}</Summary>
            <div>
                <p>id: <span>{id}</span></p>
                <p>name: <span>{name}</span></p>
                <p>lastname: <span>{lastName}</span></p>
                <p>phone number: <span>{phoneNumber}</span></p>
            </div>
            <button onClick={fetchToken}>Remove</button>
            <button>Edit</button>
        </SingleContactContainer>
    )
}

export default SingleContact