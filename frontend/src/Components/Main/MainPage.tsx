import { Link } from "react-router-dom";
import {Container, CustomLink} from './styled'

const MainPage = () => {
    return(
        <Container>
            <h1>Wellcome to Contacts!</h1>
            <CustomLink to='/auth'> Login </CustomLink>
        </Container>
    )
}

export {MainPage}