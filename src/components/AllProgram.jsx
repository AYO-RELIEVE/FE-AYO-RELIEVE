import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './../assets/style.css'

const AllProgram = () => {

  const [program, setProgram] = useState([])
  const [filteredProgram, setFilteredProgram] = useState([])
    
  useEffect(() => {
    axios
      .get(`https://634f91da78563c1d82a9bced.mockapi.io/new-program`, {})
      .then((res) => {
          setProgram(res.data);
          setFilteredProgram(res.data);
      })
      .catch((err) => {
          console.log(err)
      });
  }, []);

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...program];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.nama_program.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredProgram(updatedList);
  };
  
  return (
    <>
      <div class="container-sm container">
        <div class="d-flex my-4 w-100">
          <input 
            id="search-box"
            class="form-control me-2"
            type="search"
            placeholder="Cari Program"
            aria-label="Search"
            onChange={filterBySearch} 
          />
        </div>
      </div>
      <section class="py-5">
        <div class="container px-4 mx-auto">
            <div class="container-card d-flex flex-wrap gap-3 justify-content-center">
              {filteredProgram.map((programs, index) => {
                  return(
                    <div class="card col-4" style={{ width: '22rem' }} key={index}>
                      <img
                        src={programs.poster}
                        class="card-img-top"
                        alt="Make a change"
                      />
                      <div class="card-body">
                        <h5 class="card-title mb-4">{programs.nama_program}</h5>
                        <div class="d-flex justify-content-between align-items-center">
                          <div
                            class="d-flex align-items-center gap-1 w-50 justify-content-start"
                          >
                            <img
                              src={programs.partner.logo}
                              class="image-pt"
                              alt={programs.partner.nama}
                            />
                            <h6 class="mt-1">{programs.partner.nama}</h6>
                          </div>
                          <Link to={`/detailprogram/${programs.id}`}>
                              Detail
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
              })}
            </div>
        </div>
      </section>
    </>
  )
}

export default AllProgram