import React, { useState } from "react";
import Together from "./../assets/Together-pana.svg";
import { json, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./../assets/style.css";
import swal from "sweetalert";
import axios, { Axios } from "axios";

const RegisterApplicant = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [gender, setGender] = useState("");
  const [profession, setProfession] = useState("");
  const [date_of_birth, setDate_of_birth] = useState("");
  const [status, setStatus] = useState("applicant");
  const [address, setAddress] = useState("");
  let [disability, setDisability] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  if (disability === "true") {
    disability = true;
  } else if (disability === "false") {
    disability = false;
  } else {
    disability = "";
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // setName("");
    // setPhone_number("");
    // setGender("");
    // setProfession("");
    // setDate_of_birth("");
    // setAddress("");
    // setDisability("")
    // setEmail("");
    // setUsername("");
    // setPassword("");
    signUp();
  };

  async function signUp() {
    const dataRegist = {
      name,
      phone_number,
      gender,
      profession,
      date_of_birth,
      status,
      address,
      email,
      username,
      password,
      disability,
    };
    // console.log(dataRegist);
    let result = await fetch(
      "https://ayo-relieve.osorateam.com/api/auth/register",
      {
        method: "POST",
        body: JSON.stringify(dataRegist),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    // console.log("result", result)
    // console.log(result)
    const res = await result.json();
    if (res.message == "Register Success") {
      swal({
        title: "Registrasi Berhasil!",
        icon: "success",
        button: "OK!",
      });
      navigate('/login')
    } else if (res.message !== "Register Success") {
      swal({
        title: "Registrasi Gagal!",
        text: res.message,
        icon: "error",
        button: "OK"
      });
    }
  }

  return (
    <section className="">
      <div className="row mt-5">
        <h1 className="text-center">
          <Link to="/" className="text-decoration-none heading">
            AYO.RELIEVE
          </Link>
        </h1>
      </div>
      <div className="row">
        <div className="container d-flex flex-column justify-content-center align-items-center flex-sm-row">
          <img src={Together} className="w-50" alt="" />
          <h3 className="fw-bold mb-3 d-none txt">Daftar</h3>
          <form action="" onSubmit={handleSubmit} className="w-100 px-5">
            {/* /// Nama Lengkap //// */}
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-bold"
              >
                Nama Lengkap <span className="p-0 m-0 text-danger">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="name"
                placeholder="Nama Lengkap"
                required
              />
            </div>
            {/* No Hp */}
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
                id="noHp"
                value={phone_number}
                onChange={(e) => setPhone_number(e.target.value)}
                placeholder="Nomor Handphone"
                required
              />
              <div className="txt-ex my-2 px-1">Contoh: 081234567891</div>
            </div>
            {/* Tempat tanggal lahir */}
            <div className="mb-3">
              <label className="form-label fw-bold">
                Tanggal Lahir <span className="p-0 m-0 text-danger">*</span>
              </label>
              <input
                type="date"
                value={date_of_birth}
                onChange={(e) => setDate_of_birth(e.target.value)}
                className="form-control"
                id="date_of_birth"
                placeholder="Tanggal Lahir"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-bold"
              >
                Jenis Kelamin <span className="p-0 m-0 text-danger">*</span>
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Jenis Kelamin</option>
                <option value="Pria">Pria</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>

            {/* Pekerjaan */}
            <div className="mb-3">
              <label className="form-label fw-bold">
                Pekerjaan <span className="p-0 m-0 text-danger">*</span>
              </label>
              <input
                type="text"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="form-control"
                id="profession"
                placeholder="Pekerjaan"
                required
              />
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
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-bold"
              >
                Apakah anda merupakan penyandang disabilitas?
                <span className="p-0 m-0 text-danger">*</span>
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={disability}
                onChange={(e) => setDisability(e.target.value)}
                required
              >
                <option value="">Penyandang Disabilitas</option>
                <option value={true}>Ya</option>
                <option value={false}>Tidak</option>
              </select>
            </div>
            {/* email */}
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
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-bold"
              >
                Username <span className="p-0 m-0 text-danger">*</span>
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                id="username"
                placeholder="Username"
                aria-describedby="emailHelp"
                required
              />
            </div>
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
            <button className="btn btn-primary button">Daftar</button>
            <p className="mt-3">
              Sudah memiliki akun?
              <Link to="/login" className="text-decoration-none heading">
                Masuk
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterApplicant;
