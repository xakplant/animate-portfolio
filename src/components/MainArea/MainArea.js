import React, { Component, lazy } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Sidebar from '../Siebar/Sidebar';
import PageCover from '../PageCover/PageCover';
import './style.css';

const CalcStrLenght = lazy(()=>(import('../CalcStrLenght/CalcStrLenght')));
const StringsComponent = lazy(()=>(import('../StringsComponent/StringsComponent')));
const CapsNormalize = lazy(()=>(import('../CapsNormalize/CapsNormalize')));
const TableToArray = lazy(()=>(import('../TableToArray/TableToArray')));
const TableToObjectsArray = lazy(()=>(import('../TableToObjectsArray/TableToObjectsArray')));
const HtmlScreen = lazy(()=>(import('../HtmlScreen/HtmlScreen'))); 
const VariablesToCamelCase = lazy(()=>(import('../VariablesToCamelCase/VariablesToCamelCase')));

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
                <Helmet
                htmlAttributes={{"lang": "ru"}} 
                titleTemplate="%s - Tools Xakplant"
                ></Helmet>
                <Row className="mainarea__row">                                                        
                    <Router>
                        <Sidebar/> 
                        <Switch>
                            <PageCover>   
                                <Route exact path='/' component={(()=>(<div>
                                    <Helmet>
                                        <title>Главная</title>
                                        <meta name="description" content="Инструменты для работы с контемном для SEO-специалистов и программистов" />
                                    </Helmet>                                    
                                    <h1>Главная</h1>
                                    <div className="row">
                                        <div className="col-12">
                                            Посмотрите в боковую колонку! Там несколько удобныйх инструментов
                                            для работы с контентом.
                                        </div>
                                        <div className="col-12">
                                            Основной сайт - <a href="https://xakplant.ru" rel="noopener noreferrer" target="_blank">Xakplant.ru</a>
                                        </div>
                                    </div>
                                </div>))} />
                                <Route path='/calc-str-lenght' component={(()=>(<CalcStrLenght/>))} />
                                <Route path='/strings' component={(()=>(<StringsComponent/>))} />
                                <Route path='/caps-normalize' component={(()=>(<CapsNormalize/>))}/>
                                <Route path='/table-to-array' component={(()=>(<TableToArray/>))}/>
                                <Route path='/table-to-objects-array' component={(()=>(<TableToObjectsArray/>))}/>
                                <Route path='/html-screen' component={(()=>(<HtmlScreen/>))}/>
                                <Route path='/variables-to-camelCase' component={()=>(<VariablesToCamelCase/>)}/>
                            </PageCover>
                        </Switch>
                    </Router>                    
                </Row>
            </Container>
        );
    }
}