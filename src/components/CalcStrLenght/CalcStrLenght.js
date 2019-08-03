import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';

export default class CalcStrLenght extends Component{
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            totalLenght:0,
            lenght: 0,
            words: 0
        };
    }
    handleInput(event){        
        this.setState({
            totalLenght: event.target.value.length,
            lenght: event.target.value.replace(/\s+/g,'').length,
            words: event.target.value.split(' ').length
        });
    }
    render(){
        const {
            totalLenght,
            lenght,
            words
        } = this.state;
        return(
            <div>
                <h1>Подсчёт количества символов в тексте</h1>
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
                <div className="data">
                    Количество символов: <Badge variant="primary">{totalLenght}</Badge>;  
                    без пробелов: <Badge variant="secondary">{lenght}</Badge>;
                    кол-во слов: <Badge variant="secondary">{words}</Badge>;
                </div>
                <p>Проверка длины символов в строке. Часто подобной функцией пользуются SEO-оптимизаторы для подбора отипального Title и Descripton</p>
                <h2>Оптимальная длина Title</h2>
                <p>Оптимальной длиной для названия вашего html докумета, на данный момент, считается 12-14 слов с количеством символов до 180 символов. Примечание: показываться будет примерно 70 символов, однако поисковик может сдвигать строку чтобы вывести важные слова в заголовок в поисковой выдаче.</p>
                <h2>Оптимальная длина Description</h2>
                <p>На данный момент оптимальной длиной считается 140-170 символов с пробелами. Написание Description важная задача и влияет на ранжирования сайта, однако рекомендовать начинающим продвиженцам писать его я не стану, лучше сконцентрирутесь на текстовом содержании самой страницы. Опишите максимально подробно ваш товар или услугу - это будет лучший путь для продвижения сайта.</p>
            </div>
        );
    }
}