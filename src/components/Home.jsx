import React, { useEffect, useState } from "react";
import Together from "./../assets/Together-pana.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import "./../assets/style.css";
import Card from "./Card";
import Navbar from "../layout/Navbar";
import OurTeam from "./OurTeam";
import AboutUs from "./AboutUs";

const Home = () => {
  const [program, setProgram] = useState([]);
  const [status, setStatus] = useState("");
  const programLength = program.length
  const programLengthStart = program.length-3

  useEffect(() => {
    axios
      .get(`https://ayo-relieve.osorateam.com/api/programs`, {})
      .then((res) => {
        setProgram(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`https://ayo-relieve.osorateam.com/api/auth/me`, {
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
  }, []);

  return (
    <>
      <Navbar/>
      <section className="container text-md-start py-5 py-md-0 px-md-0">
        <div className="container d-flex flex-column justify-content-center align-items-center mx-auto flex-md-row">
          <div className="order-2 order-md-1">
            <h1 className="fw-bold">
              Empowering Communities. Relieving the problems.
            </h1>
            <p className="my-3 text-start">
              Berikan dampak kepada masyarakat yang membutuhkan bantuan melalui
              berbagai program untuk mengatasi isu pandemi, perubahan iklim, dan
              pemanasan global
            </p>
            <div className="d-md-block d-lg-block">
              <Link className="btn button" to={localStorage.getItem('Email') ? "/allprogram" : '/login'} style={{textDecoration: 'none'}}>
                Lihat Semua Program
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

      <AboutUs/>

      <section className="py-5">
        <div className="container px-4">
          <h1 className="text-center text-md-start">Program Terbaru</h1>
          <div className="container-card mt-4 d-flex flex-column align-items-center justify-content-center gap-4 flex-md-row justify-content-md-around">
            {program.slice(programLengthStart, programLength).map((programs, index) => {
              return (
                <Link to={localStorage.getItem('Email') ? `/detailprogram/${programs.id}` : '/login'} className="card" style={{ width: "22rem", textDecoration: 'none', color: '#29325d' }} key={index}>
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
              );
            })}
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

      <OurTeam/>
    </>
  );
};

export default Home;
