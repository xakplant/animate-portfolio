import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './style.css';

export default class PageCover extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Col className="pagecover">
                {this.props.children}
            </Col>
        )
    }
}