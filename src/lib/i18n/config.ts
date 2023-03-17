import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// eslint-disable-next-line no-void
void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en-GB',
    react: {
      bindI18n: 'languageChanged',
    },
    detection: {
      lookupCookie: 'i18next',
      order: ['cookie', 'navigator'],
      caches: ['cookie'],
    },
  });

// eslint-disable-next-line no-restricted-exports
export { default } from 'i18next';
