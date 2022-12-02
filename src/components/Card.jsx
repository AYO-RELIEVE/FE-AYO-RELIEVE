import { Link } from "react-router-dom";
import Together from "./../assets/Together-pana.svg";
import Company from "./../assets/Company.jpg"

const Card = (props) => {
  return (
    <>
      <div className="card-container">
        <img
          src={props.thumbnail == null ? Together : `https://ayo-relieve.osorateam.com/${props.thumbnail}`}
          alt=""
          className="card-img-top"
        />
      </div>
      <div className="card-body d-flex flex-column gap-2">
        <h5 className="card-title">{props.title}</h5>
        <div className="d-flex align-items-center justify-content-between gap-2">
          <div className="d-flex align-items-center gap-2">
            <img 
              src={props.photo ? `https://ayo-relieve.osorateam.com/${props.photo}` : Company}
              className="imgOrganization" 
            />
            <div className="">{props.name}</div>
          </div>
          {
            (props.status == 'organization') &&
              <Link
                  style={{ textDecoration: 'none' }} 
                  to={localStorage.getItem('Email') ? `/detailprogramorganization/${props.id}` : '/login'}
                  className="buttonDetailHome"
              >
                  Detail
              </Link>
          }
          {
            (props.status != 'organization') &&
              <Link 
                style={{ textDecoration: 'none' }}
                to={localStorage.getItem('Email') ? `/detailprogram/${props.id}` : '/login'}
                className="buttonDetailHome"
              >
                Detail
              </Link>
          }
        </div>
      </div>
    </>
  );
};

export default Card;
