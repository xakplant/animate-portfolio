import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Sidebar from '../Siebar/Sidebar';
import './style.css';
import DataTable from '../DataTable/DataTable';
import ImageResizer from '../ImageReziser/ImageResizer';



export default class MainArea extends Component{
    constructor(props){
        super(props);
        this.containerRef = React.createRef();
    }
    componentDidMount(){      
        this.containerRef.current.classList.add('visible');
    }
    render(){
        return(
            <Container ref={this.containerRef} className="mainarea" fluid={true}>
                <Row className="mainarea__row">                                       
                    <Router>
                    <Sidebar/> 
                        <Switch>
                            <Route exact path='/' component={(()=>(<DataTable/>))} />
                            <Route path='/image-crop' component={(()=>(<ImageResizer/>))} />
                        </Switch>
                    </Router>
                </Row>
            </Container>
        );
    }
}