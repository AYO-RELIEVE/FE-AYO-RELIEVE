import React, { useState } from "react";
import Together from "./../assets/Together-pana.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./../assets/style.css";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [noHp, setNoHp] = useState("");
//   const [gender, setGender] = useState("")
  const [job,setJob] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    signUp(name,noHp, job, address ,email, username, password);
  };

  async function signUp(email, username, password) {
    if (email == "" || username == "" || password == "") {
      console.log("data tidak boleh kosong");
    } else {
      const postData = {
        email: email,
        username: username,
        password: password,
      };
      let response = await fetch(
        "https://634e4141f34e1ed826869202.mockapi.io/users",
        {
          method: "POST",
          body: JSON.stringify(postData),
          headers: { "Content-type": "application/json" },
        }
      );

      if (response.ok) {
        console.log("register sukses");
        navigate("/login");
        alert("Registrasi sukses! Silahkan masukan data anda.");
      } else {
        console.log("register gagal");
        alert("Registrasi gagal! Ulangi proses!.");
        throw new Error(`HTTP error. Status ${response.status}`);
      }
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
          <h3 className="fw-bold mb-3">Daftar</h3>
          <form action="" onSubmit={handleSubmit} className="w-100 px-5">
            {/* /// Nama Lengkap //// */}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
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
              <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                Nomor Handphone <span className="p-0 m-0 text-danger">*</span>
              </label>
              <input
                type="tel"
                className="form-control"
                id="handphone"
                value={noHp}
                onChange={(e) => setNoHp(e.target.value)}
                placeholder="Nomor Handphone"
                required
              />
            </div>
            {/* Jenis Kelamin */}
            {/* <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label fw-bold">
                Jenis Kelamin <span className="p-0 m-0 text-danger">*</span>
              </label>
              <div className="d-flex gap-5">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Laki-Laki
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Perempuan
                  </label>
                </div>
              </div>
            </div> */}
            {/* Pekerjaan */}
            <div className="mb-3">
              <label className="form-label fw-bold">
                Pekerjaan <span className="p-0 m-0 text-danger">*</span>
              </label>
              <input
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                className="form-control"
                id="job"
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
            {/* email */}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label  fw-bold">
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
              <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                Username  <span className="p-0 m-0 text-danger">*</span>
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
              <label htmlFor="exampleInputPassword1" className="form-label fw-bold">
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

export default Register;
