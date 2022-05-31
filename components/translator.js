const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    translateAmerican(string) {

        const americanOnlyKeys = Object.keys(americanOnly).sort((a, b) => b.length - a.length);
        const americanToBritishSpellingKeys = Object.keys(americanToBritishSpelling).sort((a, b) => b.length - a.length);
        const americanToBritishTitlesKeys = Object.keys(americanToBritishTitles).sort((a, b) => b.length - a.length);

        americanOnlyKeys.forEach(key => {

            const regex = new RegExp(key, 'i');

            if (string.match(regex)) {

                const replace = `<span class="highlight">${americanOnly[key]}</span>`;

                string = string.replace(regex, replace);

            }

        });

        americanToBritishSpellingKeys.forEach(key => {

            const regex = new RegExp(key, 'i');

            if (string.match(regex)) {

                const replace = `<span class="highlight">${americanToBritishSpelling[key]}</span>`

                string = string.replace(regex, replace);

            }

        });

        americanToBritishTitlesKeys.forEach(key => {

            const regex = new RegExp(key, 'i');

            if (string.match(regex)) {

                const value = americanToBritishTitles[key];

                const firstLetter = value.slice(0,1).toUpperCase();
                const rest = value.slice(1, value.length);

                const title = firstLetter + rest;

                const replace = `<span class="highlight">${title}</span>`;

                string = string.replace(regex, replace);

            }

        });

        const timeRegex = /\d+:\d{2}/;

        if (string.match(timeRegex)) {

            const time = string.match(timeRegex)[0].replace(':', '.');

            const replace = `<span class="highlight">${time}</span>`;

            string = string.replace(timeRegex, replace);

        }

        return string;

    }

    translateBritish(string) {

        

    }

}

module.exports = Translator;