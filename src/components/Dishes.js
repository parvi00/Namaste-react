import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useRestrauntMenu } from '../hooks/useRestrauntMenu';
import Shimmer from './Shimmer';
const Dishes = () => {
  const { resid } = useParams();

  const [itemCards,setitemCards] = useState([])
  const [data1,] = useRestrauntMenu(resid)
  setitemCards(data1[1]?.card?.card?.itemCards)
  console.log(data1[1]?.card?.card?.itemCards[0].card?.info?.name)

  return itemCards?.length !== 0 && (
    itemCards?.map((x) => {return(<h1>{x.card?.info?.name}</h1>)})
  ) 
}

export default Dishes