import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Main from './Main'
import swal from "sweetalert";

const PrivateLayout = () => {
    
    const user = useSelector( store => store.user.data)
    // const user = localStorage.getItem('email')

    console.log('ini private layout (USER): ', user)

    if (user !== null) {
        return (
            <div>
                {/* <Navbar/> */}
                <Main/>
                <Footer/>
            </div>
        )
    } else {
        swal({
          title: "Anda harus login dahulu!",
          icon: "error",
          button: "Tutup",
        });
        return <Navigate to='/login' />
    }
}

export default PrivateLayout