import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./../assets/style.css";
import swal from "sweetalert";
import axios from "axios";
import Navbar from '../layout/Navbar'

const EditProgram = () => {
  const statusUser = localStorage.getItem("statusUser")
  const params = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [program, setProgram] = useState([]);
  const [idprogram, setIdProgram] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rules, setRules] = useState("");
  const [image, setImage] = useState("");
  const [qouta, setQouta] = useState();
  const [end_date, setEndDate] = useState("");
  const [announcement_date, setAnnouncementDate] = useState("");
      
  useEffect(() => {
    axios
      .get(`https://ayo-relieve.osorateam.com/api/programs/${params.id}`)
      .then((res) => {
          setProgram(res.data.data)
          setIdProgram(res.data.data.id)
          setTitle(res.data.data.title)
          setDescription(res.data.data.description)
          setRules(res.data.data.rules)
          setImage(res.data.data.thumbnail)
          setQouta(res.data.data.qouta)
          setEndDate(res.data.data.end_date)
          setAnnouncementDate(res.data.data.announcement_date)
      })
      .catch((err) => {
          console.log(err)
      });
            
    if (localStorage.getItem('Email') == null) {
        navigate("/login")
    }
  }, []);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const updatePrograms = () => {
    var data = new FormData();
    data.append('idprogram', idprogram);
    data.append('title', title);
    data.append('description', description);
    data.append('rules', rules);
    data.append('image', image);
    data.append('qouta', qouta);
    data.append('end_date', end_date);
    data.append('announcement_date', announcement_date);
    
    var config = {
      method: 'put',
      url: `https://ayo-relieve.osorateam.com/api/programs/${params.id}`,
      headers: { 
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      swal({
        title: "Update program berhasil!",
        icon: "success",
        button: "OK!",
      });
      navigate(`/detailprogramorganization/${program.id}`)
    })
    .catch(function (error) {
      console.log('ini error edit: ', error);
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
            <h3 className="fw-bold mb-3 d-none txt">Edit Program</h3>
            <div className="w-100 px-5">
              {/* Nama Program */}
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
                <textarea
                  type="text"
                  className="form-control"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Deskripsi Program"
                  required
                  cols="30"
                  rows="5"
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
                  Foto Program<span className="p-0 m-0 text-danger">*</span>
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  onChange={handleImage}
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
                  value={qouta}
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
              <Link to={`/detailprogramorganization/${program.id}`} className="btn btn-secondary">Cancel</Link>
              <button className="btn btn-primary button mx-md-2 my-3 my-md-0" onClick={updatePrograms}>Update Program</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditProgram;
