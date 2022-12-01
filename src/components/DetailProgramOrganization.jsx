import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Together from "./../assets/Together-pana.svg";
import { Link, useParams, useNavigate } from 'react-router-dom'
import './../assets/style.css'
import Navbar from '../layout/Navbar'
import { BsArrowLeftCircle } from "react-icons/bs";

const DetailProgramOrganization = () => {

    const params = useParams()
    const navigate = useNavigate()
    const [program, setProgram] = useState(null)
    const [applyers, setApplyers] = useState([])
      
    useEffect(() => {
        axios
            .get(`http://ayo-relieve.osorateam.com/api/programs/${params.id}`)
            .then((res) => {
                setProgram(res.data.data);
            })
            .catch((err) => {
                console.log(err)
            });
        axios
            .get(`http://ayo-relieve.osorateam.com/api/organizations/programs/${params.id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            })
            .then((res) => {
                setApplyers(res.data.data);
                console.log('ini res: ', res)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const hapusProgram = () => {
        var data = JSON.stringify({
            "name": "Haii"
        });

        var config = {
            method: 'delete',
            url: `http://ayo-relieve.osorateam.com/api/programs/${params.id}`,
            headers: { 
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            swal({
              title: "Program berhasil dihapus!",
              icon: "success",
              button: "OK!",
            });
            navigate('/organization')
          })
          .catch(function (error) {
            swal({
              title: "Program gagal dihapus. Coba lagi!",
              icon: "error",
              button: "OK!",
            });
          });
    }
    
    console.log(program)
    console.log('ini applyers: ', applyers)
    // console.log('ini type img: ', typeof program.thumbnail)
    
    return (
        <>
            { program !== null &&
                <>
                    <Navbar/>
                    <section className="container text-md-start py-4 py-md-4 px-md-0">
                        <Link className="buttonBackContainer d-flex" to={`/allprogram`} >
                            <div className='buttonBackIconContainer'>
                                <BsArrowLeftCircle className='buttonBackIcon' style={{textDecoration: 'none'}}/>
                            </div>
                            <div className='buttonBackText' style={{textDecoration: 'none'}}>
                                Kembali
                            </div>
                        </Link>
                        <div
                            className="container d-flex flex-column justify-content-center align-items-center flex-md-row"
                        >
                            <div className="imageDetailContainer w-100 w-lg-50">
                                <img
                                    src={program.thumbnail == null ? Together : `https://ayo-relieve.osorateam.com/${program.thumbnail}`}
                                    className="imageDetail img-fluid col-2 order-1 order-md-1 mx-md-0 rounded"
                                    alt="together-pana"
                                />
                            </div>
                            <div className="order-2 order-md-2 mt-4 mt-md-0 px-md-4">
                                <h1 className="fw-bold">
                                    {program.title}
                                </h1>
                                <div className="d-flex">
                                    <img
                                        src={Together}
                                        className="my-3 text-start campaign-logo"
                                        alt="logo"
                                    />
                                    <p className="my-3 text-start">
                                        {program.title}
                                    </p>
                                </div>
                                <div className="d-flex">
                                    <h6 className="fw-bold">
                                        Dibuka s/d: {program.end_date}
                                    </h6>
                                </div>
                                <div className="button-joined d-flex">
                                    <Link to={`/detailapplicant/${program.id}`} className="btn btn-success mt-2 mt-lg-0 d-flex justify-content-center align-items-center">
                                        Pendaftar
                                    </Link>
                                    <Link to={`/editprogram/${program.id}`} className="btn button mt-2 mt-lg-0 mx-2 d-flex justify-content-center align-items-center">
                                        Edit Program
                                    </Link>
                                    <button className="btn btn-danger mt-2 mt-lg-0 d-flex justify-content-center align-items-center" onClick={hapusProgram}>
                                        Hapus Program
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section className="container text-md-start py-md-0 px-md-0 mt-md-4">
                        <div
                            className="container d-flex flex-column mx-auto"
                        >
                            <div className="order-2 order-md-1">
                                <h4 className="fw-bold">
                                    Detail Program
                                </h4>
                                <p className="my-3 text-start">
                                    {program.description}
                                </p>
                            </div>
                            <div className="order-2 order-md-1">
                                <h4 className="fw-bold">
                                    Kuota Penerima
                                </h4>
                                <p className="my-3 text-start">
                                    {program.qouta} Orang
                                </p>
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    )
}

export default DetailProgramOrganization