import { Reveal } from "react-awesome-reveal";
import { fromTop, fromRight } from "../Animaciok";
import { useTranslation, Trans } from 'react-i18next';

const AboutUs = () => {
    const [t, i18n] = useTranslation();
    return (
        <section className="about-us section" id="about-us">
        <div className="container">
        <div className="about-us-holder">
            <Reveal keyframes={fromTop} triggerOnce>
            <div className="img-holder">
                <img src="img/aboutus.png" alt="monting" />
            </div>
            </Reveal>
            <Reveal keyframes={fromRight} triggerOnce>
            <div className="text-holder">
                <h2>{t("about.about-us")}</h2>
                <p>{t("about.about-text")}</p>
            </div>
            </Reveal>
        </div>
        </div>
    </section>
    );
}

export default AboutUs;