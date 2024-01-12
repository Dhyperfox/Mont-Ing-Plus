import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
// Definiáljuk a zászlók képeit
const flagImages = {
  serbian: require('../../assets/serbia.png'),
  hungarian: require('../../assets/hungary.png')
};

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('rs');
  const lngs = {
      rs: { nativeName: 'Srpski' },
      hu: { nativeName: 'Magyar' }
    };

  const toggleLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <div className='lang-switcher'>
      <button
        onClick={() => toggleLanguage("rs")}
        style={{
          border: '1px solid transparent',  
          borderColor: currentLanguage === 'rs' ? '#da970b' : 'transparent',
        }}
      >
        <img
          src={flagImages.serbian}
          alt="Serbian Flag"
          style={{
            width: '25px', 
            height: 'auto'
          }}
        />
      </button>
      <button
        onClick={() => toggleLanguage("hu")}
        style={{
          border: '1px solid transparent', 
          borderColor: currentLanguage === 'hu' ? '#da970b' : 'transparent',
        }}
      >
        <img
          src={flagImages.hungarian}
          alt="Hungarian Flag"
          style={{
            width: '25px',
            height: 'auto'
          }}
        />
      </button>
    </div>
  );
}

export default LanguageSwitcher;