import React, { Component } from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import ImgDropAndCrop from './ImgDropAndCrop';
import './style.css';

export default class ImageResizer extends Component{
    render(){
        return(
                <Col sm={9} className="imgcrop-area p-4">
                    <h1>ImageResizer</h1>
                    <ImgDropAndCrop/>
                </Col>
        );
    }
}