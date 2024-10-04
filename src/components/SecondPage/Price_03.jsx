import oneHours from '../../images/one_hours.png';
import thirdHours from '../../images/third_hours.png';
import fiveHours from '../../images/five_hours.png';
import { useState } from 'react';

import arrowDown from '../../images/arrow_down.png'
import arrowLeft from '../../images/arrow_left.png'
import '../../styles/prices.sass';

const tariffsData = [
    { title: 'Тариф «1 Час»', description: 'Доступен 24/7', img: oneHours, tariff: '120грн'},
    { title: 'Тариф «3 Часа»', description: 'Доступен 24/7', img: thirdHours, tariff: '250грн'},
    { title: 'Тариф «5 Часов»', description: 'Доступен 24/7', img: fiveHours, tariff: '330грн'},
];

const PriceThree = () => {
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
    };

    return (
        <section id='priceThree' className="standart">
            <div className="container">
                <div className="standart-block">
                    <h1 id='standartPs5' className="standart__title">Зона <span>ps5</span></h1>
                    <div className="standart__characters">Тарифы и цены</div>

                    <div className="standart-wrapper">
                        {tariffsData.map((item, index) => (
                            <div key={index} className="standart-wrapper__block">
                                <div id='blueTraffic' className="border__traffics">
                                <h1 className="standart-wrapper__title">{item.title}</h1>
                                <div className="standart-wrapper__text">{item.description}</div>
                                <img src={item.img} alt={item.title} className="traffic_img" />
                                <div className="standart-wrapper__tariff">{item.tariff}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <form action="">
                    <div id='form' className="form">
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
            </div>
        </section>
    );
};

export default PriceThree;