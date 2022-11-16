import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./../assets/style.css";
import Card from "./Card";

const AllProgram = () => {
  const [program, setProgram] = useState([]);
  const [filteredProgram, setFilteredProgram] = useState([]);

  useEffect(() => {
    axios
      .get(`https://634f91da78563c1d82a9bced.mockapi.io/new-program`, {})
      .then((res) => {
        setProgram(res.data);
        setFilteredProgram(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...program];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return (
        item.nama_program.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    });
    // Trigger render with updated values
    setFilteredProgram(updatedList);
  };

  return (
    <>
      <div className="container-sm container">
        <div className="d-flex my-4 w-100">
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
      <section className="py-5">
        <div className="container px-4 mx-auto">
          <div className="container-card d-flex flex-wrap gap-3 justify-content-center">
            {filteredProgram.map((programs, index) => {
              return (
                <Card
                  key={index}
                  poster={programs.poster}
                  name={programs.nama_program}
                  partnerLogo={programs.partner.logo}
                  partnerName={programs.partner.nama}
                  idProgram={programs.id}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProgram;
