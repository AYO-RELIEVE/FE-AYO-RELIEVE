import react from react
import Together from './../assets/Together-pana.svg'
import { Link, useNavigate } from 'react-router-dom'
import './../assets/style.css'

    
    return (
        <section className="">
        <div className="row mt-5">
            <h1 className="text-center">
            <Link to="/" className="text-decoration-none heading">AYO.RELIEVE</Link>
            <img src={Together} className="img-login" alt="" />
            </h1>
        </div>
        <div>
            <h1 className='Akun'>Pilih Jenis Akun</h1>
        </div>
        <div>
        <button className="btn btn-primary button" type="submit">Pelamar</button>
        </div>
        <div>
        <button className="btn btn-primary button" type="submit">Organization</button>
        </div>
        </section>
    )


export default register-page