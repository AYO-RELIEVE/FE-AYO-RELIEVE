import React, { useEffect, useState } from "react";
import Together from "./../assets/Together-pana.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "./Card";
import "./../assets/style.css";
import Navbar from "../layout/Navbar";
import { BiArrowBack } from "react-icons/bi";
import Company from "./../assets/Company.jpg"

const AllProgram = () => {
  const navigate = useNavigate()
  const [program, setProgram] = useState([]);
  const [filteredProgram, setFilteredProgram] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    axios
      .get(`https://ayo-relieve.osorateam.com/api/programs`, {})
      .then((res) => {
        setProgram(res.data.data);
        setFilteredProgram(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`https://ayo-relieve.osorateam.com/api/auth/me`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      })
      .then((res) => {
        setStatus(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
            
    if (localStorage.getItem('Email') == null) {
        navigate("/login")
    }
  }, []);

  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...program];
    updatedList = updatedList.filter((item) => {
      return (
        item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    });
    setFilteredProgram(updatedList);
  };

  return (
    <>
      <Navbar/>
      <div className="container-sm container">
        <div className="d-flex my-4 w-100">
          {
            (status.status == 'organization') && 
              <Link style={{ textDecoration: 'none' }} to={"/organization"} className="buttonKembaliAllProgram shadow"><BiArrowBack className="BiArrowBack"/></Link>
          }
          {
            (status.status != 'organization') && 
              <Link style={{ textDecoration: 'none' }} to={"/"} className="buttonKembaliAllProgram shadow"><BiArrowBack className="BiArrowBack"/></Link>
          }
          <input
            id="search-box"
            className="form-control me-2"
            type="search"
            placeholder="Cari Program"
            aria-label="Search"
            onChange={filterBySearch}
          />
        </div>
      </div>
      <section className="py-2">
        <div className="container px-4 mx-auto">
          <div className="container-card d-flex flex-wrap gap-3 justify-content-center">
            {filteredProgram.map((programs, index) => {
              {
                if (programs.organization_id == status.id) {
                  return (
                    <Link to={`/detailprogramorganization/${programs.id}`} className="card" style={{ width: "22rem", textDecoration: 'none', color: '#29325d' }} key={index}>
                      <Card
                          id={programs.id}
                          key={index}
                          thumbnail={programs.thumbnail}
                          title={programs.title}
                          photo={programs.organization.photo}
                          name={programs.organization.name}
                          status={status.status}
                      />
                    </Link>
                  )
                } else if (status.status == "applicant") {
                  return (
                    <Link to={`/detailprogram/${programs.id}`} className="card" style={{ width: "22rem", textDecoration: 'none', color: '#29325d' }} key={index}>
                      <Card
                        id={programs.id}
                        key={index}
                        thumbnail={programs.thumbnail}
                        title={programs.title}
                        photo={programs.organization.photo}
                        name={programs.organization.name}
                        status={status.status}
                      />
                    </Link>
                  )
                }
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProgram;
