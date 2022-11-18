import React, { useEffect, useState } from "react";
import './../assets/style.css'
import axios from 'axios'
import Icon from "../assets/Icon.png"

const HalamanProfile = () => {
    const [profile, setProfile] = useState([])
    const [program, setProgram] = useState([])

    useEffect(() => {
        axios
            .get(`https://634e4141f34e1ed826869202.mockapi.io/users`, {})
            .then((res) => {
                setProfile(res.data);
            })
            .catch((err) => {
                console.log(err)
            });
        axios
            .get(`https://634f91da78563c1d82a9bced.mockapi.io/new-program`, {})
            .then((res) => {
                setProgram(res.data);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);
    
    console.log(profile)
    console.log(program)

    return(
        <section className="halamanProfile container text-md-start py-5 py-md-0 px-md-0">
            <div className="text-center container d-flex flex-column justify-content-center align-items-center mx-auto flex-md-row">
                <div className="">
                    <h1 className="fw-bold">
                        Profile
                    </h1>
                    <img src={Icon} alt="..." className="profilePicture"/>
                    <h4>{localStorage.getItem('Email')}</h4>
                    <h4>User ID: {localStorage.getItem('UserID')}</h4>
                    {program.map((programs) => {
                        return (
                            <>
                                {            
                                    (localStorage.getItem('CampaignJoined') == programs.id) && (
                                        <div className="profileJoinedCampaign">
                                            <img
                                                className="profileJoinedCampaignImage"
                                                src={programs.partner.logo}
                                            />
                                            <div className="profileJoinedCampaignName">
                                                {programs.nama_program}
                                            </div>
                                        </div>
                                    )
                                }
                            </>
                        )
                    })}
                    {            
                        (localStorage.getItem('CampaignJoined') == 0) && (
                            <div className="profileNotJoined">
                                Anda belum mendaftar program
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default HalamanProfile