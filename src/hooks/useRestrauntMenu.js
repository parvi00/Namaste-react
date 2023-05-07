import { useState,useEffect } from "react";

export const useRestrauntMenu = (resid) => {

    const [details,setdetails] = useState([])
    const [data , setdata] = useState([])

    useEffect(() => {
        menu();
      }, []);
    
      async function menu() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5048573&lng=77.3396453&restaurantId=" +
            resid
        );
        const json = await data.json();
        // console.log(json);
        setdetails(json.data.cards[0]?.card?.card?.info
            // .data?.cards[0]?.card?.card?.info
            );


        setdata(json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            // .data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            )
      }
      return [data,details];
}

export const useResDishes = (resid) =>{
    
    const[dishes,setdishes] = useState()
    const[data0,] = useRestrauntMenu(resid)
    const data1 = data0.slice(1)
    setdishes(data1?.card?.card?.itemCards)
    return dishes;
}