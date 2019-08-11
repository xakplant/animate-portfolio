import React, { Component } from 'react';
import escape from 'lodash.escape';
import Helmet from "react-helmet";


const tableToObjectsArray = (string)=>{
    const arr = string.split(/\n/); 
    let result = [];
    //arr.pop();
    arr.map((a, i, arr)=>{
        arr[i] = a.split(/\t/);
        return a;
    }); 
    if(arr.length > 1){  
    const firstRow = arr[0];
    const dataRows = arr.slice(1);


    dataRows.map((item)=>{
            const obj = {};
            item.map((element, index, a)=>{
            obj[firstRow[index]] = escape(element);
            return element;
        });
        result.push(obj);
        return obj;
    });

    const resultString = JSON.stringify(JSON.parse(JSON.stringify(result)),null,2);
    return resultString;
    } 
    return '';
}



export default class TableToObjectsArray extends Component{
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.resultRef = React.createRef();
    }
    handleInput(event){        
        this.resultRef.current.value = tableToObjectsArray(event.target.value);
    }
    render(){
        return(
            <div>
                <Helmet>
                    <title>Сделать из таблицы массив объектов онлайн</title>
                    <meta 
                        name="description" 
                        content="Инструмент для преобразования таблицы в массив объектов. Создаёт валидный JSON с экранированным HTML. Заходите!" 
                    />
                </Helmet>
                <h1>Из таблицы в массив объектов</h1>
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
                    Преобразование таблицы в массив объектов
                </p>
                <h2>Пример</h2>
                <div className="row">
                    <div className="col-6">
                    <h4 className="lead text-center">Ввод</h4>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Заголовок 1</td>
                                    <td>Заголовок2</td>
                                    <td>Заголово3</td>
                                    <td>Заголовок4</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>15</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>22</td>
                                    <td>19</td>
                                    <td>11</td>
                                    <td>43</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-6">
                    <h4 className="lead text-center">Результат</h4>
                    <div readOnly className="code">
                            {
                                ("[{\"Заголовок 1\": \"4\",\"Заголовок2\": \"3\",\"Заголово3\": \"15\",\"Заголовок4\": \"7\"},{\"Заголовок 1\": \"22\",\"Заголовок2\": \"19\",\"Заголово3\": \"11\",\"Заголовок4\": \"43\"}]")
                            }
                    </div>
                   </div>
                </div>
            </div>
        );
    }
}