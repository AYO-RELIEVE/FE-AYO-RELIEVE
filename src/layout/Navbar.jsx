import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Icon from "../assets/Icon.png";
import "./../assets/style.css";
import axios from "axios";

const Navbar = () => {
  const user = useSelector((store) => store.user.data);
  const isLogin = localStorage.getItem("Email")
  const statusUser = localStorage.getItem("statusUser")
  const [profile, setProfile] = useState({})

  useEffect(() => {
      axios
          .get(`http://ayo-relieve.osorateam.com/api/auth/me`, {
              headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
          })
          .then((res) => {
              setProfile(res.data.data)
              setDetail(res.data.data.user_applicant_detail)
          })
          .catch((err) => {
              console.log(err)
          });
          
  }, []);

  console.log('ini profL ', profile)
  console.log('status userz: ', statusUser)

  return (
    <nav className="navbar navbar-expand-lg avbar-light shadow-sm px-3">
      <div className="container-sm container">

        {
          statusUser == "organization" ? 
          <h1>
            <Link className="navbar-brand navbarTitle" to="/organization">
              AYO RELIEVE
            </Link>
          </h1>
          : 
          <h1>
            <Link className="navbar-brand navbarTitle" to="/">
              AYO RELIEVE
            </Link>
          </h1>
        }

        {isLogin == null && (
          <div className="d-md-block d-lg-block">
            <Link to="/login" className="btn button">
              Masuk
            </Link>
          </div>
        )}

        {isLogin != null && (
          <>
            {
              statusUser == "organization" ?
              <>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <span>Profile</span>
                </div>

                <div className=" dropdown " id="dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={profile.photo ? `https://ayo-relieve.osorateam.com/${profile.photo}` : Icon } alt="..." className="profileImage" />{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">
                      <Link to="/profile" className="btn p-0" type="button">
                        Profile
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/logout" className="btn p-0" type="button">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
              :
              <>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <span>Profile</span>
                </div>

                <div className=" dropdown " id="dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={profile.photo ? `https://ayo-relieve.osorateam.com/${profile.photo}` : Icon } alt="..." className="profileImage" />{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">
                      <Link to="/profile" className="btn p-0" type="button">
                        Profile
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/my-programs" className="btn p-0" type="button">
                        My Programs
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/logout" className="btn p-0" type="button">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            }
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
