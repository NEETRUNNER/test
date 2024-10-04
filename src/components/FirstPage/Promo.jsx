import '../../styles/promo.sass'

import logo from '../../images/logo.png'

const Promo = () => {

    const scrollToSection = (section) => {
        setTimeout(() => {
            // После перехода плавно прокручиваем к секции
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Небольшая задержка для завершения перехода
    };

    return (
        <section id='main' className="promo">
            <div className="container">
                <div className="promo-block__first">
                    <img src={logo} alt="" className="promo-block__img" />
                    <h1 className="promo-block__title"><span>Кибертека</span> компьютерный клуб</h1>
                </div>
                <div className="promo-block__second">
                    <ul className="promo-block__ul">
                        <li className="promo-block__li">Королеви Єлизавети ІІ, 2</li>
                        <li className="promo-block__li">Работаем круглосуточно</li>
                        <li className="promo-block__li" href="tel:380662441594">+380 66 244 15 94</li>
                    </ul>
                    <button onClick={() => scrollToSection('reservation')} className="promo-block__button">
                        Забронировать!
                </button>
                </div>
            </div>
        </section>
    )
}

export default Promo;