// components/LanguageSwitcher.js
import { useTranslation } from 'react-i18next';

const changeLanguage = () => {
  const { i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('fr')}>French</button>
      {/* Add more buttons for other languages if needed */}
    </div>
  );
};

export default changeLanguage;
