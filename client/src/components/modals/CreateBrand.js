import React, {useState} from "react"; 
import {Modal, Button, Form} from "react-bootstrap";
import {createBrand} from "../../http/deviceAPI"
  

const CreateBrand = ({show, onHide}) => {
  
		const [value, setValue] = useState('')
    
    const addBrand = () => {
        createBrand({name: value}).then(data => { 
            setValue('')
            onHide()
       })
    }

  return (
		
		<Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
      >      
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         ДОДАТИ НОВИЙ ТИП
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control   
            value={value}
            onChange = {e => setValue(e.target.value)}
          placeholder={"уведіть назву типу"}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danget" onClick={onHide}>закрити</Button>
        <Button variant="outline-success" onClick={addBrand}>добавить</Button>

      </Modal.Footer>
    </Modal>

  
  );
}

export default CreateBrand;
