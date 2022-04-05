import React, { useState } from "react";
import {Container, TitleText, InputsContainer, CustomInput, LoginButton, AuthSubText, TextButton} from './styled'
import {useFormik} from 'formik'
import axios from "axios";

const Auth: React.FC = () => {
    const [isCurrentAuthentication, setCurrentMode] = useState<boolean>(true)

    function handleSubmit(email: string, password: string) {
                                            //TO DO:
                                            //Fetch to backend server
        console.log(email, password)
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            handleSubmit(values.email, values.password)
        }
    })

    async function handleAuth(){
        const {email, password} = formik.values
        const data = await axios.post('http://localhost:13913/register', {email: email, password: password})
        if(data.status === 200){

        }
    }

    function handleChangeMode(){
        setCurrentMode((value)=>!value)
    }                                        

    return(
        <Container>
            <TitleText>{isCurrentAuthentication ? 'Authentication' : 'Registration'} </TitleText>
            <InputsContainer onSubmit={formik.handleSubmit}>
                <CustomInput
                    type='email' 
                    autoComplete='email'
                    name='email' 
                    onChange={formik.handleChange} 
                    value={formik.values.email} 
                    placeholder='email'/>
                <CustomInput
                    type='password'
                    name='password' 
                    onChange={formik.handleChange} 
                    value={formik.values.password} 
                    placeholder='password' />
                    {isCurrentAuthentication ? <LoginButton type='submit' onClick={handleAuth}>login</LoginButton> : <LoginButton type='submit'>register</LoginButton>}
                <div>
                    <ModeSwitcher isAuth={isCurrentAuthentication} /> <TextButton onClick={handleChangeMode}>{isCurrentAuthentication ? 'Register now.' : 'Log in now.'}</TextButton>
                </div>
            </InputsContainer>
        </Container>
    )
}

interface IModeSwitcherProps{
    isAuth: boolean
}

const ModeSwitcher: React.FC<IModeSwitcherProps> = ({isAuth}) => {
    return(
        <AuthSubText>{isAuth ? 'Already has an account?' : 'Dont have an account?'}</AuthSubText>
    )
}

export {Auth}