import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './../assets/style.css'

const DetailProgram = () => {

    const [campaignJoin, setCampaignJoin] = useState(localStorage.getItem("CampaignJoined"))
    const params = useParams()
    const [program, setProgram] = useState(null)
      
    useEffect(() => {
        axios
            .get(`https://634f91da78563c1d82a9bced.mockapi.io/new-program/${params.id}`)
            .then((res) => {
                setProgram(res.data);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);
    
    console.log(program)

    async function joinCampaign(e) {
        e.preventDefault()
        if (localStorage.getItem('Email')){
            const idUser = localStorage.getItem('UserID')
            const postData = {
                campaign: program.id
            }
            let response = await fetch(`https://634e4141f34e1ed826869202.mockapi.io/users/${idUser}`, {
                method: 'PUT',
                body: JSON.stringify(postData),
                headers: { "Content-type": "application/json" }
            })
        
            if (response.ok) {
                console.log('Anda berhasil bergabung dalam kegiatan.')
                setCampaignJoin(program.id)
                localStorage.setItem('CampaignJoined', program.id)
                alert("Anda berhasil bergabung dalam kegiatan.");
            } else {
                console.log('Anda gagal bergabung dalam kegiatan.')
                throw new Error(`HTTP error. Status ${response.status}`)
            }
        } else {
            alert('Anda harus login lebih dahulu!')
            // window.location.reload()
        }
    }
    
    // const joinCampaign = () => {
    //     if (localStorage.getItem('Email')){
    //         const idUser = localStorage.getItem('UserID')
    //         const postData = {
    //             campaign: id
    //         }
    //         let response = fetch(`https://634e4141f34e1ed826869202.mockapi.io/users/${idUser}`, {
    //             method: 'PUT',
    //             body: JSON.stringify(postData),
    //             headers: { "Content-type": "application/json" }
    //         })
        
    //         if (response.ok) {
    //             console.log('Anda berhasil bergabung dalam kegiatan.')
    //             alert("Anda berhasil bergabung dalam kegiatan.");
    //             localStorage.setItem('CampaignJoined', id)
    //             navigate('/')
    //         } else {
    //             console.log('Anda gagal bergabung dalam kegiatan.')
    //             throw new Error(`HTTP errorz. Status ${response.status}`)
    //         }
    //     } else {
    //         alert('Anda harus login lebih dahulu!')
    //         window.location.reload()
    //     }
    // }
    
    // const joinCampaign = async(idCampaign) => {
    //     if (localStorage.getItem('Email')){
    //         const idUser = localStorage.getItem('UserID')
    //         const postData = {
    //             campaign: idCampaign
    //         }
    //         let response = await fetch(`https://634e4141f34e1ed826869202.mockapi.io/users/${idUser}`, {
    //             method: 'PUT',
    //             body: JSON.stringify(postData),
    //             headers: { "Content-type": "application/json" }
    //         })
        
    //         if (response.ok) {
    //             console.log('Anda berhasil bergabung dalam kegiatan.')
    //             alert("Anda berhasil bergabung dalam kegiatan.");
    //             localStorage.setItem('CampaignJoined', idCampaign)
    //             window.location.reload()
    //         } else {
    //             console.log('Anda gagal bergabung dalam kegiatan.')
    //             throw new Error(`HTTP error. Status ${response.status}`)
    //         }
    //     } else {
    //         alert('Anda harus login lebih dahulu!')
    //         window.location.reload()
    //     }
    // }
    
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
                                    src={program.poster}
                                    className="img-fluid w-100 w-md-50 col-2 order-1 order-md-1 mx-md-0 rounded"
                                    alt="together-pana"
                                />
                            </div>
                            <div className="order-2 order-md-2 mt-4 mt-md-0 px-md-4">
                                <h1 className="fw-bold">
                                    {program.nama_program}
                                </h1>
                                <div className="d-flex">
                                    <img
                                        src={program.partner.logo}
                                        className="my-3 text-start campaign-logo"
                                        alt="logo"
                                    />
                                    <p className="my-3 text-start">
                                        {program.partner.nama}
                                    </p>
                                </div>
                                <div className="button-joined">
                                    {
                                        // (program.id == localStorage.getItem("CampaignJoined")) &&
                                        (program.id == campaignJoin) &&
                                            <div>
                                                <button disabled className="btn button mt-2 mt-lg-0">
                                                    Anda Telah Tergabung
                                                </button>
                                            </div>
                                    }
                                    {
                                        // (program.id != localStorage.getItem("CampaignJoined")) &&
                                        (program.id != campaignJoin) &&
                                            <div>
                                                {/* <button className="btn button mt-2 mt-lg-0" onClick={joinCampaign(program.id)}> */}
                                                <button className="btn button mt-2 mt-lg-0" onClick={joinCampaign}>
                                                {/* <button className="btn button mt-2 mt-lg-0"> */}
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
                            className="container d-flex flex-column justify-content-center align-items-center mx-auto flex-md-row"
                        >
                            <div className="order-2 order-md-1">
                                <h3 className="fw-bold">
                                    Detail Program
                                </h3>
                                <p className="my-3 text-start">
                                    {program.detail}
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