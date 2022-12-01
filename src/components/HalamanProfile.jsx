import React, { useEffect, useState } from "react";
import './../assets/style.css'
import axios from 'axios'
import Icon from "../assets/Icon.png"
import ProfileMan from "./../assets/ProfileMan.jpg"
import ProfileGirl from "./../assets/ProfileGirl.jpg"
import Company from "./../assets/Company.jpg"
import Navbar from "../layout/Navbar";

const HalamanProfile = () => {
    const [profile, setProfile] = useState({})
    const [detail, setDetail]  = useState({})
    const statusUser = localStorage.getItem("statusUser")

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

    console.log(profile)
    console.log(detail)
    

    return(
        <>
            <Navbar/>
            <section className="halamanProfile container text-md-start py-5 py-md-0 px-md-0 mb-5">
                <div className="text-center container d-flex flex-column justify-content-center align-items-center mx-auto flex-md-row">
                    <div className="d-flex flex-column justify-content-center w-100 align-items-center mb-2 ">
                        {
                            (profile.status == 'organization') &&
                            <img src={profile.photo ? `https://ayo-relieve.osorateam.com/${profile.photo}` : Company} alt="icon-profile" className="profilePicture"/>
                        }
                        {
                            (profile.status != 'organization') &&
                            <>
                                {
                                    (profile.photo != null) &&
                                    <img src={profile.photo ? `https://ayo-relieve.osorateam.com/${profile.photo}` : Company} alt="icon-profile" className="profilePicture"/>
                                }
                                {
                                    (profile.photo == null) &&
                                    // <></>
                                    <img src={detail.gender == 'Pria' ? ProfileMan : ProfileGirl } alt="icon-profile" className="profilePicture"/>
                                }
                            </>
                        }
                        <h1>{profile.name}</h1>
                        {
                            statusUser == "organization" ? 
                            <></>
                            : 
                            <>
                                <div className={detail.disability? "status-disab" : "status"}>{detail.disability? "Penyandang Disabilitas" : "Bukan Penyandang Disabilitas"}</div>
                                <h5>{detail.profession}</h5>
                            </>
                        }
                        <div>{profile.email}</div>
                        {
                            (profile.status == 'organization') &&
                                <div className="profilOrganization">
                                    Organization
                                </div>
                        }
                        {
                            (profile.status != 'organization') &&
                                <div className="profilOrganization">
                                    Applicant
                                </div>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default HalamanProfile