import styled from 'styled-components'

export const Container = styled.div`
    &{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: .5rem 1rem;
        border: 1px solid black;
        border-radius: 12px;
        background-color: snow;
        width: fit-content;
        height: fit-content;
        box-shadow: 1px 1px 8px 0px #909090;
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
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: .5rem 1rem;
        border: 1px solid red;
        gap: 1rem;
    }
`

export const CustomInput = styled.input`
                                            //TO DO:
                                            //Styles
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
                                                //TO DO:
                                                //Styles
    &{
        text-transform: uppercase;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 22px;
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
    }
`