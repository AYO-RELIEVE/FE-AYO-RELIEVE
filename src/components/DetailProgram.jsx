import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Together from "./../assets/Together-pana.svg";
import { Link, useParams, useNavigate } from 'react-router-dom'
import './../assets/style.css'
import Navbar from '../layout/Navbar'
import { BiArrowBack } from "react-icons/bi";
import Company from "./../assets/Company.jpg"

const DetailProgram = () => {

    const params = useParams()
    const navigate = useNavigate()
    const [program, setProgram] = useState(null)
      
    useEffect(() => {
        var config = {
            method: 'get',
            url: `https://ayo-relieve.osorateam.com/api/programs/${params.id}`,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
          };
          axios(config)
              .then((res) => {
                  setProgram(res.data.data);
                  console.log('ini res baru: ', res)
              })
              .catch((err) => {
                  console.log(err)
              });
    }, []);
    
    console.log(program)

    const joinCampaign = () => {

        var config = {
            method: 'post',
            url: `http://ayo-relieve.osorateam.com/api/programs/${params.id}/apply`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        };
        
        axios(config)
        .then(function (response) {
            console.log(response)
            if (response.status == 200){ 
                swal({
                  title: "Anda berhasil mendaftar!",
                  icon: "success",
                  button: "Ok",
                });
            }
            window.location.reload()
        })
        .catch((error) => {
            console.log('message eroor: ', error)
            if (error.response.data.message == "You have already applied for this program"){
                swal({
                  title: "Anda telah mendaftar program ini.",
                  icon: "error",
                  button: "Tutup",
                });
            }
        })
    }
    
    return (
        <>
            { program !== null &&
                <>
                    <Navbar/>
                    <section className="container text-md-start py-4 py-md-4 px-md-0">
                        <div className="buttonKembaliDetailProgramContainer" >
                            <Link style={{ textDecoration: 'none' }} to={"/allprogram"}  className="buttonKembaliDetailProgram shadow">
                                <BiArrowBack className="BiArrowBack"/>
                            </Link>
                        </div>
                        <div
                            className="container d-flex flex-column justify-content-center align-items-center flex-md-row mt-4"
                        >
                            <div className="imageDetailContainer w-100 w-lg-50">
                                <img
                                    src={program.thumbnail == null ? Together : `https://ayo-relieve.osorateam.com/${program.thumbnail}`}
                                    className="imageDetail img-fluid col-2 order-1 order-md-1 mx-md-0 rounded"
                                    alt="together-pana"
                                />
                            </div>
                            <div className="w-100 w-lg-50 order-2 order-md-2 mt-4 mt-md-0 px-md-4">
                                <h1 className="fw-bold">
                                    {program.title}
                                </h1>
                                <div className="d-flex">
                                    <img
                                        src={program.organization.photo ? `https://ayo-relieve.osorateam.com/${program.organization.photo}` : Company}
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
                                        program.applicant.length == 0 &&
                                            <div>
                                                <button className="btn button mt-2 mt-lg-0" onClick={joinCampaign}>
                                                    Join Program
                                                </button>
                                            </div>
                                    }
                                    {
                                        program.applicant.length != 0 &&
                                            <>
                                                {
                                                    (program.applicant[0].Program_Users.status == "Diterima") &&
                                                        <div>
                                                            <button disabled className="btn btn-success mt-2 mt-lg-0">
                                                                Anda Telah Diterima
                                                            </button>
                                                        </div>
                                                }
                                                {
                                                    (program.applicant[0].Program_Users.status == "Ditolak") &&
                                                        <div>
                                                            <button disabled className="btn btn-danger mt-2 mt-lg-0">
                                                                Anda Telah Ditolak
                                                            </button>
                                                        </div>
                                                }
                                                {
                                                    (program.applicant[0].Program_Users.status == "Menunggu") &&
                                                        <div>
                                                            <button disabled className="btn btn-secondary mt-2 mt-lg-0">
                                                                Menunggu Seleksi
                                                            </button>
                                                        </div>
                                                }
                                            </>
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