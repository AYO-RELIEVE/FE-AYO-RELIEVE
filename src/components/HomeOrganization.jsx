import React, { useEffect, useState } from "react";
import Together from "./../assets/Together-pana.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import "./../assets/style.css";
import Card from "./Card";
import Navbar from '../layout/Navbar'

const HomeOrganization = () => {
    const [program, setProgram] = useState([]);
    const [applyers, setApplyers] = useState([]);
    const [status, setStatus] = useState([]);
    const programLength = program.length
    const programLengthStart = program.length-3

    useEffect(() => {
        axios
            .get(`http://ayo-relieve.osorateam.com/api/organizations/programs`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            })
            .then((res) => {
                setProgram(res.data.data);
                console.log('ini /programs: ', res)
            })
            .catch((err) => {
                console.log(err);
            });
        axios
            .get(`http://ayo-relieve.osorateam.com/api/organizations/programs/7`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            })
            .then((res) => {
                setApplyers(res.data.data);
                console.log('ini /programs/7: ', res)
            })
            .catch((err) => {
                console.log(err);
            });
        axios
            .get(`http://ayo-relieve.osorateam.com/api/auth/me`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            })
            .then((res) => {
                setStatus(res.data.data);
                console.log('ini /auth/me: ', res)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    console.log('programs: ', program);
    console.log('programLength: ', programLength);
    console.log('status user: ', status);
    console.log('applyers: ', applyers);

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
                    <div className="d-md-block d-lg-block">
                        <Link to="/createprogram" className="btn button">
                            Buat Program
                        </Link>
                    </div>
                </div>
                <img
                    src={Together}
                    className="img-fluid w-50 col-2 order-1 order-md-2"
                    alt="together-pana"
                />
                </div>
            </section>

            <section className="py-5">
                <div className="container px-4">
                    <h1 className="text-center text-md-start">Lihat Program Terbaru</h1>
                    <div className="container-card mt-4 d-flex flex-column align-items-center justify-content-center gap-4 flex-md-row justify-content-md-around">
                    
                    {program.slice(programLengthStart, programLength).map((programs, index) => {
                        {
                            if (programs.organization_id == status.id) {
                                return (
                                    <Link to={localStorage.getItem('Email') ? `/detailprogramorganization/${programs.id}` : '/login'} className="card" style={{ width: "22rem", textDecoration: 'none', color: '#29325d' }} key={index}>
                                        <img
                                        src={Together}
                                        alt=""
                                        className="card-img-top"
                                        />
                                        <div className="card-body d-flex flex-column gap-2">
                                        <h5 className="card-title">{programs.title}</h5>
                                        <div className="d-flex align-items-center justify-content-between gap-2">
                                            <div className="d-flex align-items-center gap-2">
                                            <img src={Together} className="image-pt" />
                                            <div className="">Partner Name</div>
                                            </div>
                                            <Link to={localStorage.getItem('Email') ? `/detailprogramorganization/${programs.id}` : '/login'}>Detail</Link>
                                        </div>
                                        </div>
                                    </Link>
                                )
                            }
                        }
                    })}
                    </div>
                </div>
            </section>

            <section className="about py-5 py-md-5 px-md-0">
                <div className="container px-4 text-center">
                <h1>AYO Relieve!</h1>
                <p className="w-75 mx-auto capt">
                    Platform untuk menghubungkan orang-orang di seluruh dunia yang ingin
                    memberikan dukungan kepada penyandang disabilitas maupun individu
                    lain secara berkelanjutan.
                </p>
                <div className="d-flex justify-content-center flex-column align-items-center gap-4 flex-md-row my-md-3 justify-content-md-evenly">
                    <div className="card text-start" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <span className="material-symbols-outlined">
                        volunteer_activism
                        </span>
                        <h5 className="card-title">Dapatkan Donasi</h5>
                        <p className="card-text">
                        Cari bantuan yang cocok bagimu, daftar sebagai pelamar pada
                        sebuah program.
                        </p>
                    </div>
                    </div>
                    <div className="card text-start" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <span className="material-symbols-outlined">diversity_1</span>
                        <h5 className="card-title">Disabilitas</h5>
                        <p className="card-text">
                        Bantu masyarakat penyandang disabilitas agar memiliki semangat
                        untuk maju.
                        </p>
                    </div>
                    </div>
                    <div className="card text-start" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <span className="material-symbols-outlined">
                        sentiment_satisfied
                        </span>
                        <h5 className="card-title">Jadilah Penyalur</h5>
                        <p className="card-text">
                        Bagikan kebahagianmu kepada orang lain yang lebih membutuhkan.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
      
            <div className="mx-auto d-flex justify-content-center mt-0">
                <button className="btn buttonHome shadow-sm">
                <Link to={localStorage.getItem('Email') ? "/allprogram" : '/login'} style={{textDecoration: 'none'}}>
                    Lihat Semua Program
                </Link>
                </button>
            </div>
        </>
    )
}

export default HomeOrganization