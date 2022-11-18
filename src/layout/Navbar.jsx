import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Icon from "../assets/Icon.png"
import "./../assets/style.css"

const Navbar = () => {

  const user = useSelector( store => store.user.data )
  console.log(localStorage.length)
  console.log(user)

  return (
    <nav className="navbar navbar-light shadow-sm px-3">
      <div className="container-sm container">
        <h1><Link className="navbar-brand" to="/">AYO RELIEVE</Link></h1>
        
        <div className="d-md-block d-lg-block">
          {/* {localStorage.length == 0 ?  <Link to="/login" className="btn button">
              Masuk
            </Link> :     <Link to="/logout" className="btn button" type="button">
              Logout
            </Link>} */}
          
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
          <Link to="/profile" className={user==null ? "d-none" : "profile"}>
            <img src={Icon} alt="..." className='profileImage'/>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar