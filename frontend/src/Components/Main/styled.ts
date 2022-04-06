import styled from "styled-components";
import { Link } from "react-router-dom";

export const  Container = styled.div`
    &{
        width: 100vw;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`

export const CustomLink = styled(Link)`
    &{
        color: black;
        font-size: 20px;
        transition: .5s;
        font-family: Arial, Helvetica, sans-serif;
        border: 1px solid darkgray;
        padding: .5rem 1rem;
        border-radius: 12px;
    }
    &:hover{
        color: white;
        background-color: darkgray;
        text-decoration: none;
    }
`