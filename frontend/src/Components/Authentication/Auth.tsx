import React, { useState } from "react";
import {Container, TitleText, InputsContainer, CustomInput, LoginButton, AuthSubText, TextButton} from './styled'
import {useFormik} from 'formik'
import axios from "axios";

const Auth: React.FC = () => {
    const [isCurrentAuthentication, setCurrentMode] = useState<boolean>(true)

    function handleSubmit() {
        if(isCurrentAuthentication){
            handleAuth()
        } else{
            handleRegister()
        }
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: () => {
            handleSubmit()
        }
    })

    async function handleAuth(){
        const {email, password} = formik.values
        const data = await axios.post('http://localhost:13813/login', {email: email, password: password})
        .then(rcvData => {return rcvData.data}, onError => {alert('Error!')})
        console.log(data)
        
    }

    async function handleRegister() {
        const {email, password} = formik.values
        const data = await axios.post('http://localhost:13813/register', {email: email, password: password})
        .then(data => {
            if(data.status === 200){
                alert('ok')
                return data.data
            } else if(data.status > 400){
                alert('error')
            }
        })
        alert(data.data)
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
                    {isCurrentAuthentication ? <LoginButton type='submit'>login</LoginButton> : <LoginButton type='submit'>register</LoginButton>}
            </InputsContainer>
                <div>
                    <ModeSwitcher isAuth={isCurrentAuthentication} />
                    <TextButton onClick={handleChangeMode}>{isCurrentAuthentication ? ' Register now.' : ' Log in now.'}</TextButton>
                </div>
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