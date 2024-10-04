import '../../styles/reservation.sass'

import arrowDown from '../../images/arrow_down.png'
import arrowLeft from '../../images/arrow_left.png'
import { useEffect, useState } from 'react'
import axios, {isCancel, AxiosError} from 'axios';

const Reservation = () => {
    const [data, setData] = useState({
        name: '',
        date: '',
        time: '',
        guests: '',
        phone: '',
        wishes: ''
    });

    const getValueFromInput = (e) => {
        const { name, value } = e.target; // Получаем имя и значение элемента
        setData(prevData => ({
            ...prevData, [name]: value // Обновляем соответствующее поле состояния
        }));
        console.log(data)
    };
    
    const formSubmit = (e) => {
        e.preventDefault();
        console.log('Клик')
        axios.post('Нет бекенда', data)
            .then(data => {
                console.log(data);
            })
    }

    return (
        <section id='reservation' className="reservation">
            <div className="container">
                <form onSubmit={formSubmit} action="">
                    <div className="form">
                        <div className="form__wrapper">
                            <img src={arrowDown} alt="" className="form__arrowDown" />
                            <img src={arrowLeft} alt="" className="form__arrowLeft" />
                        <h1 className="form__reservation">Забронируй место!</h1>
                            <div className="form__first">
                                <input name='name' onChange={getValueFromInput} placeholder='Имя' type="text" className="form__name" />
                                <input name='date' onChange={getValueFromInput} placeholder='Дата' type="text" className="form__data" />
                                <input name='time' onChange={getValueFromInput} id='time' placeholder='Время' type="text" className="form__time" />
                            </div>
                            <div className="form__twice">
                                <input name='guests' onChange={getValueFromInput} placeholder='Количество гостей' type="text" className="form__guest" />
                                <input name='phone' onChange={getValueFromInput} placeholder='Номер телефона' type="number" className="form__number" />
                                <input name='wishes' onChange={getValueFromInput} id='dreams' placeholder='Ваши пожелания' type="text" className="form__dreams" />
                            </div>
                            <button className="form__button">Забронировать!</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Reservation; // Прийти поработать над отправкой данных