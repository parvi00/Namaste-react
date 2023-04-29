import { useState, useEffect } from "react";
import ResCard from "./ResCard";
import { resList } from "../config";
import Shimmer from "./Shimmer";

function filter(searchText, res) {
  const filtereddata = res.filter((x) => {x.data.name.includes(searchText);});
  console.log(filtereddata);
  return filtereddata;
}

const Body = () => {
  const [res, setres] = useState([]);
  const [searchText, setsearchText] = useState();

  

  useEffect(() => {
    getSwiggy();
  }, []);

  async function getSwiggy() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5217372&lng=77.36725539999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setres(json?.data?.cards[2]?.data?.data?.cards);
  }

  return (res.length == 0) ? <Shimmer/> : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search"
          value={searchText}
          className="search"
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filter(searchText, res);
            setres(data);
            console.log(data)
          }}
        >
          Search
        </button>
      </div>
      <div className="body">
        {res.map((x) => {
          return (
            <ResCard
              name={x.data.name}
              cuisines={x.data.cuisines}
              imgID={x.data.cloudinaryImageId}
              avgRating={x.data.avgRating}
              key={x.data.id}
              cost={x.data.costForTwoString}
              time={x.data.slaString}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
