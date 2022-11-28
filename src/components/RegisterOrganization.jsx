import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Together from "./../assets/Together-pana.svg";

const RegisterOrganization = () => {
      const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("organization");
  const [description, setDescription] = useState("");
  const [sector, setSector] = useState("");
  const [media_social, setMedia_social] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    signUpOrganization()
    console.log(
      name,
      phone_number,
      address,
      email,
      password,
      status,
      description,
      sector,
      media_social
    );
  };

  async function signUpOrganization() {
    const data = {
      name,
      phone_number,
      address,
      email,
      password,
      status,
      description,
      sector,
      media_social,
    };
    let result = await fetch(
      "https://ayo-relieve.osorateam.com/api/auth/register",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    console.log(result)
        const res = await result.json();
        console.log(res)
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
    <section>
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
          <h3 className="fw-bold mb-3  txt">Daftar</h3>
          <form onSubmit={handleSubmit} className="w-100 px-5">
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
            <button className="btn btn-primary button">Daftar</button>
            <p className="mt-3">
              Sudah memiliki akun? 
              <Link to="/login" className="text-decoration-none heading mx-1">
                Masuk
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterOrganization;
