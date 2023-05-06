import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RestaruntMenu = () => {
  const { resid } = useParams();

  const [dishes, setdishes] = useState([]);
  const [details, setdetails] = useState([]);

  useEffect(() => {
    menu();
  }, []);

  async function menu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5048573&lng=77.3396453&restaurantId=" +
        resid
    );
    const json = await data.json();
    console.log(json);
    setdetails(json.data);
  }

  return (
    <>
      <div className="card mb-3 row-res">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaruntMenu;
