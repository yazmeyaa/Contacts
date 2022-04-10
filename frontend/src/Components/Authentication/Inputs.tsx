import React from "react";
import { handleSubmit } from './functions/fetching'
import {InputsContainer, CustomInput, LoginButton} from './styled'
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

interface IInputsProps {
    isCurrentAuthentication: boolean,
}

export const Inputs: React.FC<IInputsProps> = ({isCurrentAuthentication}) => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: () => {
            handleSubmit(formik.values, isCurrentAuthentication, dispatch)
        }
    })

    return (
        <InputsContainer onSubmit={formik.handleSubmit}>

            <CustomInput
                type='email' 
                autoComplete='email'
                name='email' 
                onChange={formik.handleChange} 
                value={formik.values.email} 
                placeholder='email'
                />

            <CustomInput
                type='password'
                name='password' 
                onChange={formik.handleChange} 
                value={formik.values.password} 
                placeholder='password' 
                />

                {isCurrentAuthentication ? <LoginButton type='submit'>login</LoginButton> : <LoginButton type='submit'>register</LoginButton>}

    </InputsContainer>
    )
}