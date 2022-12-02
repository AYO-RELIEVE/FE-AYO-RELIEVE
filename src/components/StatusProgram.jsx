import React from 'react'
import "../assets/style.css";
import Company from "./../assets/Company.jpg"
import Together from "./../assets/Together-pana.svg";

const StatusProgram = (props) => {
  return (
    <>
        <div className="flex-shrink-1 w-75">
        <img
            className="w-100"
            src={props.thumbnail == null ? Together : `https://ayo-relieve.osorateam.com/${props.thumbnail}`}
            alt={props.title}
        />
        </div>
        <div className="w-100 d-flex flex-column gap-0 py-2 justify-content-center px-2">
        <h6 className="p-0 m-0">{props.title}</h6>
        <div className="d-flex align-items-center gap-2 m-0 p-0">
            <img
            src={props.photo != null ? `https://ayo-relieve.osorateam.com/${props.photo}` : Company}
            className="imgOrganization d-block m-0 p-0"
            />
            <div className="pt-3 m-0">
            <p className="">{props.name}</p>
            </div>
        </div>
        <p className={props.status == "Menunggu" ? "status-seleksi-pending text-white text-center d-flex align-content-center justify-content-center" : "status-seleksi-reject text-white text-center d-flex align-content-center justify-content-center"}>
            {props.status}
        </p>
        </div>
    </>
  )
}

export default StatusProgram