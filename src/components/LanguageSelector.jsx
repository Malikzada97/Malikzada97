import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import ReactCountryFlag from 'react-country-flag';

const LANGUAGES = [
  { code: 'en', label: 'English', countryCode: 'US', short: 'US' },
  { code: 'es', label: 'Español', countryCode: 'ES', short: 'ES' },
  { code: 'fr', label: 'Français', countryCode: 'FR', short: 'FR' },
  { code: 'de', label: 'Deutsch', countryCode: 'DE', short: 'DE' },
  { code: 'ar', label: 'العربية', countryCode: 'SA', short: 'AR' },
  { code: 'ur', label: 'اردو', countryCode: 'PK', short: 'UR' },
  { code: 'zh', label: '中文', countryCode: 'CN', short: 'ZH' },
  { code: 'ja', label: '日本語', countryCode: 'JP', short: 'JA' },
  { code: 'ko', label: '한국어', countryCode: 'KR', short: 'KO' },
  { code: 'ru', label: 'Русский', countryCode: 'RU', short: 'RU' },
  { code: 'pt', label: 'Português', countryCode: 'PT', short: 'PT' },
  { code: 'it', label: 'Italiano', countryCode: 'IT', short: 'IT' },
];

export default function LanguageSelector({ className = '' }) {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  // Close dropdown on outside click
  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOpen(false);
    }
  };

  return (
    <div className={`relative inline-block text-left ${className}`} tabIndex={0} onBlur={handleBlur}>
      <button
        ref={buttonRef}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background hover:bg-muted transition focus:outline-none focus:ring-2 focus:ring-primary"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('common.language')}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') setOpen((v) => !v);
          if (e.key === 'Escape') setOpen(false);
        }}
        data-testid="language-selector-trigger"
      >
        <span className="text-xl">
          <ReactCountryFlag
            countryCode={LANGUAGES.find((l) => l.code === i18n.language)?.countryCode || 'US'}
            svg
            style={{
              width: '1.5em',
              height: '1.5em',
              verticalAlign: 'middle',
              borderRadius: '0.2em',
              marginRight: '0.2em',
            }}
            title={LANGUAGES.find((l) => l.code === i18n.language)?.label}
          />
        </span>
        <span className="font-semibold text-xs tracking-wide uppercase">
          {LANGUAGES.find((l) => l.code === i18n.language)?.short || i18n.language.toUpperCase()}
        </span>
        <FiChevronDown className="w-4 h-4" />
      </button>
      {open && (
        <ul
          className="absolute z-50 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-1 focus:outline-none animate-fade-in"
          role="listbox"
          tabIndex={-1}
        >
          {LANGUAGES.map((lang) => (
            <li
              key={lang.code}
              role="option"
              aria-selected={i18n.language === lang.code}
              tabIndex={0}
              className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-muted focus:bg-muted transition text-sm ${i18n.language === lang.code ? 'bg-primary/10 font-semibold' : ''}`}
              onClick={() => handleSelect(lang.code)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleSelect(lang.code);
              }}
              data-testid={`language-option-${lang.code}`}
            >
              <span className="text-lg">
                <ReactCountryFlag
                  countryCode={lang.countryCode}
                  svg
                  style={{
                    width: '1.2em',
                    height: '1.2em',
                    verticalAlign: 'middle',
                    borderRadius: '0.2em',
                    marginRight: '0.2em',
                  }}
                  title={lang.label}
                />
              </span>
              <span className="font-semibold text-xs tracking-wide uppercase">{lang.short}</span>
              {i18n.language === lang.code && (
                <span className="ml-auto text-primary">●</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 