import Together from "./../assets/Together-pana.svg";
import { Link } from "react-router-dom";
import "./../assets/style.css";
import Navbar from "../layout/Navbar";

const RegisterTypeAccount = () => {
  
  return (
    <section className="w-100 mx-auto">
      <Navbar/>
      <div className="col-lg-6 mx-lg-auto mx-md-auto col-md-6 mx-4 px-4 my-4 rounded-5 pt-4 shadow">
        <Link style={{ textDecoration: 'none', color: '#ffffff' }} to={"/login"} className="buttonKembali shadow">Kembali</Link>
        <img src={Together} className="icon-regist m-0 p-0" alt="" />
        <h2 className="m-0 text-center">Pilih Jenis Akun</h2>
        <div className="d-sm-flex px-5 justify-content-center gap-4 py-3">
          <Link
            to={"/register-applicant"}
            className="buttonSplit text-decoration-none d-flex align-items-center justify-content-center w-100 btn py-3 mb-4 px-5"
          >
            Pelamar
          </Link>
          <Link
            to={"/register-organization"}
            className="buttonSplit text-decoration-none d-flex align-items-center w-100 justify-content-center btn py-3 px-5 mb-4"
          >
            Organisasi
          </Link>
        </div>
      </div>
      
    </section>
  );
};
export default RegisterTypeAccount;
