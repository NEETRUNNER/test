import { useEffect, useState } from 'react';
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import '../../styles/header.sass';

const Header = () => {
    const [activeSection, setActiveSection] = useState('');
    const [hamburgerActive, setHamburgerActive] = useState(false)
    const location = useLocation(); // Для отслеживания текущего маршрута
    const navigate = useNavigate(); // Для программы навигации между маршрутами 

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section'); // Нашли секции с которыми работаем
            const scrollPos = window.scrollY + window.innerHeight / 2; //

            sections.forEach((section) => {
                const offsetTop = section.offsetTop;
                const offsetHeight = section.offsetHeight;

                if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const burger = document.querySelector('.hamburger');
        const headerList = document.querySelector('.header-block');
        if (hamburgerActive) {
            burger.classList.add('activeBurger');
            headerList.classList.add('activeNav');
            document.body.style.overflow = 'hidden';
        } else {
            burger.classList.remove('activeBurger');
            headerList.classList.remove('activeNav');
            document.body.style.overflow = '';
        }
    }, [hamburgerActive]);

    const isHomePage = location.pathname === '/'; // Определяем, на главной ли странице

    // Функция для навигации на главную и прокрутки к секции
    const scrollToSection = (section) => {
        if (!isHomePage) {
            navigate('/'); // Переход на главную страницу
        }

        const headerLi = document.querySelectorAll('.header-block__li');
        const headerList = document.querySelector('.header-block');
        const burger = document.querySelector('.hamburger');
        if (headerLi) {
            burger.classList.remove('activeBurger');
            headerList.classList.remove('activeNav')
            document.body.style.overflow = '';
        }

        setTimeout(() => {
            // После перехода плавно прокручиваем к секции
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Небольшая задержка для завершения перехода
    };

    const handleNavLinkClick = (e) => {
        deleteAllActives(); // Сначала удаляем активность у всех элементов
    
        // Добавляем класс активности для текущего элемента
        e.target.classList.add('active'); 

        setHamburgerActive(false); // Это закроет меню

        const headerList = document.querySelector('.header-block');
        if (e.target) {
            headerList.classList.remove('.activeNav')
        }
    };
    
    const deleteAllActives = () => {
        const blocks = document.querySelectorAll('.header-block__li');
    
        // Удаляем класс "active" у всех элементов
        blocks.forEach((block) => {
            block.classList.remove('active');
        });
    };

    const activeHamburger = () => {
        setHamburgerActive(prevState => !prevState); // Переключаем состояние
    };

    return (
        <>
            <div onClick={() => activeHamburger()} className='hamburger'>
                <span></span>
                <span></span>
                <span></span>
            </div>
        <section className="header">
                <ul className="header-block">
                    {/* Ссылки для секций на главной странице */}
                    <li 
                        className={`header-block__li ${activeSection === 'main' ? 'active' : ''}`}
                        onClick={() => scrollToSection('main')}
                    >
                        Главная
                    </li>
                    <li 
                        className={`header-block__li ${activeSection === 'reservation' ? 'active' : ''}`}
                        onClick={() => scrollToSection('reservation')}
                    >
                        Бронирование
                    </li>
                    <li 
                        className={`header-block__li ${activeSection === 'contacts' ? 'active' : ''}`}
                        onClick={() => scrollToSection('contacts')}
                    >
                        Контакты
                    </li>
                    
                    {/* Эти ссылки будут использовать NavLink для маршрутизации между страницами */}
                    <NavLink 
                        to='/zones'
                        className={`header-block__li ${location.pathname === '/zones' ? 'active' : ''}`}
                        onClick={(e) => handleNavLinkClick(e)}
                    >
                        Зоны
                    </NavLink>
                    <NavLink 
                        to='/photo' 
                        className={`header-block__li ${location.pathname === '/photo' ? 'active' : ''}`}
                        onClick={(e) => handleNavLinkClick(e)}
                    >
                        Фото
                    </NavLink>
                    <NavLink 
                        to="/prices" 
                        className={`header-block__li ${location.pathname === '/prices' ? 'active' : ''}`}
                        onClick={(e) => handleNavLinkClick(e)}
                    >
                        Цены
                    </NavLink>
                </ul>
        </section>
        </>
    );
}

export default Header;
