import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Together from "./../assets/Together-pana.svg";
import "./../assets/style.css";
import axios from "axios";
import swal from "sweetalert";

const RegisterOrganization = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [status, setStatus] = useState("organization");
  const [description, setDescription] = useState("");
  const [sector, setSector] = useState("");
  const [media_social, setMedia_social] = useState("");

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
  };

  const signUpOrganization = () => {
    var dataRegist = new FormData();
    dataRegist.append('name', name);
    dataRegist.append('photo', photo);
    dataRegist.append('email', email);
    dataRegist.append('password', password);
    dataRegist.append('address', address);
    dataRegist.append('phone_number', phone_number);
    dataRegist.append('status', status);
    dataRegist.append('description', description);
    dataRegist.append('sector', sector);
    dataRegist.append('media_social', media_social);

    var config = {
      method: 'post',
      url: 'https://ayo-relieve.osorateam.com/api/auth/register',
      headers: { 
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      data : dataRegist
    };

    axios(config)
    .then(function (response) {
      swal({
        title: "Register Berhasil!",
        icon: "success",
        button: "Tutup"
      });
      navigate('/login')
    })
    .catch(function (error) {
      swal({
        title: "Register Gagal!",
        text: error.response.data.message[0].message,
        icon: "error",
        button: "Tutup"
      });
    });
  }
  
  return (
    <section>
      <Navbar/>
      <div className="row my-5">
        <h1 className="text-center">
          <Link to="/" className="text-decoration-none heading">
            AYO.RELIEVE
          </Link>
        </h1>
      </div>
      <div className="row">
        <div className="container d-flex flex-column justify-content-center flex-sm-row">
          <img src={Together} className="imageRegister img-login mx-auto" alt="" />
          <h3 className="fw-bold mb-3 d-none txt">Daftar</h3>
          <div className="w-100 px-5">
            {/* Nama Organisasi */}
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-bold"
              >
                Nama Organisasi <span className="p-0 m-0 text-danger">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="name"
                placeholder="Nama Organisasi "
                required
              />
            </div>
            {/* Foto Program */}
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-bold"
              >
                Foto Profil<span className="p-0 m-0 text-danger">*</span>
              </label>
              <input
                type="file"
                className="form-control"
                id="photo"
                onChange={handlePhoto}
                placeholder="Foto Profil"
                required
              />
            </div>
            {/* Nomor Handphone */}
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-bold"
              >
                Nomor Handphone <span className="p-0 m-0 text-danger">*</span>
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone_number"
                value={phone_number}
                onChange={(e) => setPhone_number(e.target.value)}
                placeholder="Nomor Handphone"
                required
              />
              <div className="txt-ex mt-2 px-1">Contoh: 081234567891</div>
            </div>
            {/* Address */}
            <div className="mb-3">
              <label className="form-label fw-bold">
                Alamat <span className="p-0 m-0 text-danger">*</span>
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                id="address"
                placeholder="Alamat"
                required
              />
            </div>
            {/* Email */}
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label  fw-bold"
              >
                Alamat Email <span className="p-0 m-0 text-danger">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="email"
                placeholder="Email"
                aria-describedby="emailHelp"
                required
              />
            </div>
            {/* Password */}
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label fw-bold"
              >
                Kata Sandi <span className="p-0 m-0 text-danger">*</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="form-control"
                id="password"
              />
            </div>
            {/* Deskripsi Singkat organisasi */}
            <div className="mb-3">
              <label className="form-label fw-bold">
                Deskripsi Singkat Organisasi{" "}
                <span className="p-0 m-0 text-danger">*</span>
              </label>
              <textarea
                id="desc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="5"
                className="form-control"
                placeholder="Tuliskan deskripsi singkat organisasi"
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">
                Bidang <span className="p-0 m-0 text-danger">*</span>
              </label>
              <input
                type="text"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="form-control"
                id="sector"
                placeholder="Bidang organisasi"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">
                Media Sosial <span className="p-0 m-0 text-danger">*</span>
              </label>
              <input
                type="text"
                value={media_social}
                onChange={(e) => setMedia_social(e.target.value)}
                className="form-control"
                id="media_social"
                placeholder="Media Sosial Organisasi"
                required
              />
            </div>
            <button onClick={signUpOrganization} className="btn btn-primary button">Daftar</button>
            <p className="mt-3">
              Sudah memiliki akun? 
              <Link to="/login" className="text-decoration-none heading mx-1">
                Masuk
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterOrganization;
