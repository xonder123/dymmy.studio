import React from "react";
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";


const DeviceItem = ({device}) => {
    const history = useHistory()
    return (

        <div className="box-goods" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <div className="goods">
                <img className="img-goods"  src={process.env.REACT_APP_API_URL_NAME +  device.img}/>
                <div>
                <h4> {device.name} </h4>
                </div>
                <h3>{device.price} грн</h3>

            
            </div>

        </div>,

        <div className="box-goods" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <div className="goods">
                <img className="img-goods"  src={process.env.REACT_APP_API_URL_NAME +  device.img}/>
                <div>
                <h4> {device.name} </h4>
                </div>
                <h3>{device.price} грн</h3>

            
            </div>

        </div>




    );
};

export default DeviceItem;

