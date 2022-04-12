import { useEffect } from 'react';
import './resetStyles.css'
import { Router } from './Router/Router'
import {useDispatch} from 'react-redux'
import {Dispatch} from 'redux'
import { UserActions, userActionsEnum } from './redux/types/user';


function App() {
  const dispatch: Dispatch<UserActions>  = useDispatch()

  useEffect(()=>{
    const token = localStorage.getItem('JWT')
    if(token){
      dispatch({type: userActionsEnum.SET_JWT, payload: token})
    }
    // eslint-disable-next-line
  }, [])

  return (
    <Router />
  );
}

export default App;
