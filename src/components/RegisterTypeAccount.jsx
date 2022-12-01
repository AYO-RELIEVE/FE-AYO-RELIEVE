import Together from "./../assets/Together-pana.svg";
import { Link, useNavigate } from "react-router-dom";
import "./../assets/style.css";

const RegisterTypeAccount = () => {
  const navigate = useNavigate();
  // const handleButtonApplicant =()=> {
  //     navigate('/register-applicant')
  // }
  return (
    <section className="w-100 mx-auto">
      <div className="row mt-2 w-100 mx-auto">
        <Link
          to={"/login"}
          className="text-decoration-none px-4 py-2 mt-2 text-dark d-flex align-items-center gap-2"
        >
          <span class="material-symbols-outlined">arrow_back </span>
          <span>Kembali ke halaman login</span>
        </Link>
      </div>
      <div className=" col-lg-6 mx-lg-auto mx-md-auto col-md-6 mx-2 px-3 my-5 rounded-5 py-5 shadow">
        <img src={Together} className="icon-regist m-0 p-0" alt="" />
        <h1 className="m-0 text-center">Pilih Jenis Akun</h1>
        <div className="d-flex px-5 justify-content-center gap-4 py-3">
        <div>
          {/* <button className="btn btn-type-acc"  type="button"> */}
          <Link
            to={"/register-applicant"}
            className="text-decoration-none d-flex align-items-center justify-content-center w-100 btn p-5 btn-primary"
          >
            Pelamar
          </Link>
          {/* </button> */}
        </div>
        <div>
          <Link
            to={"/register-organization"}
            className="text-decoration-none d-flex align-items-center w-100 justify-content-center btn p-5 btn-primary"
          >
            Organisasi
          </Link>
        </div>
      </div>
      </div>
      
    </section>
  );
};
export default RegisterTypeAccount;
