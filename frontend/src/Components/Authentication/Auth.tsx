import React from "react";
import {Container, TitleText, InputsContainer, CustomInput, LoginButton} from './styled'
import {useFormik} from 'formik'

const Auth: React.FC = () => {

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

                                            //TO DO:
                                            //Complete styles for this component
    return(
        <Container>
            <TitleText>authentication</TitleText>
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
                <LoginButton type='submit'>login</LoginButton>
            </InputsContainer>
        </Container>
    )
}

export {Auth}