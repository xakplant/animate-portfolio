import React, { Component } from 'react';
import Helmet from "react-helmet";


const normalizeText = (string)=>{
    const attPrdl = string.split('. ');
    let newString ='';
    attPrdl.map((s, i, a)=>{
        if(s.length > 0){
            let newI = s[0].toUpperCase() + s.toLowerCase().slice(1);
            const concat = ((a.length - 1) === i) ? ""  : ". ";
            newI = newI + concat
            newString += newI;
        }
        return s;
    });
    return newString
  }



export default class CapsNormalize extends Component{
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.resultRef = React.createRef();
    }
    handleInput(event){        
        this.resultRef.current.value = normalizeText(event.target.value);
    }
    render(){
        return(
            <div>
                <Helmet>
                    <title>Сделать из капса нормальный текст онлайн</title>
                    <meta 
                        name="description" 
                        content="Инструмент для преобразования КАПСА в обычный текст с учётом заглавных букв в предложении онлайн. Заходите!" 
                    />
                </Helmet>
                <h1>Нормализация текста из капса</h1>
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
                <p>Если вам нужно преобразовать из капса несколько символов или большой текст при этом сохранить
                    первые буквы предложения большими то этот инструменты для вас.
                </p>
                <h2>Пример</h2>
                <div className="row">
                    <div className="col">
                    <h4 className="lead text-center">Ввод</h4>
                    ДАВНО ВЫЯСНЕНО, ЧТО ПРИ ОЦЕНКЕ ДИЗАЙНА И КОМПОЗИЦИИ ЧИТАЕМЫЙ ТЕКСТ МЕШАЕТ СОСРЕДОТОЧИТЬСЯ. LOREM IPSUM ИСПОЛЬЗУЮТ ПОТОМУ, ЧТО ТОТ ОБЕСПЕЧИВАЕТ БОЛЕЕ ИЛИ МЕНЕЕ СТАНДАРТНОЕ ЗАПОЛНЕНИЕ ШАБЛОНА, А ТАКЖЕ РЕАЛЬНОЕ РАСПРЕДЕЛЕНИЕ БУКВ И ПРОБЕЛОВ В АБЗАЦАХ, КОТОРОЕ НЕ ПОЛУЧАЕТСЯ ПРИ ПРОСТОЙ ДУБЛИКАЦИИ "ЗДЕСЬ ВАШ ТЕКСТ.. ЗДЕСЬ ВАШ ТЕКСТ.. ЗДЕСЬ ВАШ ТЕКСТ.." МНОГИЕ ПРОГРАММЫ ЭЛЕКТРОННОЙ ВЁРСТКИ И РЕДАКТОРЫ HTML ИСПОЛЬЗУЮТ LOREM IPSUM В КАЧЕСТВЕ ТЕКСТА ПО УМОЛЧАНИЮ, ТАК ЧТО ПОИСК ПО КЛЮЧЕВЫМ СЛОВАМ "LOREM IPSUM" СРАЗУ ПОКАЗЫВАЕТ, КАК МНОГО ВЕБ-СТРАНИЦ ВСЁ ЕЩЁ ДОЖИДАЮТСЯ СВОЕГО НАСТОЯЩЕГО РОЖДЕНИЯ. ЗА ПРОШЕДШИЕ ГОДЫ ТЕКСТ LOREM IPSUM ПОЛУЧИЛ МНОГО ВЕРСИЙ. НЕКОТОРЫЕ
                     ВЕРСИИ ПОЯВИЛИСЬ ПО ОШИБКЕ, НЕКОТОРЫЕ - НАМЕРЕННО (НАПРИМЕР, ЮМОРИСТИЧЕСКИЕ ВАРИАНТЫ)
                    </div>
                    <div className="col">
                    <h4 className="lead text-center">Результат</h4>
                    Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.  lorem ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "здесь ваш текст.  здесь ваш текст.  здесь ваш текст. " многие программы электронной вёрстки и редакторы html используют lorem ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.  за прошедшие годы текст lorem ipsum получил много версий.  некоторые
                     версии появились по ошибке, некоторые - намеренно (например, юмористические варианты)
                    </div>
                </div>
            </div>
        );
    }
}