
import React, { Component } from 'react';
import escape from 'lodash.escape';
import Helmet from "react-helmet";



export default class HtmlScreen extends Component{
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.resultRef = React.createRef();
    }
    handleInput(event){        
        this.resultRef.current.value = escape(event.target.value);
    }
    render(){
        return(
            <div>
                <Helmet>
                    <title>Экранировать html онлайн</title>
                    <meta 
                        name="description" 
                        content="Инструмент для экранирования html онлайн. Заходите!" 
                    />
                </Helmet>
                <h1>Экранировать html онлайн</h1>
                <div className="form-group">
                    <label>Введите сюда текст</label>
                    <textarea 
                        id="textarea" 
                        area-label="textarea" 
                        className="form-control" 
                        onInput={this.handleInput} 
                        placeholder="Введите текст сюда"
                    ></textarea>
                </div>
                <h2>Результат</h2>
                <div className="form-group">
                    <label>Введите сюда текст</label>
                    <textarea
                        ref={this.resultRef} 
                        id="result" 
                        area-label="textarea" 
                        className="form-control" 
                        readOnly
                    ></textarea>
                </div>
                <h2>Описание</h2>
                <p>
                    Экранирование html
                </p>
                <h2>Пример</h2>
                <div className="row">
                    <div className="col">
                    <h4 className="lead text-center">Ввод</h4>
                        <div>&lt;div class=&quot;col-lg-12&quot;&gt;Привет мир&lt;/div&gt;</div>
                    </div>
                    <div className="col">
                    <h4 className="lead text-center">Результат</h4>               
                        <pre>{('&lt;div class&#x3D;&quot;col-lg-12&quot;&gt;Привет мир&lt;&#x2F;div&gt;')}</pre>          
                   </div>
                </div>
            </div>
        );
    }
}