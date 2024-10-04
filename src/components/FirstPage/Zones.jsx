import '../../styles/zones.sass'

import firstCard from '../../images/firstCard.png';
import secondCard from '../../images/secondCard.png';
import thirdCard from '../../images/thirdCard.png';

import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Zones = () => {

    return (
        <section id='zone' className="zones">
            <div className="container">
            <div className="zones-wrapper__title">Разные зоны с разными условиями</div>
                <div className="zones-wrapper">

                    <div className="zones__block">
                        <div className="zones__p">Игровой пк и периферия</div>
                        <h1 className="zones__title">Стандарт</h1>
                        <img src={firstCard} alt="" className="zones__img" />
                        <p className="zones__text">Общая зона</p>
                        <NavLink to='/prices'>
                            <p id='pink' className="zones__details">Подробнее
                                <FaLongArrowAltRight />
                            </p>
                        </NavLink>
                    </div>

                    <div className="zones__block">
                        <p className="zones__p">Монитор больше + ПК мощнее</p>
                        <h1 className="zones__title">Стандарт+</h1>
                        <img src={secondCard} alt="" className="zones__img" />
                        <p className="zones__text">Общая зона</p>
                        <NavLink to='/prices'>
                            <p id='blue' className="zones__details">Подробнее
                                <FaLongArrowAltRight />
                            </p>
                        </NavLink>
                    </div>

                    <div className="zones__block">
                        <p className="zones__p">Подписка PS+ и 2 геймпада</p>
                        <h1 className="zones__title">Приставка</h1>
                        <img src={thirdCard} alt="" className="zones__img" />
                        <p className="zones__text">Общая зона</p>
                        <NavLink to='/prices'>
                            <p id='lightBlue' className="zones__details">Подробнее
                                <FaLongArrowAltRight />
                            </p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Zones;