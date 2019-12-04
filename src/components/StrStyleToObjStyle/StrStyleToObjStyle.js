import React, { Component } from 'react';
import Helmet from "react-helmet";


function xakplStyleStringToStyleObject(customStyling){
    if(typeof(customStyling) === 'string'){
              if(customStyling.length !== 0){
                  const arrStyle = customStyling.trim().split(';').filter(e=>e.length !== 0).map((line)=>{
                      let result = Array.from(line.split(':')[0].matchAll(/-/g));
                      result.map((arr)=>{
                          line = Array.from(line).map((a, i)=>( (i === arr.index + 1) ? a.toUpperCase() : a )).join('');
                      });
                      line = [ line.split(':')[0].replace(/-/g, ''), line.slice(1).split(':').slice(1).join(':')].join(': ');
                      return line;
                  });
                  const rObj = {};
                  arrStyle.map((line)=>{
                      const a = line.split(':');
                      const name  = a[0].trim();
                      rObj[name] = a.slice(1).join(':').trim().toString();
                      return line;
                  });
                  return rObj;
              } else {
                  return {};
              }
          } else if(!Array.isArray(customStyling) && typeof(customStyling) === 'object'){
              return customStyling;
        } else {
            return {};
        }
    }

export default class StrStyleToObjStyle extends Component{
    constructor(props){
        super(props);
        this.state = { 
            value: ''
        }
    }

    handleOnChange = (value) =>{
        const result = JSON.stringify(xakplStyleStringToStyleObject(value)).replace(/"/g, '');
        this.setState({value: result});
    }

    render(){
        const {handleOnChange} = this;
        return(
            <div>
                <Helmet>
                    <title>Из строки стилей в объект стилей</title>
                    <meta 
                        name="description" 
                        content="Инструмент для получения объекта стилей из строки стилей. Заходите!" 
                    />
                </Helmet>
                <h1>Из строки стилей в объект стилей</h1>
                <p>Нужна для преобразования строки стилей в объект стилей для использования в JS</p>
                <div>
                    <h2>Ввод</h2>
                    <textarea className={`form-control mb-4`} onChange={ (event)=>{ handleOnChange(event.target.value) } }/>
                </div>
                <div>
                    <h2>Результат</h2>
                    <textarea className={`form-control`} readOnly value={this.state.value}/>
                </div>
            </div>
        )
    }
}