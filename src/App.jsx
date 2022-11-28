import React from "react"
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/Home'
import HomeOrganization from "./components/HomeOrganization"
import Login from "./components/Login"
import AllProgram from "./components/AllProgram"
import DetailProgram from "./components/DetailProgram"
import DetailProgramOrganization from "./components/DetailProgramOrganization"
import Logout from "./components/Logout"
import HalamanProfile from "./components/HalamanProfile"
import PrivateLayout from "./layout/PrivateLayout"
import RegisterApplicant from "./components/RegisterApplicant"
import CreateProgram from "./components/CreateProgram"
import EditProgram from "./components/EditProgram"

function App() {

  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/organization" element={<HomeOrganization />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterApplicant />} />
        <Route path="/createprogram" element={<CreateProgram />} />
        <Route path="/editprogram/:id" element={<EditProgram />} />
        <Route path="/allprogram" element={<AllProgram />} />
        <Route path="/detailprogram/:id" element={<DetailProgram />} />
        <Route path="/detailprogramorganization/:id" element={<DetailProgramOrganization />} />
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

