import styled from 'styled-components'

export const Container = styled.div`
    &{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: .5rem 1rem;
        border: 1px solid black;
        border-radius: 12px;
        background-color: snow;
        width: fit-content;
        height: fit-content;
        box-shadow: 1px 1px 8px 0px #909090;
        transition: .5s;
    }
`

export const TitleText = styled.h1`
    &{  
        font-family: Arial, Helvetica, sans-serif;
        text-transform: capitalize;
        font-weight: 400;
        user-select: none;
    }
`

export const InputsContainer = styled.form`
    &{
        font-size: 24px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: .5rem 1rem;
        gap: 1rem;
    }
`

export const CustomInput = styled.input`
    &{
        padding: 5px;
        border-radius: 8px;
        border: 1px solid #606060;
    }
    &::placeholder{
        text-transform: capitalize;
    }
    &:focus{
        border: 1px solid #0356fc;
        outline: #0356fc;
    }
`

export const LoginButton = styled.button`
    &{
        text-transform: uppercase;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        width: fit-content;
        padding: 4px 6px;
        font-weight: 400;
        border: 1px solid gray;
        border-radius: 8px;
        cursor: pointer;
        transition: .3s;
    }

    &:hover{
        background-color: #606060;
        color: white;
    }
`

export const AuthSubText = styled.span`
    &{
        font-size: 18px;
    }
`

export const TextButton = styled.button`
    &{
        font-size: 18px;
        border: none;
        background-color: transparent;
        text-decoration: underline;
        font-style: italic;
        font-weight: 500;
        cursor: pointer;
        transition: .4s;
        margin: 0px;
        padding: 0px;
    }
    &:hover{
        color: darkblue;
    }
`