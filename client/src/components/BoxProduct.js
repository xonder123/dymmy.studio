import React, {useState,  useEffect} from "react";
import {useParams} from 'react-router-dom';
import {fetchOneDevice} from "../http/deviceAPI";
import img from "../assets/T-shirts.JPG";
import Button from 'react-bootstrap/Button';

const BoxProduct = () => {

const [device, setDevice] = useState({info: []})
  const {id} = useParams()

  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data))
  }, []) 






  return (
    <div className="sitebar-img" > 
          <div className="ty-scroller-list__item">
            <img className="T-shirts-img2"  src={img} />
            <div className="menu-prise">
              <Button variant="outline-success">КУПИТИ</Button>

            </div>
          </div>

            <div className="ty-scroller-list__item">
            <BoxProduct />
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

  );
}

export default BoxProduct;
