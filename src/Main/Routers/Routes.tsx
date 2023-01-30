import { lazy, useEffect, useState } from "react";

import PrivateRoutes from "./Private";
import PublicRoutes from "./Public";

const token = localStorage.getItem("token")

const Routers = () => {

    const [Auth, setAuth] = useState(true)
    const login = token + "login"
    const reducerValue = token + "login"

    useEffect(() => {

        (token !== null && login === reducerValue) ? setAuth(true) : setAuth(false)

    }, [login, reducerValue, token])

    return (
        true ?
            <PrivateRoutes /> : <PublicRoutes />
    )
}

export default Routers;
