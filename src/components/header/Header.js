import "./style.css";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						<em>Vit&M Service</em>
					</strong>
					<br />Ремонт ходовой части и не только
				</h1>
				<div className="header__text">
					<p>Ваша безопасность — наш приоритет.</p>
				</div>
				<Link to="/booking" className="btn">
                    Записаться Онлайн
                </Link>
			</div>
		</header>
	);
}

export default Header;