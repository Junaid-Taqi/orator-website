import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import hrTranslation from './locales/hr.json';

const resources = {
  en: {
    translation: enTranslation
  },
  hr: {
    translation: hrTranslation
  }
};

// try to restore previously selected language, default to Croatian (hr)
const savedLanguage = localStorage.getItem('language') || 'hr';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    // if translation is missing, fall back to Croatian as well
    fallbackLng: 'hr',
    interpolation: {
      escapeValue: false
    }
  });

// Save language to localStorage whenever it changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
