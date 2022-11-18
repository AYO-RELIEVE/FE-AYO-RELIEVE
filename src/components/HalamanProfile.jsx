import React, { useEffect, useState } from "react";
import './../assets/style.css'
import axios from 'axios'
import "../layout/Navbar.jsx"
import Icon from "../assets/Icon.png"
import AllProgram from "./AllProgram";

const HalamanProfile = () => {
    const [profile, setProfile] = useState([])

    useEffect(() => {
        axios
            .get(`https://634e4141f34e1ed826869202.mockapi.io/users`, {})
            .then((res) => {
                setProfile(res.data);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);
    
    console.log(profile)
    return(
<section className="halamanProfile container text-md-start py-5 py-md-0 px-md-0">
    <div className="text-center container d-flex flex-column justify-content-center align-items-center mx-auto flex-md-row">
        <div className="">
            <h1 className="fw-bold">
                Profile
            </h1>
            <img src={Icon} alt="..."/>
            <h4>Email : {localStorage.getItem('Email')}</h4>
            <h4>User ID : {localStorage.getItem('UserID')}</h4>
            <h4>Campaign join : {localStorage.getItem('CampaignJoined')}</h4>
        </div>
    </div>
</section>
)
}



export default HalamanProfile