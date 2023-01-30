import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../Screens/Login'

const Public = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Navigate to="/login" />} /> */}
            <Route path="/" element={<Login />} />
        </Routes>
    )
}

export default Public