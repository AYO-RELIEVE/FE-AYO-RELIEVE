import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Together from "./../assets/Together-pana.svg";
import { useParams, useNavigate } from 'react-router-dom'
import './../assets/style.css'

const DetailProgram = () => {

    const params = useParams()
    const navigate = useNavigate()
    const [campaignJoin, setCampaignJoin] = useState(localStorage.getItem("CampaignJoined"))
    const [program, setProgram] = useState(null)
      
    useEffect(() => {
        axios
            .get(`http://ayo-relieve.osorateam.com/api/programs/${params.id}`)
            .then((res) => {
                setProgram(res.data.data);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);
    
    console.log(program)

    const joinCampaign = () => {

        try {
            var config = {
                method: 'post',
                url: `http://ayo-relieve.osorateam.com/api/programs/${params.id}/apply`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            };
            
            axios(config)
            .then(function (response) {
                console.log(response)
            })
        } catch (error) {
            console.log(error);
        }
        
        // if (localStorage.getItem('Email')){
        //     const idUser = localStorage.getItem('UserID')
        //     const postData = {
        //         campaign: program.id
        //     }
        //     let response = await fetch(`https://634e4141f34e1ed826869202.mockapi.io/users/${idUser}`, {
        //         method: 'PUT',
        //         body: JSON.stringify(postData),
        //         headers: { "Content-type": "application/json" }
        //     })
        
        //     if (response.ok) {
        //         setCampaignJoin(program.id)
        //         localStorage.setItem('CampaignJoined', program.id)
        //         alert("Anda berhasil bergabung dalam kegiatan.");
        //     } else {
        //         throw new Error(`HTTP error. Status ${response.status}`)
        //     }
        // } else {
        //     alert('Anda harus login lebih dahulu!')
        //     navigate('/login')
        // }
    }
    
    return (
        <>
            { program !== null &&
                <>
                    <section className="container text-md-start py-5 py-md-5 px-md-0">
                        <div
                            className="container d-flex flex-column justify-content-center align-items-center flex-md-row"
                        >
                            <div className="">
                                <img
                                    src={Together}
                                    className="img-fluid w-100 w-md-50 col-2 order-1 order-md-1 mx-md-0 rounded"
                                    alt="together-pana"
                                />
                            </div>
                            <div className="order-2 order-md-2 mt-4 mt-md-0 px-md-4">
                                <h1 className="fw-bold">
                                    {program.title}
                                </h1>
                                <div className="d-flex">
                                    <img
                                        src={Together}
                                        className="my-3 text-start campaign-logo"
                                        alt="logo"
                                    />
                                    <p className="my-3 text-start">
                                        {program.title}
                                    </p>
                                </div>
                                <div className="d-flex">
                                    <h6 className="fw-bold">
                                        Dibuka s/d: {program.end_date}
                                    </h6>
                                </div>
                                <div className="button-joined">
                                    {
                                        (program.id == campaignJoin) &&
                                            <div>
                                                <button disabled className="btn button mt-2 mt-lg-0">
                                                    Anda Telah Tergabung
                                                </button>
                                            </div>
                                    }
                                    {
                                        (program.id != campaignJoin) &&
                                            <div>
                                                <button className="btn button mt-2 mt-lg-0" onClick={joinCampaign}>
                                                    Join Program
                                                </button>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section className="container text-md-start py-md-0 px-md-0 mt-md-4">
                        <div
                            className="container d-flex flex-column mx-auto"
                        >
                            <div className="order-2 order-md-1">
                                <h4 className="fw-bold">
                                    Detail Program
                                </h4>
                                <p className="my-3 text-start">
                                    {program.description}
                                </p>
                            </div>
                            <div className="order-2 order-md-1">
                                <h4 className="fw-bold">
                                    Kuota Penerima
                                </h4>
                                <p className="my-3 text-start">
                                    {program.qouta} Orang
                                </p>
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    )
}

export default DetailProgram