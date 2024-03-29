import React from 'react'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from 'react-router';
import {IoBedOutline} from 'react-icons/io5';
import {TbBath} from 'react-icons/tb';
import {BiArea} from 'react-icons/bi';
import {MdOutlinePriceCheck} from 'react-icons/md';




function HouseManageCard( {house} ) {
   
  return (
    <Card style={{ width: "20rem" }}>
    
       <Card.Img style={{ height:"250px", objectFit:"cover" }} variant="top" src={house.picture[0]} /> 
      <ListGroup className="list-group-flush">

      <ListGroup.Item className="">Sell/Rent: {house.sellRent}</ListGroup.Item>
      <ListGroup.Item className="">bds: {house.bedRooms}</ListGroup.Item>
        <ListGroup.Item className="">ba:{house.baths}</ListGroup.Item>
        <ListGroup.Item className="">{house.houseSize}</ListGroup.Item>
        <ListGroup.Item className="">$ {house.price}</ListGroup.Item>
        
      <ListGroup className="list-group-houseDetails">    
        <ListGroup.Item className="">Address: {house.address.street}</ListGroup.Item>
        <ListGroup.Item className="">Neighborhood: {house.address.neighborhood}</ListGroup.Item>
        <ListGroup.Item className="">City: {house.address.city}</ListGroup.Item>
        <ListGroup.Item className="">State: {house.address.state}</ListGroup.Item>
        <ListGroup.Item className="">Zip code: {house.address.zipCode}</ListGroup.Item>
        <ListGroup.Item className="">Year: {house.builtYear}</ListGroup.Item>

      </ListGroup>
       </ListGroup>

    </Card>
  
  )
}
  
export default HouseManageCard