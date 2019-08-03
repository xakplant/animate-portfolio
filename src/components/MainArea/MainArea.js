import React, { Component, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Sidebar from '../Siebar/Sidebar';
import PageCover from '../PageCover/PageCover';
import './style.css';

const CalcStrLenght = lazy(()=>(import('../CalcStrLenght/CalcStrLenght')));
const StringsComponent = lazy(()=>(import('../StringsComponent/StringsComponent')));

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
                            <PageCover>   
                                <Route exact path='/' component={(()=>(<div><h1>Главная</h1></div>))} />
                                <Route path='/calc-str-lenght' component={(()=>(<CalcStrLenght/>))} />
                                <Route path='/strings' component={(()=>(<StringsComponent/>))} />
                                
                            </PageCover>
                        </Switch>
                    </Router>                    
                </Row>
            </Container>
        );
    }
}