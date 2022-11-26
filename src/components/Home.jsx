import React, { useEffect, useState } from "react";
import Together from "./../assets/Together-pana.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import "./../assets/style.css";
import Card from "./Card";

const Home = () => {
  const [program, setProgram] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`https://634f91da78563c1d82a9bced.mockapi.io/new-program`, {})
  //     .then((res) => {
  //       setProgram(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get(`http://ayo-relieve.osorateam.com/api/programs`, {})
      .then((res) => {
        setProgram(res.data.data);
        console.log('ini res: ', res)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(program);

  return (
    <>
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
          </div>
          <img
            src={Together}
            className="img-fluid w-50 col-2 order-1 order-md-2"
            alt="together-pana"
          />
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

      <section className="py-5">
        <div className="container px-4">
          <h1 className="text-center text-md-start">Program Terbaru</h1>
          <div className="container-card mt-4 d-flex flex-column align-items-center justify-content-center gap-4 flex-md-row justify-content-md-around">
            {program.map((programs, index) => {
              return (
                <div className="card" style={{ width: "22rem" }} key={index}>
                  <img
                    src={Together}  // Sementara pake dummy image karena thumbnail di API belum ada
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
                      <Link to={`/detailprogram/${programs.id}`}>Detail</Link>
                    </div>
                  </div>
                </div>
                // <Card
                //   key={index}
                //   poster={programs.poster}
                //   name={programs.nama_program}
                //   partnerLogo={programs.partner.logo}
                //   partnerName={programs.partner.nama}
                //   idProgram={programs.id}
                // />
              );
            })}
          </div>
        </div>
      </section>

      {/* <section className="py-5 program-disab">
        <div className="container px-4">
          <h1 className="text-center text-md-start">
            Disabilitas Bukan Hambatan
          </h1>
          <div className="container-card-disabilitas mt-4 d-flex flex-column align-items-center justify-content-center gap-4 flex-md-row justify-content-md-around">
            {program.slice(7, 10).map((programs) => {
              return (
                <Card
                  key={programs.id}
                  poster={programs.poster}
                  name={programs.nama_program}
                  partnerLogo={programs.partner.logo}
                  partnerName={programs.partner.nama}
                  idProgram={programs.id}
                />
              );
            })}
          </div>
          <div className="mx-auto d-flex justify-content-center mt-5">
            <button className="btn button shadow-sm">
              <Link to="/allprogram" className="text-decoration-none a">
                Lihat Program Lainnya
              </Link>
            </button>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;
