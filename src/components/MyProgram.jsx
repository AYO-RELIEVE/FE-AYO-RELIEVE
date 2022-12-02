import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import "../assets/style.css";
import FindIcon from "./../assets/find-program.svg";
import StatusProgram from "./StatusProgram";

const MyProgram = () => {
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
  
  const statusApplyProgram = program
    .filter((program) => program.Program_Users.status !== "Diterima")
    .map((program) => {
      return program;
    });

  return (
    <section>
      { program !== null &&
        <>
          <Navbar />
          <div className="px-3 py-2 d-flex justify-content-evenly my-3">
            <Link to={"/my-programs"} className="text-decoration-none active">
              <h6>Status Pendaftaran</h6>
            </Link>
            <Link to={"/active-program"} className="text-decoration-none text-black"> <h6>Program Aktif</h6></Link>
          </div>
          {/* card */}
          <section className="row justify-content-center w-100 mx-auto px-3">
            {statusApplyProgram.length == 0? (
              <div className="px-5 my-5">
                <img src={FindIcon} alt="Looking for Program"  className="icon"/>
                <h4 className="text-center">Kamu belum mengikuti program apapun</h4>
              </div>
            ): (
              statusApplyProgram.map((program) => {
              return (
                <Link to={`/detailprogram/${program.id}`} style={{ textDecoration: 'none', color: '#29325d' }} key ={program.id} className="col-sm col-md-3 col-lg-3 shadow-sm border-1 border rounded-2 border-secondary px-2 mx-3 py-2 d-flex gap-2 align-items-center my-3 justify-content-center">
                  <StatusProgram
                    thumbnail={program.thumbnail}
                    title={program.title}
                    photo={program.organization.photo}
                    name={program.organization.name}
                    status={program.Program_Users.status}
                  />
                </Link>
              );
            })
            )}
          </section>
        </>
      }
    </section>
  );
};

export default MyProgram;
