import React, {useState, useContext, useEffect} from "react";
import {BrowserRouter} from 'react-router-dom';
import {observer} from "mobx-react-lite"; 
import Col from "react-bootstrap/Col";
import DeviceList from "../components/DeviceList";
import {Context} from "../index";
import {fetchTypes} from "../http/deviceAPI";
import {fetchBrand} from "../http/deviceAPI";
import {fetchDevices} from "../http/deviceAPI";
 
import Pages from "../components/pages";

const T_shirts = observer(() => {
	const {device} = useContext(Context)

   
    useEffect( () => {
		fetchDevices(device.page, 10).then(data => {
			device.setDevices(data.rows)
			device.setTotalCount(data.count)
		})

    }, [device.page,])


	return (
		<div className="container-goods" >
				
    			<DeviceList/>

    			<Pages/>
  				</div>

  				

  );
});
 
export default T_shirts;
