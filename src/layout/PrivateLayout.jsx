import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Main from './Main'

const PrivateLayout = () => {
    
    const user = useSelector( store => store.user.data)

    if (user !== null) {
        return (
            <div>
                <Navbar/>
                <Main/>
                <Footer/>
            </div>
        )
    } else {
        return <Navigate to='/login' />
    }
}

export default PrivateLayout