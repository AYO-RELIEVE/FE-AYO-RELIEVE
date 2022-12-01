import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Icon from "../assets/Icon.png";
import "./../assets/style.css";

const Navbar = () => {
  const user = useSelector((store) => store.user.data);
  const isLogin = localStorage.getItem("Email")
  const statusUser = localStorage.getItem("statusUser")

  console.log('status userz: ', statusUser)

  return (
    <nav className="navbar navbar-expand-lg avbar-light shadow-sm px-3">
      <div className="container-sm container">

        {
          statusUser == "organization" ? 
          <h1>
            <Link className="navbar-brand" to="/organization">
              AYO RELIEVE
            </Link>
          </h1>
          : 
          <h1>
            <Link className="navbar-brand" to="/">
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
                <img src={Icon} alt="..." className="profileImage" />{" "}
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
