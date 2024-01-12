import React from 'react';
import { Link } from 'react-scroll';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

import './headswiper.css';

import { useTranslation, Trans } from 'react-i18next';

const HeadSwiper = () => {

  const { t, i18n } = useTranslation();

  return (
    <div className="swiper-holder">
        <Swiper
        spaceBetween={0}
        navigation={true}
        loop={true}
        speed={500}
        effect={'fade'}
        /*onSlideChange={(swiperCore) => {
            const {
              activeIndex,
              snapIndex,
              previousIndex,
              realIndex,
            } = swiperCore;
            console.log({ activeIndex, snapIndex, previousIndex, realIndex });
        }}*/
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="slide-content">
                <h1>{t("swiper.slide1.title")}</h1>
                <p>{t("swiper.slide1.about")}</p>
                <div className="button-holder">
                  <Link activeClass="active"
                          to="usluge"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500} >
                          {t("swiper.info")}
                  </Link>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide-content">
                <h1>{t("swiper.slide2.title")}</h1>
                <p>{t("swiper.slide2.about")}</p>
                <div className="button-holder">
                  <Link activeClass="active"
                          to="usluge"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500} >
                          {t("swiper.info")}
                  </Link>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide-content">
                <h1>{t("swiper.slide3.title")}</h1>
                <p>{t("swiper.slide3.about")}</p>
                <div className="button-holder">
                  <Link activeClass="active"
                          to="usluge"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500} >
                          {t("swiper.info")}
                  </Link>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide-content">
                <h1>{t("swiper.slide4.title")}</h1>
                <p>{t("swiper.slide4.about")}</p>
                <div className="button-holder">
                  <Link activeClass="active"
                          to="usluge"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500} >
                          {t("swiper.info")}
                  </Link>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeadSwiper;
