import React from "react"
import { Link } from "react-router-dom"

const NotFound:React.FC = () => {
    return(
        <div>
            <h1>Page not found</h1>
            <br />
            <Link to={'/auth'}>Return to auth page</Link>
        </div>
    )
}

export {NotFound}