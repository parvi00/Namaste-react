import { useState, useEffect } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestrauntData from "../hooks/useRestrauntData";
import { filtereddata } from "./utils/helper";


const Body = () => {
  const [allRes, setallRes] = useState([]);
  const [Filterres, setFilterres] = useState([]);
  const [searchText, setsearchText] = useState();


  const data1 = useRestrauntData();

  useEffect(() => {
    setFilterres(data1);
    setallRes(data1);
  },[data1]);

// console.log(Filterres)

  return allRes?.length == 0 ? (
    <Shimmer />
  ) : (
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
            const data = filtereddata(searchText, allRes);
            setFilterres(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="body">
        {Filterres.map((x) => {
          return (
            <ResCard
              name={x.data.name}
              cuisines={x.data.cuisines}
              imgID={x.data.cloudinaryImageId}
              avgRating={x.data.avgRating}
              key={x.data.id}
              cost={x.data.costForTwoString}
              time={x.data.slaString}
              id={x.data.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
