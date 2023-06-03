import React, {useContext, getState, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchTypes} from "../http/deviceAPI";
import {fetchBrand} from "../http/deviceAPI";
import {fetchDevices} from "../http/deviceAPI";
import img from "../assets/T-shirts.JPG";
import {useHistory} from "react-router-dom"
import {REGISTRATION_ROUTE} from "../utils/consts";
import Button from 'react-bootstrap/Button';
import dress from "../assets/dress.jpg";
import DeviceList from "../components/DeviceList";
import Col from "react-bootstrap/Col";
import video  from "../video/videors.mp4";
import ssss  from "../assets/ssss.mp4";
import videos  from "../assets/video.mp4";
  

import BoxProduct from "../components/BoxProduct"


const PegesIndevidual = observer(() => { 

	



  	return (
 				

  			<div className="Container-peges-idevidual" >
  				<h1 className="text-pg-in">Бажаєте зробити індевідуальне замовлення зателефонуйте на нашу телефону лінію  +444444444444</h1> 

  			</div>



  		

  );
})

export default PegesIndevidual;
