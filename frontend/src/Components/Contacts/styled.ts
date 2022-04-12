import styled from "styled-components";


// Contacts

export const ContactsContainer = styled.div`
    &{
        display: flex;
        flex-direction: column;
        width: max-content;
        margin: 0px auto;
        padding: 1rem 0px;
        gap: 1rem;
    }
`

// Single Contact
export const SingleContactContainer = styled.details`
    &{
        border-radius: .5rem    ;
        box-sizing: border-box;
        border: 1px solid black;
        width: 100%;
        padding: 6px 12px;
    }
`

export const Summary = styled.summary`
    &{
        user-select: none;
    }
`