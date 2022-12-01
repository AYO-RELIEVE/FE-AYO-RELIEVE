import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import FindIcon from "./../assets/find-program.svg";
const ActivepProgram = ()=> {
    const [program, setProgram] = useState([]);
  useEffect(() => {
    axios
      .get(`https://ayo-relieve.osorateam.com/api/programs/my-programs`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setProgram(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const activeProgram = program.filter((program)=> program.Program_Users.status == "Diterima").map((program)=> {
    return program
  })
    return (
        <section>
      <Navbar />
      <div className="px-3 py-2 d-flex justify-content-evenly my-3">
        <Link to={"/my-programs"} className="text-decoration-none text-black">
          <h6>Status Pendaftaran</h6>
        </Link>
        <Link className="text-decoration-none active"> <h6>Program Aktif</h6></Link>
      </div>
      {/* card */}
      <section  className="row justify-content-center w-100 mx-auto">
      {activeProgram.length == 0? (
        <div className="px-5">
          <img src={FindIcon} alt="Looking for Program" className="icon"/>
          <h4 className="text-center">Kamu belum mengikuti program apapun</h4>
        </div>
      ): (
        activeProgram.map((program) => {
        return (
            <div key ={program.id}className="col col-md-3 col-lg-3 shadow-sm border-1 border rounded-2 border-secondary px-2 mx-4 py-2 d-flex gap-2 align-items-center my-3 justify-content-center">
              <div className="flex-shrink-1 w-75">
                <img
                  className="w-100"
                  src={program.thumbnail}
                  alt={program.title}
                />
              </div>
              <div className="w-100 d-flex flex-column gap-0 py-2 justify-content-center">
                <h6 className="p-0 m-0">{program.title}</h6>
                <div className="d-flex align-items-center gap-2 m-0 p-0">
                  <img
                    src="https://logos-download.com/wp-content/uploads/2016/03/Unilever_logotype_emblem_logo.png"
                    className="img-pt d-block m-0 p-0"
                  />
                  <div className="pt-3 m-0">
                    <p className="">PT Unilever</p>
                  </div>
                </div>
                <p className="status-seleksi-approve text-white text-center d-flex align-content-center justify-content-center">
                  {program.Program_Users.status}
                </p>
              </div>
            </div>
        );
      })
      )}
      </section>
      
    </section>
    )
}

export default ActivepProgram