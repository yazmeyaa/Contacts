import './resetStyles.css'
import { Router } from './Router/Router'
import {useEffect} from 'react'
import { useTypedSelector } from './redux/reducers/useTypedSelector'
import addListeners from './listeners'

function App() {
  const JWT = useTypedSelector(store => store.JWT)
    
  useEffect(()=>{
    addListeners()
  }, [])

  useEffect(()=>{
    if(JWT){
      alert('JWT is setted')
    } else{
      alert('JWT is removed')
    }
  },[JWT])

  return (
    <Router />
  );
}

export default App;
