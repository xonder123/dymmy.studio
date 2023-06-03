import React, {useState} from "react"; 
import {Container, Button,} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateDevice from "../components/modals/CreateDevice";
import CreateSuite from "../components/modals/CreateSuite";

const Admin = () => {
	const [brandVisible, setBrandVisible] = useState(false)
 	const [typeVisible, setTypeVisible] = useState(false)
	const [deviceVisible, setDeviceVisible] = useState(false)
  const [SuitsVisible, setSuitsVisible] = useState(false)


  return (
    <Container className="d-flex flex-column">
   		<Button onClick={() => setTypeVisible(true)}  variant={"outline-dark"} className="mt-4">Додати тип</Button>
   		<Button onClick={() => setBrandVisible(true)}  variant={"outline-dark"} className="mt-4">Додати бренд</Button>
   		<Button onClick={() => setDeviceVisible(true)}  variant={"outline-dark"} className="mt-4">Додати устройство</Button>
      <Button onClick={() => setSuitsVisible(true)}  variant={"outline-dark"} className="mt-4">Додати костюм</Button>

   		<CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
   		<CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
   		<CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
      <CreateSuite show={SuitsVisible} onHide={() => setSuitsVisible(false)} />
    </Container >


  );
}

export default Admin;
