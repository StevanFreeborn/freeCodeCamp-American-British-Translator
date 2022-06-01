const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {

    test('Translate { Mangoes are my favorite fruit. } to British English', done => {
        
        const string = 'Mangoes are my favorite fruit.';
        const result = translator.translateAmerican(string);

        assert.equal(result, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
        done();

    });

    test('Translate { I ate yogurt for breakfast. } to British English', done => {
        
        const string = 'I ate yogurt for breakfast.';
        const result = translator.translateAmerican(string);

        assert.equal(result, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
        done();

    });

    test('Translate { We had a party at my friend\'s condo. } to British English', done => {
        
        const string = 'We had a party at my friend\'s condo.';
        const result = translator.translateAmerican(string);

        assert.equal(result, 'We had a party at my friend\'s <span class="highlight">flat</span>.');
        done();

    });

    test('Translate { Can you toss this in the trashcan for me? } to British English', done => {
        
        const string = 'Can you toss this in the trashcan for me?';
        const result = translator.translateAmerican(string);

        assert.equal(result, 'Can you toss this in the <span class="highlight">bin</span> for me?');
        done();

    });

    test('Translate { The parking lot was full. } to British English', done => {
        
        const string = 'The parking lot was full.';
        const result = translator.translateAmerican(string);

        assert.equal(result, 'The <span class="highlight">car park</span> was full.');
        done();

    });

    test('Translate { Like a high tech Rube Goldberg machine. } to British English', done => {
        
        const string = 'Like a high tech Rube Goldberg machine.';
        const result = translator.translateAmerican(string);

        assert.equal(result, 'Like a high tech <span class="highlight">Heath Robinson device</span>.');
        done();

    });

    test('Translate { To play hooky means to skip class or work. } to British English', done => {
        
        const string = 'To play hooky means to skip class or work.';
        const result = translator.translateAmerican(string);

        assert.equal(result, 'To <span class="highlight">bunk off</span> means to skip class or work.');
        done();

    });

    test('Translate { No Mr. Bond, I expect you to die. } to British English', done => {
        
        const string = 'No Mr. Bond, I expect you to die.';
        const result = translator.translateAmerican(string);

        assert.equal(result, 'No <span class="highlight">Mr</span> Bond, I expect you to die.');
        done();

    });

    test('Translate { Dr. Grosh will see you now. } to British English', done => {
        
        const string = 'Dr. Grosh will see you now.';
        const result = translator.translateAmerican(string);

        assert.equal(result, '<span class="highlight">Dr</span> Grosh will see you now.');
        done();

    });

    test('Translate { Lunch is at 12:15 today. } to British English', done => {
        
        const string = 'Lunch is at 12:15 today.';
        const result = translator.translateAmerican(string);

        assert.equal(result, 'Lunch is at <span class="highlight">12.15</span> today.');
        done();

    });

    test('Translate { We watched the footie match for a while. } to American English', done => {
        
        const string = 'We watched the footie match for a while.';
        const result = translator.translateBritish(string);

        assert.equal(result, 'We watched the <span class="highlight">soccer</span> match for a while.');
        done();

    });

    test('Translate { Paracetamol takes up to an hour to work. } to American English', done => {
        
        const string = 'Paracetamol takes up to an hour to work.';
        const result = translator.translateBritish(string);

        assert.equal(result, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
        done();

    });

    test('Translate { First, caramelise the onions. } to American English', done => {
        
        const string = 'First, caramelise the onions.';
        const result = translator.translateBritish(string);

        assert.equal(result, 'First, <span class="highlight">caramelize</span> the onions.');
        done();

    });

    test('Translate { I spent the bank holiday at the funfair. } to American English', done => {
        
        const string = 'I spent the bank holiday at the funfair.';
        const result = translator.translateBritish(string);

        assert.equal(result, 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
        done();

    });

    test('Translate { I had a bicky then went to the chippy. } to American English', done => {
        
        const string = 'I had a bicky then went to the chippy.';
        const result = translator.translateBritish(string);

        assert.equal(result, 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.');
        done();

    });

    test('Translate { I\'ve just got bits and bobs in my bum bag. } to American English', done => {
        
        const string = 'I\'ve just got bits and bobs in my bum bag.';
        const result = translator.translateBritish(string);

        assert.equal(result, 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.');
        done();

    });

    test('Translate { The car boot sale at Boxted Airfield was called off. } to American English', done => {
        
        const string = 'The car boot sale at Boxted Airfield was called off.';
        const result = translator.translateBritish(string);

        assert.equal(result, 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
        done();

    });

    test('Translate { Have you met Mrs Kalyani? } to American English', done => {
        
        const string = 'Have you met Mrs Kalyani?';
        const result = translator.translateBritish(string);

        assert.equal(result, 'Have you met <span class="highlight">Mrs.</span> Kalyani?');
        done();

    });

    test('Translate { Prof Joyner of King\'s College, London. } to American English', done => {
        
        const string = 'Prof Joyner of King\'s College, London.';
        const result = translator.translateBritish(string);

        assert.equal(result, '<span class="highlight">Prof.</span> Joyner of King\'s College, London.');
        done();

    });

    test('Translate { Tea time is usually around 4 or 4.30. } to American English', done => {
        
        const string = 'Tea time is usually around 4 or 4.30.';
        const result = translator.translateBritish(string);

        assert.equal(result, 'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
        done();

    });

    test('Translate { Tea time is usually around 4 or 4.30. } to American English', done => {
        
        const string = 'Tea time is usually around 4 or 4.30.';
        const result = translator.translateBritish(string);

        assert.equal(result, 'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
        done();

    });

    test('Highlight differences { Mangoes are my favorite fruit. } when translated to British English', done => {
        
        const string = 'Mangoes are my favorite fruit.';
        const result = translator.translateAmerican(string);

        assert.equal(result, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
        done();

    });

    test('Highlight differences { I ate yogurt for breakfast. } when translated to British English', done => {
        
        const string = 'I ate yogurt for breakfast.';
        const result = translator.translateAmerican(string);

        assert.equal(result, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
        done();

    });

    test('Highlight differences { We watched the footie match for a while. } when translated to American English', done => {
        
        const string = 'We watched the footie match for a while.';
        const result = translator.translateBritish(string);

        assert.equal(result, 'We watched the <span class="highlight">soccer</span> match for a while.');
        done();

    });

    test('Highlight differences { Paracetamol takes up to an hour to work. } when translated to American English', done => {
        
        const string = 'Paracetamol takes up to an hour to work.';
        const result = translator.translateBritish(string);

        assert.equal(result, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
        done();

    });

});