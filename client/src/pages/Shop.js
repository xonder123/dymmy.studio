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
 import {INDEVIDUAL_ROUTE} from "../utils/consts";
 

import BoxProduct from "../components/BoxProduct"


const Shop = observer(() => { 
	const {device} = useContext(Context)
  	const history  = useHistory()

	const devices = useState()

	useEffect(() => {
		fetchTypes().then(data => device.setTypes(data))
		fetchBrand().then(data => device.setBrands(data))
		fetchDevices().then(data => device.setDevices(data.rows))
 
	}, [])



  	return ( 
 				

  			<div className="Container" >
  					<video className="bg-video" autoPlay loop muted >
   						<source  src={ssss}  type='video/mp4' />
					</video>
  				<div  className="sitebar" > 
	  			
  					<h2 className="sitebar-text">Вітаємо у нашому ательє одягу для жінок! Тут ви знайдете найкращі вироби для вашого гардероба, створені найталановитішими дизайнерами. Наші моделі об'єднують сучасні тенденції, вишуканість і комфорт, щоб кожна жінка почувалася неперевершено.</h2>
  				  	
  					<div className="individual-order">
  				  		<button className="BUY-BUTTON" onClick={() => history.push(INDEVIDUAL_ROUTE)}>індивідуальне замовлення</button>
  				  	</div>

  				</div>

  		<div className="sitebar-content">
  				<h1 className="text-sitebar">ТОП ПРОДАЖУ</h1>
  				<div className="sitebar-img" > 
          	<div className="ty-scroller-list__item">
            	<img className="T-shirts-img2" src={img}/>
            <div className="menu-prise">
              	<Button variant="outline-success">КУПИТИ</Button>

            </div>
          </div>

             <div className="ty-scroller-list__item">
            <img className="T-shirts-img2"  src={img} />
            <div className="menu-prise">
              <Button variant="outline-success">КУПИТИ</Button>

            </div>
          </div>
          
          <div className="ty-scroller-list__item">
            <img className="T-shirts-img2"  src={img} />
            <div className="menu-prise">
              <Button variant="outline-success">КУПИТИ</Button>

            </div>
          </div>
          <div className="ty-scroller-list__item">
            <img className="T-shirts-img2"  src={img} />
            <div className="menu-prise">
              <Button variant="outline-success">КУПИТИ</Button>

          </div>
        </div>
    </div>
 </div>

		

				
  			<div className="individual-tailoring">
  				<div className="box-text">		
  						<h3 className="text-tailoring">Dummy.studio - Пропонує високоякісний одяг, виготовлений на замовлення відповідно до ваших індивідуальних потреб. Наші досвідчені кравці працюють з вами, щоб розробити та створити ідеальний одяг для будь-якого випадку. Будь то урочиста подія, ділова зустріч чи вечірня прогулянка містом, ми гарантуємо ідеальну посадку та унікальний стиль. Ми використовуємо лише найкращі тканини та матеріали, щоб забезпечити бездоганну обробку. Наша команда кравців прагне втілити ваше бачення в життя. </h3>
							<Button  className="Button-individual-orders" variant="outline-success">Зробити індивідуальне замовлення</Button>

				</div>	
						<img className="dress-img"  src={dress} />

  			</div>

			<h1 className="text-sitebar">ТОВАРИ ІЗ СКИДКАМИ</h1>
				<div className="sitebar-img" > 
					<div className="ty-scroller-list__item">
						<img className="T-shirts-img2"  src={img} />
						<div className="menu-prise">
							<Button variant="outline-success">КУПИТИ</Button>

						</div>
					</div>

						<div className="ty-scroller-list__item">
						<img className="T-shirts-img2"  src={img} />
						<div className="menu-prise">
							<Button variant="outline-success">КУПИТИ</Button>

						</div>
					</div>
					<div className="ty-scroller-list__item">
						<img className="T-shirts-img2"  src={img} />
						<div className="menu-prise">
							<Button variant="outline-success">КУПИТИ</Button>

						</div>
					</div>
					<div className="ty-scroller-list__item">
						<img className="T-shirts-img2"  src={img} />
						<div className="menu-prise">
							<Button variant="outline-success">КУПИТИ</Button>



						</div>

					</div>

				</div>


				<div className="text-center">
					<Button variant="outline-success">ДИВИТИСЯ ВСЕ</Button>
  				</div>
  				

  			<div className="footer" >
			
  				</div>

  			</div>



  		

  );
})

export default Shop;
