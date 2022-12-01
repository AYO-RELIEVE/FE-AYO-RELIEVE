import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      {/* <div className="card" style={{ width: "22rem" }}>
        <img
          src={props.poster}
          alt=""
          className="card-img-top"
        />
        <div className="card-body d-flex flex-column gap-2">
          <h5 className="card-title">{props.name}</h5>
          <div className="d-flex align-items-center justify-content-between gap-2">
            <div className="d-flex align-items-center gap-2">
              <img src={props.partnerLogo} alt={props.partnerName} className="image-pt" />
              <div className="">{props.partnerName}</div>
            </div>
            <Link to={`/detailprogram/${props.idProgram}`}>Detail</Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Card;
