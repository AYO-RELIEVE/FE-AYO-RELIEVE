import React, { useState } from 'react'
import Together from './../assets/Together-pana.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import userSlice from '../redux/user'
import './../assets/style.css'

const Login = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
    
      signIn(email, password)
    };

    async function signIn(email, password) { 
        let response = await fetch('https://634e4141f34e1ed826869202.mockapi.io/users', {
            method: 'GET'
        })
        if (!response.ok) {
            throw new Error(`HTTP error. Status ${response.status}`)
        }
        
        const data = await response.json()
        const user = await data.find(d =>
            d.email === email &&
            d.password === password
        )
        if (user) {
            dispatch(userSlice.actions.addUser({ userData: user }));
            localStorage.setItem('Email', user.email)
            localStorage.setItem('UserID', user.id)
            localStorage.setItem('CampaignJoined', user.campaign)
            localStorage.setItem ('Status', "Logged in")
            console.log('login sukses')
            navigate('/')
            alert("Login sukses!");
        } else {
            console.log('login gagal')
            alert("Email atau Password salah!");
        }
    }
    
    return (
        <section className="">
        <div className="row mt-5">
            <h1 className="text-center">
            <Link to="/" className="text-decoration-none heading">AYO.RELIEVE</Link>
            </h1>
        </div>
        <div className="row">
            <div className="container d-flex flex-column justify-content-center align-items-center flex-sm-row">
            <img src={Together} className="w-50" alt="" />
            <form action="" onSubmit={handleSubmit} className="w-100 px-5">
                <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email</label>
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
                <label for="exampleInputPassword1" className="form-label">Kata Sandi</label>
                <input
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    id="password"
                />
                </div>
                <button className="btn btn-primary button" type="submit">Masuk</button>
                <p className="mt-3">
                    Belum memiliki akun? 
                    <Link to="/register" className="text-decoration-none heading"> Daftar</Link>
                </p>
            </form>
            </div>
        </div>
        </section>
    )
}

export default Login