import React, { useState } from "react";
import {Container, TitleText, AuthSubText, TextButton} from './styled'
import {Inputs} from './Inputs'

export const Auth: React.FC = () => {
    const [isCurrentAuthentication, setCurrentMode] = useState<boolean>(true)

    return(
        <Container>
            <TitleText>{isCurrentAuthentication ? 'Authentication' : 'Registration'} </TitleText>
            <Inputs isCurrentAuthentication={isCurrentAuthentication} />
                <div>
                    <ModeSwitcher isAuth={isCurrentAuthentication} />
                    <TextButton onClick={()=>{setCurrentMode(prev => !prev)}}>{isCurrentAuthentication ? ' Register now.' : ' Log in now.'}</TextButton>
                </div>
        </Container>
    )
}

type ModeSwitcherProps = {isAuth: boolean}

const ModeSwitcher: React.FC<ModeSwitcherProps> = ({isAuth}) => {
    return(
        <AuthSubText>{isAuth ? 'Already has an account?' : 'Dont have an account?'}</AuthSubText>
    )
}