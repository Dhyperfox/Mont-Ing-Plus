import { Reveal } from "react-awesome-reveal";
import { fromLeft } from "../Animaciok";
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation, Trans } from 'react-i18next';

const Usluge = () => {

  const { t, i18n } = useTranslation();

    return (
        <section className='usluge section' id="usluge">
      <div className="usluge-content">
        <h2>{t("services.title")}</h2>
        <div className="usluge-holder">
            <div className="usluga1 usluga">
              <h3>{t("services.terep.title")}</h3>
              <div className="list-holder">
                <ul>
                  <Reveal keyframes={fromLeft} cascade triggerOnce>
                    <li>{t("services.terep.oszlop")}</li>
                    <li>{t("services.terep.bontas")}</li>
                    <li>{t("services.terep.jarda")}</li>
                    <li>{t("services.terep.faultetes")}</li>
                    <li>{t("services.terep.savalap")}</li>
                  </Reveal>
                </ul>
              </div>
              <ScrollLink activeClass="active"
                        to="events"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        {t("services.cta")}
                </ScrollLink>
            </div>
            <div className="usluga2 usluga">
              <h3>{t("services.szallitas.title")}</h3>
              <div className="list-holder">
                <ul>
                  <Reveal keyframes={fromLeft} cascade triggerOnce>
                    <li>{t("services.szallitas.anyag")}</li>
                    <li>{t("services.szallitas.tormelek")}</li>
                    <li>{t("services.szallitas.egyeb")}</li>
                  </Reveal>
                </ul>
              </div>
              <ScrollLink activeClass="active"
                        to="events"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        {t("services.cta")}
                </ScrollLink>
            </div>
            <div className="usluga3 usluga">
              <h3>{t("services.teher.title")}</h3>
              <div className="list-holder">
                <ul>
                  <Reveal keyframes={fromLeft} cascade triggerOnce>
                    <li>{t("services.teher.ipari")}</li>
                    <li>{t("services.teher.kipakolas")}</li>
                    <li>{t("services.teher.athelyezes")}</li>
                  </Reveal>
                </ul>
              </div>
              <ScrollLink activeClass="active"
                        to="events"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        {t("services.cta")}
                </ScrollLink>
            </div>
        </div>
      </div>
    </section>
    );
}

export default Usluge;