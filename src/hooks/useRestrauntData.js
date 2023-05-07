import { useState,useEffect } from "react";

const useRestrauntData = () => { 
const [requireddata, setrequireddata] = useState([]);

useEffect(() => {
    getSwiggy();
  }, []);

  async function getSwiggy() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5217372&lng=77.36725539999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setrequireddata(json?.data?.cards[2]?.data?.data?.cards)
    // return requireddata;
  }
  return requireddata;
}
export default useRestrauntData