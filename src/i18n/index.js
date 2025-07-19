import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all language files statically for better performance
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';
import frTranslations from './locales/fr.json';
import deTranslations from './locales/de.json';
import arTranslations from './locales/ar.json';
import urTranslations from './locales/ur.json';
import zhTranslations from './locales/zh.json';
import jaTranslations from './locales/ja.json';
import koTranslations from './locales/ko.json';
import ruTranslations from './locales/ru.json';
import ptTranslations from './locales/pt.json';
import itTranslations from './locales/it.json';

const resources = {
  en: { translation: enTranslations },
  es: { translation: esTranslations },
  fr: { translation: frTranslations },
  de: { translation: deTranslations },
  ar: { translation: arTranslations },
  ur: { translation: urTranslations },
  zh: { translation: zhTranslations },
  ja: { translation: jaTranslations },
  ko: { translation: koTranslations },
  ru: { translation: ruTranslations },
  pt: { translation: ptTranslations },
  it: { translation: itTranslations }
};

i18n
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
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
    },
    
    react: {
      useSuspense: false,
    },

    // Preload all languages for better performance
    preload: ['en', 'es', 'fr', 'de', 'ar', 'ur', 'zh', 'ja', 'ko', 'ru', 'pt', 'it'],
    
    // Cache loaded languages
    caches: ['localStorage'],
    
    // Language options
    supportedLngs: ['en', 'es', 'fr', 'de', 'ar', 'ur', 'zh', 'ja', 'ko', 'ru', 'pt', 'it'],
    
    // Non-explicit language handling
    nonExplicitSupportedLngs: true,
    
    // Load language only (not region)
    load: 'languageOnly',
    
    // Default namespace
    defaultNS: 'translation',
    
    // Namespaces
    ns: ['translation'],
    
    // Return empty string for missing keys in production
    returnEmptyString: false,
    
    // Return objects for missing keys
    returnObjects: true,
    
    // Key separator
    keySeparator: '.',
    
    // Nested key separator
    nsSeparator: ':',
    
    // Plural separator
    pluralSeparator: '_',
    
    // Context separator
    contextSeparator: '_',
    
    // Missing key handler
    missingKeyHandler: (lng, ns, key, res) => {
      console.warn(`Missing translation key: ${key} for language: ${lng}`);
      return key;
    }
  });

export default i18n; 