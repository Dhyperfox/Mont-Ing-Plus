import { Link } from 'react-scroll';
import { useState } from "react";
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useTranslation, Trans } from 'react-i18next';
import LanguageSwitcher from '../language/LanguageSelector';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('rs');
    const lngs = {
        rs: { nativeName: 'Srpski' },
        hu: { nativeName: 'Magyar' }
      };

    const handleLanguageChange = (newLanguage) => {
        setCurrentLanguage(newLanguage);
    };

    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
    setIsChecked(!isChecked);
    };

    return (

    <nav className="navbar" id="navbar1">
    <div className="logo-effect"></div>
    <div className="logo">
        <img src="img/logo.png" alt="monting" className="logo-fluid" />
    </div>
    <div className="logo-effect2"></div>
    <div className="contact-header">
        <div className="contact-header__holder">
            <p><FontAwesomeIcon icon={faPhone} /> +381 63 7357 848</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> monting47@gmail.com</p>
        </div>
    </div>
    <div className="toggler-hold">
        <input type="checkbox" id="toggler" onChange={handleToggle} />
        <label htmlFor="toggler"><FontAwesomeIcon icon={faBars} /></label>
    </div>
        <ul className={`nav-links ${isChecked ? 'enable-menu' : ''}`}>
            <li className="nav-item">
                <Link activeClass="active"
                        to="header"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleToggle} 
                        className="menu-item">
                        {t("menu.home")}
                </Link>
            </li>
            <li className="nav-item">
            <Link activeClass="active"
                        to="about-us"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleToggle} 
                        className="menu-item">
                        {t("menu.about")}
                </Link>
            </li>
            <li className="nav-item">
            <Link activeClass="active"
                        to="machines"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} 
                        onClick={handleToggle}
                        className="menu-item">
                        {t("menu.machines")}
                </Link>
            </li>
            <li className="nav-item">
            <Link activeClass="active"
                        to="usluge"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} 
                        onClick={handleToggle}
                        className="menu-item">
                        {t("menu.services")}
                </Link>
            </li>
            {/*<li className="nav-item">
            <Link activeClass="active"
                        to="gallery"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} 
                        onClick={handleToggle}
                        className="menu-item">
                        {t("menu.gallery")}
                </Link>
            </li>*/}
        </ul>
        <div>
            <LanguageSwitcher />
        </div>
    </nav> 
    );

}

export default Navbar;