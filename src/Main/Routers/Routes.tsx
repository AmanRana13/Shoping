import { lazy, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../Screens/Home/index"))
const OurMenu = lazy(() => import("../Screens/OurMenu/index"))
const Outlets = lazy(() => import("../Layout/index"))

const token = "123456"

const Routers = () => {

    const [Auth, setAuth] = useState(true)
    const login = token + "login"
    const reducerValue = token + "login"

    useEffect(() => {

        if (token !== null && login === reducerValue) {
            setAuth(true)
        }

    }, [login, reducerValue])

    return (
        <>
            {Auth ?
                <Routes>
                    <Route path="/" element={<Outlets />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/ourmenu" element={<OurMenu />} />
                    </Route>
                </Routes>
                :
                <Routes>
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            }
        </>
    )
}

export default Routers;
