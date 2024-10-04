import '../../styles/footer.sass'
import telegram from '../../images/tg.svg'
import whatsApp from '../../images/whatsapp.svg'

const Contacts = () => {
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
        <section id='contacts' className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer-block">
                            <h1 className="footer-block__title">Как нас найти?</h1>
                            <div className="footer-block__adress">Адрес:<span> Королеви Єлизавети ІІ, 2</span></div>
                        <div className="footer-block__phone" href="tel:380662441594">Телефон:<span> +380 66 244 15 94</span>
                            <img src={telegram} alt="" />
                            <img src={whatsApp} alt="" />
                        </div>
                        <div className="footer-block__cooperation">По вопросам сотрудничества:<span><br></br>Коммерческие предложения можно направить в Телеграм</span></div>
                        <button onClick={() => scrollToSection('reservation')} className="footer-block__button">Забронировать!</button>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6291.738324042083!2d35.049943733039974!3d48.468997887232334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2c2c60241bd%3A0x999c964048051b3e!2z0JzQntCh0KItQ9C40YLQuA!5e0!3m2!1sru!2sua!4v1727802117953!5m2!1sru!2sua" width="820" height="580" className='footer-block__map'></iframe>
                </div>
            </div>
        </section>
    )
}

export default Contacts;