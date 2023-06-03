import React, {useContext, useState, useEffect} from "react"; 
import {Modal, Button, Form, Dropdown, Col, Row} from "react-bootstrap";
import {Context} from "../../index";
import {fetchTypes, fetchBrand, fetchDeviceslides} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import {createDevice} from "../../http/deviceAPI"

const CreateDevice = observer(({show, onHide}) => {
  const {device} = useContext(Context)
  const [info, setInfo] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  const [filen, setFilen] = useState(null)
  const [filew, setFilew] = useState(null)
  const [filef, setFilef] = useState(null)
  const [filek, setFilek] = useState(null)
 


  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }
  
  const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
      setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))

    }


    const addDevice =() => {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('price', `${price}`)
      formData.append('img', file)
      formData.append('imgnls', filen)
      formData.append('imgnlss', filew)
      formData.append('imgnlsll', filef)
      formData.append('imgnlssss', filek)

      formData.append('barandId', device.selectedBrand.id)
      formData.append('typeId', device.selectedType.id)
      formData.append('info', JSON.stringify(info))

      createDevice(formData).then(data => onHide())
    }

    const selectFile = e => {
      setFile(e.target.files[0])
    }
    const selectFilen = e => {
      setFilen(e.target.files[0])
    }

 const selectFilew = e => {
      setFilew(e.target.files[0])
    } 
    const selectFilef = e => {
      setFilef(e.target.files[0])
    }

     const selectFilek = e => {
      setFilek(e.target.files[0])
    }



  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrand().then(data => device.setBrands(data))
    fetchDeviceslides().then(data => device.setDeviceslides(data))

  }, [])



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
        <Form>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>{device.selectedType.name || "пибрати тип"}</Dropdown.Toggle>
            <Dropdown.Menu>{device.types.map(type =>
              <Dropdown.Item onClick={() => device.setSelectedType(type)} key={type.id}> {type.name}</Dropdown.Item>

            )} 
            </Dropdown.Menu>
          </Dropdown>

          

          <Dropdown className="mt-3">
            <Dropdown.Toggle>{device.selectedBrand.name || "пибрати brand"}</Dropdown.Toggle>
            <Dropdown.Menu>{device.brands.map(brands =>
              <Dropdown.Item onClick={() => device.setSelectedBrand(brands)} key={brands.id}> {brands.name}</Dropdown.Item>

            )} 
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control className="mt-3"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="уведіть назву устройства"
          />

          <Form.Control className="mt-3"
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            placeholder="уведіть стоімость устройства"
            type="number"
          />

      <Form.Control className="mt-3"
            type="file"
            onChange={selectFile}
          />
        <Form.Control className="mt-3"
            type="file"
            onChange={selectFilen}
          />

          <Form.Control className="mt-3"
            type="file"
            onChange={selectFilew}
          />

        <Form.Control className="mt-3"
            type="file"
            onChange={selectFilef}
          />

          <Form.Control className="mt-3"
            type="file"
            onChange={selectFilek}
          />


          <hr/>

          <Button variant={"autline-dark"} onClick={addInfo}>додати нове свойство</Button>
          {info.map(i => 
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control
                value={i.title}
                onChange={(e) => changeInfo('title', e.target.value, i.number)}
                placeholder="введите назву свойства"
                />
              </Col>

              <Col md={4}>
                <Form.Control
                value={i.description}
                onChange={(e) => changeInfo('description', e.target.value, i.number)}
                placeholder="введите опісаніє свойства"
                />
              </Col>

            



              <Col md={4}>
                <Button variant="outline-danger" onClick={() => removeInfo(i.number)}>удалити</Button>
              </Col>
            </Row>

            )}

       </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danget" onClick={onHide}>закрити</Button>
        <Button variant="outline-success" onClick={addDevice}>добавить</Button>

      </Modal.Footer>
    </Modal>

  
  );
})

export default CreateDevice
