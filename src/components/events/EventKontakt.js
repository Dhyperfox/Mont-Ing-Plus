import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { useTranslation, Trans } from 'react-i18next';

const EventKontakt = () => {

  const { t, i18n } = useTranslation();

    return (
        <section className='events section' id="events">
        <div className="events-content">
          <h2>{t("contact.title")}</h2>
          <div className="events-holder">
            <iframe title="facebook" id="fb_page" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100080810059806&tabs=timeline&width=1600&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            <div className="event-contact">
              <h3>{t("contact.title2")}</h3>
              <p>{t("contact.about")}</p>
              <ul>
                <li><i><FontAwesomeIcon icon={faPhone} /></i>+381 63 7357 848</li>
                <li><i><FontAwesomeIcon icon={faEnvelope} /></i>monting47@gmail.com</li>
                <li><i><FontAwesomeIcon icon={faHome} /></i>{ t("contact.address") }</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
}

export default EventKontakt;