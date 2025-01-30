import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
    .use(HttpBackend) // JSON fayllardan tarjimalarni yuklash uchun
    .use(initReactI18next)
    .init({
        fallbackLng: 'uz', // Default til (o'zgartirish mumkin)
        lng: 'uz', // Dastlabki tanlangan til
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // Tarjima fayllarining yo'li
        },
        interpolation: {
            escapeValue: false, // React bilan xavfsiz
        },
    });

export default i18n;
