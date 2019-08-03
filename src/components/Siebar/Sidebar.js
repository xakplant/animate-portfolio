import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './style.css';



const links = [
    {
        title:"Главная страница",
        href:"/",
    },
    {
        title:"Длинна строки",
        href:"/calc-str-lenght",
    },
    {
        title:"Строки",
        href:"/strings"
    }
];

function CreateNav(){
    return(
        <Row>
                <ul className="sidebarnav">
                    {links.map((link)=>(
                        <li key={link.href} className="sidebarnav__list">
                            <Link className="sidebarnav__link" to={link.href} title={link.title}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
        </Row>
    );
}

class Sidebar extends Component{
    render(){
        return(
            <Col className="sidebar" sm={3}>
                <CreateNav/>
            </Col>
        );
    }
}

export default Sidebar;