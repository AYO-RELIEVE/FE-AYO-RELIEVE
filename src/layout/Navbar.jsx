import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Navbar = () => {

  const user = useSelector( store => store.user.data )

  return (
    <nav className="navbar navbar-light shadow-sm px-3">
      <div className="container-sm container">
        <h1><Link className="navbar-brand" to="/">AYO RELIEVE</Link></h1>
        
        <div className="d-md-block d-lg-block">
          { user == null && 
            <Link to="/login" className="btn button">
              Masuk
            </Link>
          }
          { user != null && 
            <Link to="/logout" className="btn button" type="button">
              Logout
            </Link>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar