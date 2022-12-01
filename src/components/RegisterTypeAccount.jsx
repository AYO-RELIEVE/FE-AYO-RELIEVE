import Together from "./../assets/Together-pana.svg";
import { Link, useNavigate } from "react-router-dom";
import "./../assets/style.css";
import Navbar from "../layout/Navbar";

const RegisterTypeAccount = () => {
  const navigate = useNavigate();
  // const handleButtonApplicant =()=> {
  //     navigate('/register-applicant')
  // }
  return (
    <section className="">
      <Navbar/>
      <div className="row mt-2">
        <Link to={"/login"} className="text-decoration-none px-4 mt-2 text-dark d-flex justify-content-center align-items-center gap-2">
          <span class="material-symbols-outlined">arrow_back </span>
          <span>Kembali ke halaman login</span>
        </Link>
        {/* <h1 className="text-center">
          <Link to="/" className="text-decoration-none heading">
            AYO.RELIEVE
          </Link>
         
        </h1> */}
        <img src={Together} className="imageRegister img-login mx-auto" alt="" />
      </div>
      <div>
        <h1 className="title text-center mb-3">Pilih Jenis Akun</h1>
      </div>
      <div className="d-flex px-5 big-margin justify-content-center gap-4 w-auto  h-auto border-box">
        <div>
          {/* <button className="btn btn-type-acc"  type="button"> */}
          <Link
            to={"/register-applicant"}
            className="text-decoration-none d-flex align-items-center justify-content-center btn btn-type-acc"
          >
            Pelamar
          </Link>
          {/* </button> */}
        </div>
        <div>
          <Link
            to={"/register-organization"}
            className="text-decoration-none d-flex align-items-center justify-content-center btn btn-type-acc"
          >
            Organisasi
          </Link>
        </div>
      </div>
    </section>
  );
};
export default RegisterTypeAccount;
