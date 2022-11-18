import React from "react"
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/Home'
import Login from "./components/Login"
import Register from "./components/Register"
import AllProgram from "./components/AllProgram"
import DetailProgram from "./components/DetailProgram"
import Logout from "./components/Logout"
import HalamanProfile from "./components/HalamanProfile"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allprogram" element={<AllProgram />} />
        <Route path="/detailprogram/:id" element={<DetailProgram />} />
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/profile" element={<HalamanProfile/>}/>
      </Route>
    </Routes>
  )
}

export default App
