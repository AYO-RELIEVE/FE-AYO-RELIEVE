import React, { useState } from 'react'
import Together from './../assets/Together-pana.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './../assets/style.css'

const Register = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
    
      signUp(email, username, password)
    };

    async function signUp(email, username, password) { 
        if ((email == '') || (username == '') || (password == '')) {
            console.log('data tidak boleh kosong')
        } else {
            const postData = {
                email: email,
                username: username,
                password: password
            }
            let response = await fetch('https://634e4141f34e1ed826869202.mockapi.io/users', {
                method: 'POST',
                body: JSON.stringify(postData),
                headers: { "Content-type": "application/json" }
            })
        
            if (response.ok) {
                console.log('register sukses')
                navigate('/login')
                alert("Registrasi sukses! Silahkan masukan data anda.");
            } else {
                console.log('register gagal')
                alert("Registrasi gagal! Ulangi proses!.");
                throw new Error(`HTTP error. Status ${response.status}`)
            }
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
            <div
            className="container d-flex flex-column justify-content-center align-items-center flex-sm-row"
            >
            <img src={Together} className="w-50" alt="" />
            <form action="" onSubmit={handleSubmit} className="w-100 px-5">
                <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Alamat Email</label>
                <input
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    aria-describedby="emailHelp"
                    required
                />
                <div id="emailHelp" className="form-text d-none">
                    We'll never share your email with anyone else.
                </div>
                </div>
                <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Username</label>
                <input
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    aria-describedby="emailHelp"
                    required
                />
                </div>
                <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Kata Sandi</label>
                <input
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="form-control"
                    id="password"
                />
                </div>
                <button className="btn btn-primary button">Masuk</button>
                <p className="mt-3">
                Sudah memiliki akun?
                <Link to="/login" className="text-decoration-none heading">Masuk</Link>
                </p>
            </form>
            </div>
        </div>
        </section>
    )
}

export default Register