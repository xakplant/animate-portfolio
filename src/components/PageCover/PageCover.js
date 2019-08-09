import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './style.css';

export default class PageCover extends Component{
    render(){
        return(
            <Col className="pagecover">
                {this.props.children}
            </Col>
        )
    }
}