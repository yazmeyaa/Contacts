import {Routes, Route, Navigate} from 'react-router-dom'
import { useTypedSelector } from '../redux/reducers/useTypedSelector'

import { Auth } from '../Components/Authentication/Auth'
import { Contacts } from '../Components/Contacts/Contacts'
import { NotFound } from '../Components/NotFound/NotFound'
import { MainPage } from '../Components/Main/MainPage'


const Router = () => {
    //logic
    return(
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/auth' element={
                <AuthRoute>
                    <Auth />
                </AuthRoute>
            } />
            <Route path='/contacts' element={
                <ProtectedRoute>
                    <Contacts />
                </ProtectedRoute>} 
            > 
            </Route>
            
            <Route path='*' element={<NotFound />}/>
        </Routes>
    )
}

interface IProtectedRouteProps {
    children: JSX.Element
}

const ProtectedRoute = ({children}: IProtectedRouteProps) => {
    const userToken = useTypedSelector(state => state.JWT.JWT)
    return userToken ? children : <Navigate to={{pathname: '/auth'}} />
}

const AuthRoute = ({children}: IProtectedRouteProps) => {
    const userToken = useTypedSelector(state => state.JWT.JWT)
    console.log(userToken)
    return userToken ? <Navigate to={{pathname: '/contacts'}} /> : children
}



export {Router}