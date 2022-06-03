const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

    test('/api/translate Translate with text and locale fields', done => {

        const locale = 'american-to-british';
        const text = 'Mangoes are my favorite fruit.';
        const translation = 'Mangoes are my <span class="highlight">favourite</span> fruit.';

        chai.request(server)
        .post('/api/translate')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .type('form')
        .send(`locale=${locale}`)
        .send(`text=${text}`)
        .end((err, res) => {

            if (err) console.log(err);

            assert.equal(res.status, 200);
            assert.isObject(res.body);
            assert.propertyVal(res.body, 'text', text);
            assert.propertyVal(res.body, 'translation', translation);

            done();

        });

    });

    test('/api/translate Translate with text and invalid locale field', done => {

        const locale = 'french-to-american';
        const text = 'SaintPeter and nhcarrigan give their regards!';
        const translation = 'Everything looks good to me!';

        chai.request(server)
        .post('/api/translate')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .type('form')
        .send(`locale=${locale}`)
        .send(`text=${text}`)
        .end((err, res) => {

            if (err) console.log(err);

            assert.equal(res.status, 200);
            assert.isObject(res.body);
            assert.propertyVal(res.body, 'error', 'Invalid value for locale field');

            done();

        });

    });

    test('/api/translate Translate with missing text field', done => {

        chai.request(server)
        .post('/api/translate')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .type('form')
        .send('locale=american-to-british')
        .end((err, res) => {

            if (err) console.log(err);

            assert.equal(res.status, 200);
            assert.isObject(res.body);
            assert.propertyVal(res.body, 'error', 'Required field(s) missing');

            done();

        });

    });

    test('/api/translate Translate with missing locale field', done => {

        chai.request(server)
        .post('/api/translate')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .type('form')
        .send('text=hello')
        .end((err, res) => {

            if (err) console.log(err);

            assert.equal(res.status, 200);
            assert.isObject(res.body);
            assert.propertyVal(res.body, 'error', 'Required field(s) missing');

            done();

        });

    });

    test('/api/translate Translate with empty text', done => {

        chai.request(server)
        .post('/api/translate')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .type('form')
        .send('locale=american-to-british')
        .send('text=')
        .end((err, res) => {

            if (err) console.log(err);

            assert.equal(res.status, 200);
            assert.isObject(res.body);
            assert.propertyVal(res.body, 'error', 'No text to translate');

            done();

        });

    });

    test('/api/translate Translate with text that needs no translation', done => {

        const locale = 'british-to-american';
        const text = 'SaintPeter and nhcarrigan give their regards!';
        const translation = 'Everything looks good to me!';

        chai.request(server)
        .post('/api/translate')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .type('form')
        .send(`locale=${locale}`)
        .send(`text=${text}`)
        .end((err, res) => {

            if (err) console.log(err);

            assert.equal(res.status, 200);
            assert.isObject(res.body);
            assert.propertyVal(res.body, 'text', text);
            assert.propertyVal(res.body, 'translation', translation);

            done();

        });

    });

});