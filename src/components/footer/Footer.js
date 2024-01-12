import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { useTranslation, Trans } from 'react-i18next';

const Footer = () => {

    const { t, i18n } = useTranslation();

    return (
        <footer>
        <div className="container">
          <div className="footer-content">
          <div className="links">
              <h3>{t("footer.links")}</h3>
              <ul>
                <li>
                  <ScrollLink activeClass="active"
                          to="header"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                          <i><FontAwesomeIcon icon={faAngleDoubleRight} /></i>
                          {t("menu.home")}
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink activeClass="active"
                          to="about-us"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                          <i><FontAwesomeIcon icon={faAngleDoubleRight} /></i>
                          {t("menu.about")}
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink activeClass="active"
                          to="machines"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                          <i><FontAwesomeIcon icon={faAngleDoubleRight} /></i>
                          {t("menu.machines")}
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink activeClass="active"
                          to="usluge"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                          <i><FontAwesomeIcon icon={faAngleDoubleRight} /></i>
                          {t("menu.services")}
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink activeClass="active"
                          to="events"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                          <i><FontAwesomeIcon icon={faAngleDoubleRight} /></i>
                          {t("menu.contact")}
                  </ScrollLink>
                  </li>
                  <li><a href="https://montingplus.rs/api/login"><i><FontAwesomeIcon icon={faAngleDoubleRight} /></i>Admin</a></li>
              </ul>
            </div>
            <div className="links">
              <h3>{t("menu.contact")}</h3>
              <ul>
                <li><a href="https://www.facebook.com/profile.php?id=100080810059806"><i><FontAwesomeIcon icon={faFacebookSquare} /></i>Mont Ing Plus</a></li>
                <li><a href="tel:0637357848"><i><FontAwesomeIcon icon={faPhone} /></i>+381 63 7357 848</a></li>
                <li><a href="mailto:monting47@gmail.com"><i><FontAwesomeIcon icon={faEnvelope} /></i>monting47@gmail.com</a></li>
                
              </ul>
            </div>
            <div className="links">
              <h3>{t("footer.location")}</h3>
                <iframe title="map" src="https://www.google.com/maps/embed/v1/place?q=Tornjoški+put+78,+Zenta,+Szerbia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"  width="350px" height="250px" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© Mont Ing Plus 2023</p>
        </div>
      </footer>
    );
}

export default Footer;