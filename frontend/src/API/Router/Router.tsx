import {Routes, Route, Navigate} from 'react-router-dom'

import { Auth } from '../../Components/Authentication/Auth'
import { Contacts } from '../../Components/Contacts/Contacts'
import { NotFound } from '../../Components/NotFound/NotFound'
import { MainPage } from '../../Components/Main/MainPage'


const Router = () => {
    //logic
    return(
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/auth' element={<Auth />} />
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
    const userToken:string = ''    
    
    return userToken ? children : <Navigate to={{pathname: '/auth'}} />
}


export {Router}