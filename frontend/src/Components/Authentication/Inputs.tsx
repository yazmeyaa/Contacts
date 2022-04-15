import React from "react";
import { handleSubmit } from './functions/handleSubmit'
import {InputsContainer, CustomInput, LoginButton} from './styled'
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../redux/reducers/useTypedSelector";

interface IInputsProps {
    isCurrentAuthentication: boolean,
}

export const Inputs: React.FC<IInputsProps> = ({isCurrentAuthentication}) => {
    const {loading} = useTypedSelector(state => state.JWT)
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
                disabled={loading}
                />

            <CustomInput
                type='password'
                name='password' 
                onChange={formik.handleChange} 
                value={formik.values.password} 
                placeholder='password'
                disabled={loading}
                />

                {isCurrentAuthentication ? <LoginButton type='submit' disabled={loading} >login</LoginButton> : <LoginButton type='submit' disabled={loading} >register</LoginButton>}

    </InputsContainer>
    )
}