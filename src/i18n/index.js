import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Only import the default language (English) for initial load
import enTranslations from './locales/en.json';

const resources = {
  en: {
    translation: enTranslations
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      // Add caching for better performance
      requestOptions: {
        cache: 'default'
      }
    },
    
    react: {
      useSuspense: false,
    },

    // Preload common languages
    preload: ['en'],
    
    // Load additional languages on demand
    load: 'languageOnly',
    
    // Cache loaded languages
    caches: ['localStorage'],
    
    // Optimize loading
    partialBundledLanguages: true,
    resources: {
      en: { translation: enTranslations }
    }
  });

export default i18n; 