
import video from "./../assets/promo.mp4";
import HeadSwiper from "../components/swiper/HeadSwiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import AboutUs from './../components/about-us/AboutUs';
import Machines from "../components/machines/Machines";
import Usluge from "../components/usluge/Usluge";
import EventKontakt from './../components/events/EventKontakt';
import Gallery from '../components/gallery/gallery';
import Footer from "../components/footer/Footer";



const Home = () => {
 
    return (
    <>
      <header className="header" id="header" >
          <div className="video-holder">
              <video className='videoTag' autoPlay loop muted>
                  <source src={video} type='video/mp4' />
              </video>
          </div>
          <div className="video-overlay">
          </div>
          <HeadSwiper/>
          <div className="mouse">
              <svg className="arrows">
                <path className="a1" d="M0 0 L30 32 L60 0"></path>
                <path className="a2" d="M0 20 L30 52 L60 20"></path>
                <path className="a3" d="M0 40 L30 72 L60 40"></path>
              </svg>
          </div>
          <div className="callphone">
            <a href="tel:0637357848"><FontAwesomeIcon icon={faPhone} /></a>
          </div>
      </header>
      <AboutUs/>
      <Machines/>
      <Usluge />
      <EventKontakt />
      <Gallery/>
      <Footer />
    </>
    );
  };
  
  export default Home;
