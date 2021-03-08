const { expect, test } = require('@jest/globals');
const { describe } = require('yargs');

const {
    letterTranslate,
    splitStr,
    joinArrToStr,
    isStringEnglish,
    runTranslator
  } = require('./morse.js');


describe('letterTranslate tests', () => {
    const toMorse = {
        'a': '.--',
        'b': '--.',
        'c': '-.-.'
    }

    const toEnglish = Object.entries(toMorse).reduce((acc, entry) => {
        acc[entry[1]] = entry[0];
        return acc;
    }, {});

    const valueNotExistsError = new Error('Key does\'t exist')

    test('undefined input', () => {
        expect(() => letterTranslate(undefined, toMorse)).toThrowError(valueNotExistsError);
        expect(() => letterTranslate(undefined, toEnglish)).toThrowError(valueNotExistsError);
    });

    test('character input that doesn\'t exist in object', () => {
        expect(() => letterTranslate('d', toMorse)).toThrowError(valueNotExistsError);
    });

    test('character input that does exist', () => {
        expect(letterTranslate('a')).toBe(toMorse['a']);
        expect(letterTranslate('.--', toEnglish)).toBe(toEnglish['.--']);
    });
});

xdescribe('splitStr tests', () => {
    const englishStr = 'I am a test';
    const englishArr = [['I'], ['a', 'm'], ['a'], ['t','e','s','t']]
    const morseStr = '.-- . / .... .- -.. / -.-. .... .. .--. ...'
    const morseArr = [['.--', '.'],['....', '.- -..'],['-.-.', '....', '..', '.--.', '...']]
    const arrayTest = ['I', 'am', 'not', 'a', 'string']
    const numTest = 10;
    const englishWordDel = ' ';
    const englishCharDel = '';
    const morseWordDel = '/';
    const morseCharDel = ' ';

    const inputNotStr = new Error('Input is not a string')

    test('Not a string input', () => {
        expect(() => splitStr(arrayTest, englishWordDel, englishCharDel)).toThrowError(inputNotStr);

        expect(() => splitStr(numTest, '', '')).toThrowError(inputNotStr);
    });

    test('Word delimiter is not a string', () => {
        expect(() => splitStr(englishStr, arrayTest, englishCharDel)).toThrowError(inputNotStr);

        expect(() => splitStr(englishStr, numTest, englishCharDel)).toThrowError(inputNotStr);
    })

    test('Character delimiter is not a string', () => {
        expect(() => splitStr(englishStr, englishWordDel, arrayTest)).toThrowError(inputNotStr);
        expect(() => splitStr(englishStr, englishWordDel, numTest)).toThrowError(inputNotStr);
    })

    test('check output is a 2D array', () => {
        expect(splitStr(englishStr, englishWordDel, englishCharDel).length).toBe(2);
        expect(splitStr(morseStr, morseWordDel, morseCharDel).length).toBe(2)
    });

    test('check output is correct', () => {
        expect(splitStr(englishStr, englishWordDel, englishCharDel)).toMatchObject(englishArr);

        expect(splitStr(morseStr, morseWordDel, morseCharDel).length).toMatchObject(morseArr)
    });
});

xdescribe('joinArrToStr tests', () => {
    const englishStr = 'I am a test';
    const englishArr = [['I'], ['a', 'm'], ['a'], ['t','e','s','t']]
    const morseStr = '.-- . / .... .- -.. / -.-. .... .. .--. ...'
    const morseArr = [['.--', '.'],['....', '.- -..'],['-.-.', '....', '..', '.--.', '...']]
    const arrayTest = ['I', 'am', 'not', 'a', 'string']
    const numTest = 10;
    const englishWordDel = ' ';
    const englishCharDel = '';
    const morseWordDel = '/';
    const morseCharDel = ' ';

    const inputNotStr = new Error('Input is not a string')

    const inputNotArr = new Error('Input is not a 2D Array')

    test('Not a array input', () => {
        expect(() => joinArrToStr(englishStr, englishWordDel, englishCharDel)).toThrowError(inputNotArr);

        expect(() => joinArrToStr(numTest, englishWordDel, englishCharDel)).toThrowError(inputNotStr);
    });

    test('Word delimiter is not a string', () => {
        expect(() => joinArrToStr(englishArr, arrayTest, englishCharDel)).toThrowError(inputNotStr);

        expect(() => joinArrToStr(englishArr, numTest, englishCharDel)).toThrowError(inputNotStr);
    })

    test('Character delimiter is not a string', () => {
        expect(() => joinArrToStr(englishArr, englishWordDel, arrayTest)).toThrowError(inputNotStr);
        expect(() => joinArrToStr(englishArr, englishWordDel, numTest)).toThrowError(inputNotStr);
    })

    test('check output to a string', () => {
        expect(typeof splitStr(englishArr, englishWordDel, englishCharDel)).toBe('string');

        expect(typeof splitStr(morseArr, morseWordDel, morseCharDel).length).toBe('string')
    });

    test('check output is correct', () => {
        expect(splitStr(englishArr, englishWordDel, englishCharDel)).toMatchObject(englishStr);

        expect(splitStr(morseArr, morseWordDel, morseCharDel).length).toMatchObject(morseStr)
    });

});

xdescribe('isStringEnglish test', () => {
    const arrayTest = ['I', 'am', 'not', 'a', 'string']
    const numTest = 10;
    const englishStr = 'I am a test';
    const morseStr = '.-- . / .... .- -.. / -.-. .... .. .--. ...'

    const inputNotStr = new Error('Input is not a string')

    test('input is not a string', () => {
        expect(() => isStringEnglish(arrayTest)).toThrowError(inputNotStr);

        expect(() => isStringEnglish(numTest)).toThrowError(inputNotStr);
    });

    test('output is a boolen', () => {
        expect(typeof isStringEnglish(englishStr)).toBe("boolean");
    });

    test('output is correct', () => {
        expect(isStringEnglish(englishStr)).toBe(true);

        expect(isStringEnglish(morseStr)).toBe(false);
    });
});
