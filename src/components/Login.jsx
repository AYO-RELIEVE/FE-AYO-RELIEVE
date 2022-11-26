import React, { useState } from 'react'
import Together from './../assets/Together-pana.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import userSlice from '../redux/user'
import './../assets/style.css'

const Login = () => {
    
    // const JWT_ORGANIZATION_1 = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJuYW1lIjoiWmFraSIsImVtYWlsIjoib3JnYW5pemF0aW9uQGdtYWlsLmNvbSIsImFkZHJlc3MiOiJLbGF0ZW4iLCJwaG90byI6bnVsbCwicGhvbmVfbnVtYmVyIjoiMDg5MzQ3Mjk0ODIzIiwic3RhdHVzIjoib3JnYW5pemF0aW9uIiwiY3JlYXRlZEF0IjoiMjAyMi0xMS0yNFQxODozNToxMy4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMi0xMS0yNFQxODozNToxMy4wMDBaIn0sImlhdCI6MTY2OTMxNTAwOSwiZXhwIjoxNzAwODUxMDA5fQ.lQxQsF0tZ3ihWTo9wVHcBHHZzTf9whLmf4CJBY426iQ;
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
    
      signIn(email, password)
    };

    async function signIn(email, password) { 
        const postData = {
            email: email,
            password: password
        }
        let response = await fetch('http://ayo-relieve.osorateam.com/api/auth/login', postData, {
            method: 'POST',
            headers: {
                // Authorization: `Bearer ${Userfront.accessToken()}`,
                // Authorization: `Bearer ${JWT_ORGANIZATION_1}`,
                'content-type': 'appication/json'
            }
        })
        console.log('ini respon: ', response)
        // if (!response.ok) {
        //     throw new Error(`HTTP error. Status ${response.status}`)
        // }
        
        // const data = await response.json()
        // const user = await data.find(d =>
        //     d.email === email &&
        //     d.password === password
        // )
        // if (user) {
        //     dispatch(userSlice.actions.addUser({ userData: user }));
        //     localStorage.setItem('Email', user.email)
        //     localStorage.setItem('UserID', user.id)
        //     console.log('login sukses')
        //     navigate('/')
        //     alert("Login sukses!");
        // } else {
        //     console.log('login gagal')
        //     alert("Email atau Password salah!");
        // }
    }

    // const formSubmitHandler = (data) => {
    //     const postData = {
    //         email: data.email,
    //         password: data.password
    //     }
    //     axios.post('http://ayo-relieve.osorateam.com/api/auth/login', 
    //         postData,
    //         {
    //             headers: {
    //                 'content-type': 'appication/json'
    //             }
    //         }
    //         )
    //     .then( res => {
    //         console.log('ini res', res)
    //         navigate('/')
    //         // if (typeof res.data.accessToken !== 'undefined') {
    //             // Menyimpan token di localstorage
    //             // localStorage.setItem('webAccessToken', res.data.accessToken)
    //             // navigate('/')
    //             // Menyimpan redux di store
    //             // const user = jwtDecode(res.data.accessToken)
    //             // axios.get(`http://localhost:4000/users/${user.sub}`)
    //             // .then( res => {
    //             //     dispatch( userSlice.actions.addUser({ userData: res.data }))
    //             //     navigate('/')
    //             // })
    //         // }
    //     }) 
    //     .catch( err => {
    //         console.log(err)
    //     })
    // }
    
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