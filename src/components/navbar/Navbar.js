import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>Vit&M</strong> AutoService
                    </NavLink>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Главная
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink
                                to="/recommendations"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Рекомендации
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink
                                to="/contacts"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Контакты
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink
                                to="/Promotions"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Акции
                            </NavLink>
                        </li>
						<li className="nav-list__item">
                            <NavLink to="/booking" className="nav-btn">
                        Записаться Онлайн
                    </NavLink>
                        </li>
                    </ul>
					
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
