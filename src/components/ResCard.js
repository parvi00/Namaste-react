import { Link } from "react-router-dom";

const ResCard = (props) => {
  return (
    <>
    
      <div className="card card1 shadow" style={{ width: "450px" }}>
      <Link to={"/restraunts/" + props.id}>
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ props.imgID} className="card-img-top" alt="..." />
        
        
        <button type="button" className="btn btn-success">Order Now</button></Link>
        <div className="card-body">
        
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            {props.cuisines.join(", ")}
          </p>
          
          <span classNmae="badge text-bg-primary cost">{props.cost}</span>
          <div className="badgge">
          <span className="badge text-bg-info time">{props.time}</span>
          
          <span className="badge rating text-bg-warning">{props.avgRating}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResCard;
