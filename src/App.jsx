import React from "react"
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/Home'
import Login from "./components/Login"
import AllProgram from "./components/AllProgram"
import DetailProgram from "./components/DetailProgram"
import Logout from "./components/Logout"
import HalamanProfile from "./components/HalamanProfile"
import PrivateLayout from "./layout/PrivateLayout"
import RegisterApplicant from "./components/RegisterApplicant"

function App() {

  return (
    // changes
    // changes 2
    // changes 3
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterApplicant />} />
        <Route path="/allprogram" element={<AllProgram />} />
        <Route path="/detailprogram/:id" element={<DetailProgram />} />
        <Route path="/logout" element={<Logout/>}/>
      </Route>
       
       {/* Protected Route */}
       <Route path="/" element={<PrivateLayout />}>
         <Route path="/profile" element={<HalamanProfile/>} />
       </Route>
    </Routes>
  )
}

export default App

