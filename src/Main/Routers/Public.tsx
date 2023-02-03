import {Route, Routes } from 'react-router-dom'
import Login from '../Screens/Login'
import Home from '../Screens/Home'

const Public = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default Public