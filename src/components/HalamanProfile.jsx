import React, { useEffect, useState } from "react";
import './../assets/style.css'
import axios from 'axios'
import Icon from "../assets/Icon.png"

const HalamanProfile = () => {
    const [profile, setProfile] = useState({})
    const [detail, setDetail]  = useState({})

    useEffect(() => {
        axios
            .get(`http://ayo-relieve.osorateam.com/api/auth/me`, {
                headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
            })
            .then((res) => {
                setProfile(res.data.data)
                setDetail(res.data.data.user_applicant_detail)
            })
            .catch((err) => {
                console.log(err)
            });
            
    }, []);
    

    return(
        <section className="halamanProfile container text-md-start py-5 py-md-0 px-md-0 mb-5">
            <div className="text-center container d-flex flex-column justify-content-center align-items-center mx-auto flex-md-row">
                <div className="d-flex flex-column justify-content-center w-100 align-items-center mb-5 ">
                    <img src={Icon} alt="icon-profile" className="profilePicture"/>
                    <h4>{profile.name}</h4>
                    <div className={detail.disability? ".status-disab" : "status"}>{detail.disability? "Penyandang Disabilitas" : "Bukan Penyandang Disabilitas"}</div>
                    <h5>{detail.profession}</h5>
                    <div>{profile.email}</div>
                </div>
            </div>
        </section>
    )
}

export default HalamanProfile