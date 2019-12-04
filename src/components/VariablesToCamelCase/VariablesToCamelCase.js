import React, { Component } from 'react';
import camelCase from 'lodash.camelcase';
import Helmet from "react-helmet";

export default class VariablesToCamelCase extends Component{
    constructor(props){
        super(props);
        this.state = { 
            value: ''
        }
    }
    render(){
        return(
            <div>
                <Helmet>
                    <title>Переменная в camelCase online</title>
                    <meta 
                        name="description" 
                        content="Инструмент для получения переменных в camelCase. Заходите!" 
                    />
                </Helmet>
                <h1>Переменная в camelCase</h1>
                <p>Хорошо подходит для получения переменных в camelCase и наименование стилей в js-нотации</p>
                <div>
                    <h2>Ввод</h2>
                    <input className={`form-control mb-4`} onChange={ (event)=>{ this.setState({ value: camelCase(event.target.value) }) } }/>
                </div>
                <div>
                    <h2>Результат</h2>
                    <input className={`form-control`} readOnly value={this.state.value}/>
                </div>
            </div>
        )
    }
}