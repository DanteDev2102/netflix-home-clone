import { useState, useEffect } from 'react';
import Image from '../../assets/Logo.webp';
import './Header.css';

const Header = () => {
	const [darkbar, setDarkBar] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', (e) => {
			const scrollign = window.scrollY > 70;
			scrollign ? setDarkBar(true) : setDarkBar(false);
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);

	return (
		<header className={`header ${darkbar && 'dark'}`}>
			<div className="logo">
				<img src={Image} alt="Netflix logo" />
			</div>
			<div className="header-buttons">
				<button className="sign-up">Join Now</button>
				<button className="log-in">Sign in</button>
			</div>
		</header>
	);
};

export default Header;
