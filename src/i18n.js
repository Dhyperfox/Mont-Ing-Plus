import i18n from "i18next";

import translationRS from './components/language/rs.json';
import translationHU from './components/language/hu.json';

import { initReactI18next } from 'react-i18next';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'rs',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      rs: translationRS,
      hu: translationHU
    }
  });

export default i18n;