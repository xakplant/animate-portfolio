import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Helmet from "react-helmet";

export default class StringsComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            separator: ', ',
            result: '',
            input: ''
        }
        
        this.handleInput = this.handleInput.bind(this);
        this.handleInputSeparator = this.handleInputSeparator.bind(this);
    }

    handleInput(event){
        this.setState({
            input: event.target.value,
            result: event.target.value.replace(/\n/g, this.state.separator)
        })
    }
    handleInputSeparator(event){
        this.setState({
            separator: event.target.value,
            result: this.state.input.replace(/\n/g, event.target.value)
        });
    }
    render(){
        return(
            <div>
                <Helmet>
                    <title>Соединить строки из таблицы в строку с разделителем</title>
                    <meta 
                        name="description" 
                        content="Инструмент для преобразования колонки таблицы в строку с разделителями.
                        Будет полезен SEO-специалистам для соединения списка ключей в сроку с запятыми. Заходите!" 
                    />
                </Helmet>
                <h1>Сервис "Строки"</h1>
                <p>Если нужно преобразовать несколько строк из таблицы exel в одну строку 
                    то воспользуйтесь формой указанной ниже. Не знали как быстро преобразовать 
                    несколько строк в одну?! Тогда эта функция для вас.Чтобы получить результат 
                    просто введите текст в текстовую область.
                </p>
                <div className="form-group">
                    <label>Вставьте нужную колонку из таблицы</label>
                    <textarea 
                        id="data" 
                        area-label="textarea" 
                        className="form-control"
                        onInput={this.handleInput}
                        defaultValue={this.state.input}                        
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Результат</label>
                    <textarea 
                        id="result" 
                        area-label="textarea" 
                        className="form-control" 
                        value={this.state.result}
                        readOnly
                    ></textarea>
                </div>
                <h2>Разделитель</h2>
                <p>Если вам нужне другой разделитель то введите его в поле ниже</p>
                <div className="form-group">
                    <label>Введите разделитель</label>
                    <input 
                        id="separator" 
                        area-label="textarea" 
                        className="form-control" 
                        defaultValue={this.state.separator}
                        onChange={this.handleInputSeparator}
                    />
                </div>
                <div className="d-flex alert alert-primary" role="alert">
                    <svg className="i-info float-left" viewBox="0 0 32 32" width="48" height="48" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M16 14 L16 23 M16 8 L16 10"></path>
                        <circle cx="16" cy="16" r="14"></circle>
                    </svg> <span className="align-self-center lead pl-2">Как это работает</span>
                </div>
                <p>1. Вставьте скопированный текст из вашей таблицы в текстовое воле</p>
                <p>2. После первого шага в окне результата появится строка с вашими элементами таблицы, разделенными запятыми</p>
                <p>3. Копируйте результат и вставляйте нужные вам фрегменты записей</p>
                <div className="d-flex alert alert-primary" role="alert">
                    <svg className="i-alert" viewBox="0 0 32 32" width="48" height="48" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M16 3 L30 29 2 29 Z M16 11 L16 19 M16 23 L16 25"></path>
                    </svg> <span className="align-self-center lead pl-2">Не вставляйте слишком много текста, это может замедлить работу вашего компьютера</span>
                </div>
                <h3>Пример использования</h3>
                <Row>
                    <Col sm={6}>
                        <h4 className="lead text-center">Исходная таблица</h4>
                        <table className="table">
                            <tbody><tr>
                                <td>Маша</td>
                            </tr>
                            <tr>
                                <td>Катя</td>
                            </tr>
                            <tr>
                                <td>Лена</td>
                            </tr>
                        </tbody></table>
                    </Col>
                    <Col sm={6}>
                        <h4 className="lead text-center">Полученный результат</h4>
                        <p>Маша, Катя, Лена</p>
                    </Col>
                </Row>
            </div>
        );
    }
}