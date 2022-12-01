import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Together from "./../assets/Together-pana.svg";
import { Link, useParams, useNavigate } from 'react-router-dom'
import './../assets/style.css'
import Navbar from '../layout/Navbar'
import { BsArrowLeftCircle } from "react-icons/bs";

const DetailApplicant = () => {

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
      
    useEffect(() => {
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
    }, [applyers]);

    const handleApprove = (id) => {
        var config = {
            method: 'put',
            url: `http://ayo-relieve.osorateam.com/api/programs/${params.id}/approve/${id}`,
            headers: { 
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };
          
        axios(config)
        .then(function (response) {
              console.log('respon approff: ', response);
              swal({
                title: "User telah di approve!",
                icon: "success",
                button: "Tutup",
              });
        })
        .catch(function (error) {
            console.log('error approff: ', error);
            swal({
                title: "User gagal di approve!",
                icon: "error",
                button: "Tutup",
            });
        });
    }

    const handleReject = (id) => {
        var config = {
            method: 'put',
            url: `http://ayo-relieve.osorateam.com/api/programs/${params.id}/reject/${id}`,
            headers: { 
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };
          
        axios(config)
        .then(function (response) {
              console.log('respon reject: ', response);
              swal({
                title: "User telah di reject!",
                icon: "success",
                button: "Tutup",
              });
        })
        .catch(function (error) {
            console.log('error reject: ', error);
            swal({
                title: "User gagal di reject!",
                icon: "error",
                button: "Tutup",
            });
        });
    }
    
    console.log(program)
    console.log('ini applyers: ', applyers)
    
    return (
        <>
            { program !== null &&
                <>
                    <Navbar/>
                    <section className="container text-md-start py-4 py-md-4 px-md-0">
                        <Link className="buttonBackContainer d-flex" to={`/detailprogramorganization/${program.id}`} >
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
                                <div className="d-flex detailApplicantSpace">
                                    <h6 className="fw-bold">
                                        Dibuka s/d: {program.end_date}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section className="container text-md-start py-md-0 px-md-0 mt-md-4">
                        <div
                            className="container d-flex flex-column"
                        >
                            <div className="order-2 order-md-1">
                                <h4 className="fw-bold">
                                    List Pendaftar
                                </h4>
                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Nama</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Options</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { applyers.applicant != null &&
                                            <>
                                                { 
                                                    applyers.applicant.map((applicants, index) => {
                                                        return (
                                                            <tr className="">
                                                                <th scope="row">
                                                                    {index+1}
                                                                </th>
                                                                <td>
                                                                    {applicants.name}
                                                                </td>
                                                                <td>
                                                                    {applicants.Program_Users.status}
                                                                </td>
                                                                <td className="d-flex gap-2">
                                                                    <button 
                                                                        className="btn btn-success w-100 mt-lg-0 d-flex justify-content-center align-items-center"
                                                                        onClick={() => handleApprove(applicants.id)}
                                                                    >
                                                                        Terima
                                                                    </button>
                                                                    <button 
                                                                        className="btn btn-danger w-100 mt-lg-0 d-flex justify-content-center align-items-center"
                                                                        onClick={() => handleReject(applicants.id)}
                                                                    >
                                                                        Tolak
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })
                                                }
                                            </>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    )
}

export default DetailApplicant