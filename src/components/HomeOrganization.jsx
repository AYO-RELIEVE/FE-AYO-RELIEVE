import React, { useEffect, useState } from "react";
import Together from "./../assets/Together-pana.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./../assets/style.css";
import Card from "./Card";
import Navbar from '../layout/Navbar'
import AboutUs from "./AboutUs";

const HomeOrganization = () => {
    const navigate = useNavigate()
    const [program, setProgram] = useState([]);
    const [applyers, setApplyers] = useState([]);
    const [status, setStatus] = useState([]);
    const programLength = program.length
    const programLengthStart = program.length-3

    useEffect(() => {
        axios
            .get(`https://ayo-relieve.kattohair.com/api/organizations/programs`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            })
            .then((res) => {
                setProgram(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
        axios
            .get(`https://ayo-relieve.kattohair.com/api/auth/me`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            })
            .then((res) => {
                setStatus(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
            
        if (localStorage.getItem('Email') == null) {
            navigate("/login")
        }
    }, []);

    return (
        <>
            <Navbar/>
            <section className="container text-md-start py-5 py-md-0 px-md-0">
                <div className="container d-flex flex-column justify-content-center align-items-center mx-auto flex-md-row">
                <div className="order-2 order-md-1">
                    <h1 className="fw-bold">
                        Organization Page
                    </h1>
                    <p className="my-3 text-start">
                    Berikan dampak kepada masyarakat yang membutuhkan bantuan melalui
                    berbagai program untuk mengatasi isu pandemi, perubahan iklim, dan
                    pemanasan global
                    </p>
                    <div className="d-sm-flex">
                        <div className="d-md-block d-lg-block mb-2">
                            <Link to="/createprogram" className="btn button">
                                Buat Program
                            </Link>
                        </div>
                        <div className="d-md-block d-lg-block mx-md-2">
                            <Link to="/allprogram" className="btn button">
                                Lihat Semua Program
                            </Link>
                        </div>
                    </div>
                </div>
                <img
                    src={Together}
                    className="img-fluid w-50 col-2 order-1 order-md-2"
                    alt="together-pana"
                />
                </div>
            </section>

            {
                (program.length != 0) &&
                <>
                    <section className="py-5">
                        <div className="container px-4">
                            <h1 className="text-center text-md-start">Lihat Program Terbaru</h1>
                            <div className="container-card mt-4 d-flex flex-column align-items-center justify-content-center gap-4 flex-md-row justify-content-md-around">
                            
                                {
                                    (program.length >= 3) &&
                                    <>
                                        {program.slice(programLengthStart, programLength).map((programs, index) => {
                                            {
                                                if (programs.organization_id == status.id) {
                                                    return (
                                                        <Link to={localStorage.getItem('Email') ? `/detailprogramorganization/${programs.id}` : '/login'} className="card" style={{ width: "22rem", textDecoration: 'none', color: '#29325d' }} key={index}>
                                                            <Card
                                                                id={programs.id}
                                                                key={index}
                                                                thumbnail={programs.thumbnail}
                                                                title={programs.title}
                                                                photo={programs.organization.photo}
                                                                name={programs.organization.name}
                                                                status={status.status}
                                                            />
                                                        </Link>
                                                    )
                                                }
                                            }
                                        })}
                                    </>
                                }
                                {
                                    (program.length < 3) &&
                                    <>
                                        {program.map((programs, index) => {
                                            {
                                                if (programs.organization_id == status.id) {
                                                    return (
                                                        <Link to={localStorage.getItem('Email') ? `/detailprogramorganization/${programs.id}` : '/login'} className="card" style={{ width: "22rem", textDecoration: 'none', color: '#29325d' }} key={index}>
                                                            <Card
                                                                id={programs.id}
                                                                key={index}
                                                                thumbnail={programs.thumbnail}
                                                                title={programs.title}
                                                                photo={programs.organization.photo}
                                                                name={programs.organization.name}
                                                                status={status.status}
                                                            />
                                                        </Link>
                                                    )
                                                }
                                            }
                                        })}
                                    </>
                                }
        
                            </div>
                        </div>
                    </section>
            
                    <div className="mx-auto d-flex justify-content-center mb-4">
                        <button className="btn buttonHome shadow-sm">
                        <Link to={localStorage.getItem('Email') ? "/allprogram" : '/login'} style={{textDecoration: 'none'}}>
                            Lihat Semua Program
                        </Link>
                        </button>
                    </div>
                </>
            }

            <AboutUs/>
        </>
    )
}

export default HomeOrganization