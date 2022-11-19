import React from 'react'
import userSlice from '../redux/user'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Logout = () => {

    const dispatch = useDispatch()
  
    // Menghapus token dri LocalStorage
    localStorage.clear();
    
    // Update user store jadi NULL
    dispatch( userSlice.actions.removeUser() )
  
    return (  
      <Navigate to="/" />
    )
}

export default Logout