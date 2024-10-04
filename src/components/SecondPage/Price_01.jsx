import processor from '../../images/processor.png';
import videocard from '../../images/videocard.png';
import memory from '../../images/memory.png';
import ssd from '../../images/ssd.png';
import monitor from '../../images/monitor.png';
import keyboard from '../../images/keyboard.png';
import mouse from '../../images/mouse.png';
import headphones from '../../images/headphones.png';

import oneHours from '../../images/one_hours.png';
import thirdHours from '../../images/third_hours.png';
import fiveHours from '../../images/five_hours.png';
import sevenHours from '../../images/seven_hours.png';
import night from '../../images/night.png';
import day from '../../images/day.png';

import '../../styles/prices.sass';

const equipmentData = [
    { title: 'Процессор', description: 'AMD Ryzen 7 2700X', img: processor },
    { title: 'Видеокарта', description: 'GeForce GTX 1080', img: videocard },
    { title: 'Память', description: 'DDR4 16GB', img: memory },
    { title: 'Накопитель', description: 'NVMe SSD', img: ssd },
    { title: 'Монитор', description: '27" 144Hz', img: monitor },
    { title: 'Клавиатура', description: 'Gamdias Hermes E2', img: keyboard },
    { title: 'Мышка', description: 'Logitech G403', img: mouse },
    { title: 'Наушники', description: 'Corsair HS50', img: headphones },
];

const tariffsData = [
    { title: 'Тариф «1 Час»', description: 'Доступен 24/7', img: oneHours, tariff: '65грн'},
    { title: 'Тариф «3 Часа»', description: 'Доступен 24/7', img: thirdHours, tariff: '180грн'},
    { title: 'Тариф «5 Часов»', description: 'Доступен 24/7', img: fiveHours, tariff: '260грн'},
    { title: 'Тариф «7 Часов»', description: 'Доступен 24/7', img: sevenHours, tariff: '310грн'},
    { title: 'Тариф «Ночь»', description: '23:00 ‒ 10:00', img: night, tariff: '360грн'},
    { title: 'Тариф «День»', description: '10:00 ‒ 23:00', img: day, tariff: '500грн'}
];

const PriceOne = () => {

    return (
        <section id='priceOne' className="standart">
            <div className="container">
                <h1 id='standart' className="standart__title">Зона <span>Стандарт</span></h1>
                <div className="standart__characters">Характеристики</div>

                <div className="standart-wrapper">
                        {equipmentData.map((item, index) => (
                            <div key={index} className="standart-wrapper__block">
                                <div className="border__characters">
                                    <h1 className="standart-wrapper__title">{item.title}</h1>
                                    <div className="standart-wrapper__text">{item.description}</div>
                                    <img src={item.img} alt={item.title} className="standart-wrapper__img" />
                                </div>
                            </div>
                        ))}
                    
                </div>

                <div className="standart__characters">Тарифы и цены</div>

                <div className="standart-wrapper">
                    {tariffsData.map((item, index) => (
                        <div key={index} className="standart-wrapper__block">
                            <div className="border__traffics">
                            <h1 className="standart-wrapper__title">{item.title}</h1>
                            <div className="standart-wrapper__text">{item.description}</div>
                            <img src={item.img} alt={item.title} className="traffic_img" />
                            <div className="standart-wrapper__tariff">{item.tariff}</div>
                            </div>
                        </div>
                    ))}
                    <div className="standart-wrapper__stocks">
                        <div className="standart-wrapper__banner">
                            <div className="border__banner">
                            <h1 className="standart-wrapper__title">С понедельника по среду</h1>
                            <div className="standart-wrapper__stock">Скидка 20%</div>
                        </div>
                    </div>

                        <div className="standart-wrapper__banner">
                        <div className="border__banner">
                            <h1 className="standart-wrapper__title">По утрам с 05:00 до 14:00</h1>
                            <div className="standart-wrapper__stock">Скидка 40%</div>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PriceOne;