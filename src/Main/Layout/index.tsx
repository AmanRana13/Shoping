import { lazy } from 'react'
import { Outlet } from 'react-router-dom'
const Header = lazy(() => import("./Header/index"))

const Outlets = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <Outlet />
        </>
    )
}

export default Outlets