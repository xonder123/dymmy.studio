import React, {useContext} from "react";
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Form} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Container} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, SHIRTS_ROUTE} from "../utils/consts";
import NavLink from "react-bootstrap/NavLink";
import logo from "../assets/logo.png";
import icons from "../assets/icons.png";


const NavBar = observer( () => {
	const {user} = useContext(Context)
  const history  = useHistory()

  const logOut = () => { 
    user.setUser({})
    user.setIsAuth(false)
  } 
  

  return (
        <div className="header">

                <div className="NavBar">

                    <img className="heder-logo-NB" src={logo} onClick={() => history.push(SHOP_ROUTE)}/>
                    
                </div>
            <div className='item-panel'>
            <div className="dropdown">
              <div className="panel">
                <button className="mainmenubtn">Главное меню</button>
                <img className="icon-panel" src={icons}/>
        </div>
            <div className="dropdown-child">
                <a href="http://www.вашдомен.ru/page1.html">Подраздел 1</a>
               <div className="item-menu-box">
                    <button className="item-menu-ss" id="menu">
                        <span className="box-menu-panel">
                            Футболки та топи
                         </span>
                    </button>   
                </div>
                <div className="item-menu-box">
                    <button className="item-menu-ss" id="menu">
                        <span className="box-menu-panel">
                             Блузи та сорочки
                        </span>
                    </button>   
                </div>
                <div className="item-menu-box">
                    <button className="item-menu-ss" id="menu" >
                        <span className="box-menu-panel">
                            Светри-комбінації
                        </span>
                    </button>           
                </div>

                <div className="item-menu-box">
                    <button className="item-menu-ss" id="menu">
                        <span className="box-menu-panel">
                            в'язані речі
                        </span>
                    </button>
                </div>

            </div>
         </div>

            <div  className="item-menu-box" onClick={() => history.push(SHIRTS_ROUTE)}>
                <button className="item-menu-ss" id="menu"  >
                    <span className="box-menu">
                        пляття
                    </span>
                </button>
            </div>
            
            <div className="item-menu-box">
                <button className="item-menu-ss" id="menu"  >
                    <span className="box-menu">
                       Костюми
                    </span>
                </button>            
            </div>
           

            <div className="item-menu-box">
                <button className="item-menu-ss" id="menu">
                    <span className="box-menu">
                        Спідниці
                    </span>
                </button>   
            </div>
            <div className="item-menu-box">
               <button className="item-menu-ss" id="menu">
                    <span className="box-menu">
                        Аксессуари
                    </span>
                </button>   
            </div>
            <div className="item-menu-box">
                <button className="item-menu-ss" id="menu">
                    <span className="box-menu">
                        Брюки
                    </span>
                </button>   
            </div>
            <div className="item-menu-box">
                <button className="item-menu-ss" id="menu">
                    <span className="box-menu">
                        Кофти
                    </span>
                </button>   
            </div>
            <div className="item-menu-box">
                 <button className="item-menu-ss" id="menu">
                    <span className="box-menu">
                        Жакєти
                    </span>
                </button>   
            </div>
           




            </div>

      </div>
            
    



  );
})

export default NavBar;
