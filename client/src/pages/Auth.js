import React, {useContext, useState} from "react";
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import Row from "react-bootstrap/Row";
import {REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {registration, login} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";


const Auth = observer(() => {
	const {user} = useContext(Context)
	const location = useLocation()
   	const history = useHistory()

    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
    	try {
    		let data;
    		if (isLogin) {
    			data = await login(email, password);

    		} else {
    			data = await registration(email, password);
	    	}
    		user.setUser(user)
    		user.setIsAuth(true)
    		history.push(SHOP_ROUTE)
    	} catch (e) {
    		alert(e.response.data.message)
    	}
    

    }

  return (
    <div>
    <Container
    	className="d-flex justify-content-center align-items-center"
    	style={{height: window.innerHeight - 54}}
    	>
    	<Card style={{width: 600}} className="p-5">
    		<h2 className="m-auto">Авторизація</h2>
			<Form className="d-flex flex-column">
			<Form.Control
				className="mt-3"
                placeholder="Введите ваш email..."
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
			<Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
			{isLogin ?
			<div>
			нема акаунта? <NavLink to={REGISTRATION_ROUTE}>зареїструватися</NavLink>
			</div>
			:
			<div>
			єсть акаунт? <NavLink to={LOGIN_ROUTE}>воїдітє</NavLink>
			</div>

		}
	 	  <Button
            variant={"outline-success"}
            onClick={click}
            >
            {isLogin ? 'Войти' : 'Регистрация'}
          </Button>
	 	  	</Row>

    		</Form>
    	</Card>

    	<Form>

    	</Form>
    </Container>
    Auth
    </div>


  );
})

export default Auth;
