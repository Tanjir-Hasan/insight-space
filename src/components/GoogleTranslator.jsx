import React, { useEffect } from 'react';

const GoogleTranslator = () => {

    // useEffect(() => {
    //     const googleTranslateElementInit = () => {
    //         new window.google.translate.TranslateElement(
    //             {
    //                 pageLanguage: 'en',
    //                 includedLanguages: 'en,zh-CN,zh-TW',
    //                 layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
    //             },
    //             'google_translate_element'
    //         );
    //     };

    //     const script = document.createElement('script');
    //     script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    //     script.async = true;

    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script);
    //     };
    // }, []);


    return <div id="google_translate_element" className='goog-te-gadget goog-logo-link goog-te-banner-frame translated-ltr'></div>;
};

export default GoogleTranslator;
