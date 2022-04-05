import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
    return(
        <>
            <h1>Wellcome to Contacts!</h1>
            <Link to='/auth'> Login </Link>
        </>
    )
}

export {MainPage}