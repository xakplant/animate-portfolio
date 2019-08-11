
import React, { Component } from 'react';
import escape from 'lodash.escape';
import Helmet from "react-helmet";



const tableToArray = (string)=>{
    const arr = string.split(/\n/);
   
    arr.map((a, i, arr)=>{
      arr[i] = a.split(/\t/);
      return a;
    });
    //console.log(arr);
    let value = "[";
    value += "\n";
    arr.map((it, ii, arrr)=>{
      it.map((a, i, arr)=>{
        if(i === 0){
          value += "\t";
          value += "[";        
        }
        value += '"'+escape(a).replace('\\', '\\\\')+'"';
        if(i !== (arr.length - 1)){
          value += ", ";
        }
        if(i === (arr.length - 1)){
          value += "]";
        }
        return a;
      })
      if(ii !== (arrr.length - 1)){
        value += ",";
        value += "\n";
      }
      return value;
    });
    
    value += "\n";
    value +="]";
    return value;
  }



export default class TableToArray extends Component{
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.resultRef = React.createRef();
    }
    handleInput(event){        
        this.resultRef.current.value = tableToArray(event.target.value);
    }
    render(){
        return(
            <div>
                <Helmet>
                    <title>Сделать из таблицы массив массивов онлайн</title>
                    <meta 
                        name="description" 
                        content="Инструмент для преобразования таблицы в массив массивов онлайн. 
                        Полезен для представления данных js-библиотекам типа DataTable или обрабтки с помощью PHP. Заходите!" 
                    />
                </Helmet>
                <h1>Из таблицы в массив</h1>
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
                    Преобразование таблицы в массив
                </p>
                <h2>Пример</h2>
                <div className="row">
                    <div className="col">
                    <h4 className="lead text-center">Ввод</h4>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
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
                    <div className="col">
                    <h4 className="lead text-center">Результат</h4>
                    <pre className="code">
                    [ <br/>
                        &nbsp; [5, 6, 7, 8], <br/>
                        &nbsp; [4, 3, 15, 7], <br/>
                        &nbsp; [22, 19, 11, 43] <br/>
                    ]      
                    </pre>
                   </div>
                </div>
            </div>
        );
    }
}