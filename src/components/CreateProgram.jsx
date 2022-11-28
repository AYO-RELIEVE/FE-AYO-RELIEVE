import React, { useState } from "react";
import Together from "./../assets/Together-pana.svg";
import { json, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./../assets/style.css";
import swal from "sweetalert";
import axios, { Axios } from "axios";
import Navbar from '../layout/Navbar'

const CreateProgram = () => {
  const statusUser = localStorage.getItem("statusUser")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rules, setRules] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [qouta, setQouta] = useState();
  const [end_date, setEndDate] = useState("");
  const [announcement_date, setAnnouncementDate] = useState("");

  const createPrograms = () => {
    var data = ({
      "title": title,
      "description": description,
      "rules": rules,
      "thumbnail": thumbnail,
      "qouta": qouta,
      "end_date": end_date,
      "announcement_date": announcement_date
    });
    
    var config = {
      method: 'post',
      url: 'http://ayo-relieve.osorateam.com/api/programs',
      headers: { 
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log('ini respon create: ', response);
      swal({
        title: "Program berhasil dibuat!",
        icon: "success",
        button: "OK!",
      });
      navigate('/organization')
    })
    .catch(function (error) {
      console.log('ini error create: ', error);
    });
  };

  return (
    <>
      <Navbar/>
      <section className="">
        {
          statusUser == "organization" ? 
          <div className="row mt-5">
            <h1 className="text-center">
              <Link to="/organization" className="text-decoration-none heading">
                AYO.RELIEVE
              </Link>
            </h1>
          </div>
          : 
          <div className="row mt-5">
            <h1 className="text-center">
              <Link to="/" className="text-decoration-none heading">
                AYO.RELIEVE
              </Link>
            </h1>
          </div>
        }
        <div className="row">
          <div className="container d-flex flex-column justify-content-center align-items-center flex-sm-row">
            {/* <img src={Together} className="w-50" alt="" /> */}
            <h3 className="fw-bold mb-3 d-none txt">Daftar</h3>
            <div className="w-100 px-5">
              {/* /// Nama Program //// */}
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fw-bold"
                >
                  Nama Program <span className="p-0 m-0 text-danger">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                  id="title"
                  placeholder="Nama Program"
                  required
                />
              </div>
              {/* Deskripsi Program */}
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fw-bold"
                >
                  Deskripsi Program <span className="p-0 m-0 text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Deskripsi Program"
                  required
                />
              </div>
              {/* Ketentuan Program */}
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fw-bold"
                >
                  Ketentuan Program <span className="p-0 m-0 text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="rules"
                  value={rules}
                  onChange={(e) => setRules(e.target.value)}
                  placeholder="Ketentuan Program"
                  required
                />
              </div>
              {/* Foto Program */}
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fw-bold"
                >
                  Foto Program (Sementara masih string)<span className="p-0 m-0 text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="thumbnail"
                  value={thumbnail}
                  onChange={(e) => setThumbnail(e.target.value)}
                  placeholder="Foto Program"
                  required
                />
              </div>
              {/* Kuota Program */}
              <div className="mb-3">
                <label
                  className="form-label fw-bold"
                >
                  Kuota Program <span className="p-0 m-0 text-danger">*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="qouta"
                  value={null}
                  onChange={(e) => setQouta(Number(e.target.value))}
                  placeholder="Kuota Program"
                  required
                />
              </div>
              {/* Tanggal Penutupan */}
              <div className="mb-3">
                <label className="form-label fw-bold">
                  Tanggal Penutupan <span className="p-0 m-0 text-danger">*</span>
                </label>
                <input
                  type="date"
                  value={end_date}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="form-control"
                  id="end_date"
                  placeholder="Tanggal Penutupan"
                  required
                />
              </div>
              {/* Tanggal Pengumuman */}
              <div className="mb-3">
                <label className="form-label fw-bold">
                  Tanggal Pengumuman <span className="p-0 m-0 text-danger">*</span>
                </label>
                <input
                  type="date"
                  value={announcement_date}
                  onChange={(e) => setAnnouncementDate(e.target.value)}
                  className="form-control"
                  id="announcement_date"
                  placeholder="Tanggal Pengumuman"
                  required
                />
              </div>
              <button className="btn btn-primary button" onClick={createPrograms}>Buat Program</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateProgram;
