'use strict';

const { restart } = require('nodemon');
const Translator = require('../components/translator.js');

module.exports = function (app) {

    const translator = new Translator();

    app.route('/api/translate').post((req, res) => {

        const text = req.body.text;
        const locale = req.body.locale;

        if (text == undefined || locale == undefined) return res.status(200).json({error: 'Required field(s) missing'});

        if (!text) return res.status(200).json({error: 'No text to translate'});

        const validLocales = ['american-to-british', 'british-to-american'];

        if (!validLocales.includes(locale)) return res.status(200).json({error: 'Invalid value for locale field'});

        if (locale == 'american-to-british') {

            const translation = translator.translateAmerican(text);

            if (text == translation) return res.status(200).json({
                text: text,
                translation: 'Everything looks good to me!'
            });

            return res.status(200).json({
                text: text,
                translation: translation
            });

        }

        if (locale == 'british-to-american') {

            const translation = translator.translateBritish(text);

            if (text == translation) return res.status(200).json({
                text: text,
                translation: 'Everything looks good to me!'
            });

            return res.status(200).json({
                text: text,
                translation: translation
            });

        }

    });
    
};