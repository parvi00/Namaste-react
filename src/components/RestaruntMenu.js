import React from "react";
import { useParams } from "react-router-dom";
import { useRestrauntMenu, } from "../hooks/useRestrauntMenu";
import Dishes from "./Dishes";

const RestaruntMenu = () => {
  const { resid } = useParams();

  const[data1,details]  = useRestrauntMenu(resid)
  
  
  
  // const dishes = useResDishes(resid)
  // console.log(dishes)


  console.log(data1.slice(1))
  // console.log(details)
  // const newresdata = resdata.slice(1)
  // .card.card.itemCards[0]
  // console.log(newresdata[0]?.card?.card?.itemCards[0]?.card?.info?.name)

  return (
    <>
    <h1 className="nores">{details.name}..........</h1>
    <Dishes/>
    </> 
  );
};

export default RestaruntMenu;




