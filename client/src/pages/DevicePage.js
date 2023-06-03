import React, {useState, useEffect, } from "react";
import {Col, Container, Image, Row, Card, Button} from "react-bootstrap";
import bigStar from '../assets/bigStar.png';
import {useParams} from 'react-router-dom';
import {fetchOneDevice} from "../http/deviceAPI";
import Carousel from 'react-bootstrap/Carousel';
import instagram from "../assets/instagram.png";


const DevicePage = () => {
	const [device, setDevice] = useState({info: []})
	const {id} = useParams()

	useEffect(() => {
		fetchOneDevice(id).then(data => setDevice(data))
	}, []) 



 


  return (
   <div className="container">


   		<div className="product-container">
   		    <div className="img-container">
 			<img className="product-img" src={process.env.REACT_APP_API_URL_NAME + device.img}/>
 			<img className="product-img" src={process.env.REACT_APP_API_URL_NAME + device.imgnls}/>
 			<img className="product-img" src={process.env.REACT_APP_API_URL_NAME + device.imgnlss}/>
 			<img className="product-img" src={process.env.REACT_APP_API_URL_NAME + device.imgnlsll}/>
 			<img className="product-img" src={process.env.REACT_APP_API_URL_NAME + device.imgnlssss}/>

<div className="description">
<div className="d-flex flex-column m-3">
    	{device.info.map(info =>
    		<div key={info.id}>
    			{info.title}: {info.description}

    			</div>

				)}

		</div>

	</div>
</div>
			<div className="slide">
				  <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
         src={process.env.REACT_APP_API_URL_NAME + device.img}
          alt="First slide"
        />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
         src={process.env.REACT_APP_API_URL_NAME + device.imgnlss}
          alt="Second slide"
        />

        <Carousel.Caption>
         
         
        </Carousel.Caption>
      </Carousel.Item>

<Carousel.Item>
        <img
          className="d-block w-100"
         src={process.env.REACT_APP_API_URL_NAME + device.imgnlsll}
          alt="Second slide"
        />

        <Carousel.Caption>
          
         
        </Carousel.Caption>
      </Carousel.Item>
			<Carousel.Item>
        <img
          className="d-block w-100"
         src={process.env.REACT_APP_API_URL_NAME + device.imgnlssss}
          alt="Second slide"
        />

        <Carousel.Caption>
          
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
         src={process.env.REACT_APP_API_URL_NAME + device.imgnls}
          alt="Second slide"
        />

        <Carousel.Caption>
          
         
        </Carousel.Caption>
      </Carousel.Item>




     
     
   
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.REACT_APP_API_URL_NAME + device.img}
          alt="Third slide"
        />

        <Carousel.Caption>
      
       
           
    
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
			</div>



   		
   				<div className="product-bloc-title">
   					<h1 className="product-name">{device.name}</h1>
    		<h2 className="product-price">{device.price} грн</h2>
	
   			
   		




				<button className="bay-button"> 
					Замовити
				</button>

    		</div>
		</div>
   	


	</div>

  );
}

export default DevicePage;
