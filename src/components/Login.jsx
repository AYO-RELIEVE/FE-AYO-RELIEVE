import React, { useState } from 'react'
import Together from './../assets/Together-pana.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import userSlice from '../redux/user'
import axios from 'axios'
import './../assets/style.css'
import Navbar from '../layout/Navbar'
import swal from "sweetalert";

const Login = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async () => {

        var data = JSON.stringify({
            email: email,
            password: password
        });

        try {
            var config = {
                method: 'post',
                url: 'http://ayo-relieve.osorateam.com/api/auth/login',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : data
            };
          
            await axios(config)
            .then(function (response) {
                console.log('Respon API:', response)
                dispatch(userSlice.actions.addUser({ userData: data }));
                localStorage.setItem('Email', email)
                localStorage.setItem ('Status', "Logged in")
                localStorage.setItem ('token', response.data.data.token)
                swal({
                  title: "Login Berhasil!",
                  icon: "success",
                  button: "OK!",
                });
            
                axios.get(`http://ayo-relieve.osorateam.com/api/auth/me`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                })
                .then((res) => {
                    setStatus(res.data.data);
                    localStorage.setItem('statusUser', res.data.data.status)
                    if (res.data.data.status == 'organization') {
                      navigate('/organization')
                    } else if (res.data.data.status == 'applicant'){
                      navigate('/')
                    }
                })
            })
        } catch (error) {
            console.log(error);
            swal({
              title: "Login Gagal!",
              text: 'Terjadi kesalahan. Cek email atau password anda!',
              icon: "error",
              button: "OK"
            });
        }
    }
    
    return (
        <>
            <Navbar/>
            <section className="">
            <div className="row mt-5">
                <h1 className="text-center">
                <Link to="/" className="text-decoration-none heading">AYO.RELIEVE</Link>
                </h1>
            </div>
            <div className="row">
                <div className="container d-flex flex-column justify-content-center align-items-center flex-sm-row">
                <img src={Together} className="imageRegister mx-4 px-4" alt="" />
                <div className="w-100 px-5">
                    <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        aria-describedby="emailHelp"
                        required
                    />
                    <div id="emailHelp" className="form-text d-none">
                        We'll never share your email with anyone else.
                    </div>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Kata Sandi</label>
                    <input
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        id="password"
                    />
                    </div>
                    <button className="btn btn-primary button" onClick={handleSubmit}>Masuk</button>
                    <p className="mt-3">
                        Belum memiliki akun? 
                        <Link to="/register" className="text-decoration-none heading"> Daftar</Link>
                    </p>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Login