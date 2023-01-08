const { toBool, all, some, none } = require('./solutions');

describe('Problem 9 - toBool(), all(), none() functions', function () {
  describe('toBool()', function () {
    test('pure boolean values work as expected', function () {
      expect(toBool(true)).toBe(true);
      expect(toBool(false)).toBe(false);
    });

    test('various forms of Yes should return true', function () {
      expect(toBool('Yes')).toBe(true);
      expect(toBool('yes')).toBe(true);
      expect(toBool('YES')).toBe(true);
      expect(toBool('YeS')).toBe(true);
      expect(toBool('YEs')).toBe(true);
      expect(toBool('Y')).toBe(true);
      expect(toBool('y')).toBe(true);
    });

    test('various forms of Oui (French) should return true', function () {
      expect(toBool('Oui')).toBe(true);
      expect(toBool('oui')).toBe(true);
      expect(toBool('OUI')).toBe(true);
      expect(toBool('OuI')).toBe(true);
      expect(toBool('OUi')).toBe(true);
      expect(toBool('O')).toBe(true);
      expect(toBool('o')).toBe(true);
    });

    test('various forms of No should return false', function () {
      expect(toBool('No')).toBe(false);
      expect(toBool('no')).toBe(false);
      expect(toBool('nO')).toBe(false);
      expect(toBool('n')).toBe(false);
      expect(toBool('N')).toBe(false);
    });

    test('various forms of Non (French) should return false', function () {
      expect(toBool('Non')).toBe(false);
      expect(toBool('non')).toBe(false);
      expect(toBool('nON')).toBe(false);
      expect(toBool('NoN')).toBe(false);
    });

    test('various forms of True should return true', function () {
      expect(toBool('True')).toBe(true);
      expect(toBool('true')).toBe(true);
      expect(toBool('TRUE')).toBe(true);
      expect(toBool('TruE')).toBe(true);
      expect(toBool('TRuE')).toBe(true);
      expect(toBool('TRue')).toBe(true);
      expect(toBool('trUE')).toBe(true);
      expect(toBool('truE')).toBe(true);
      expect(toBool('t')).toBe(true);
      expect(toBool('T')).toBe(true);
    });

    test('various forms of Vrai (French) should return true', function () {
      expect(toBool('Vrai')).toBe(true);
      expect(toBool('vrai')).toBe(true);
      expect(toBool('VRAI')).toBe(true);
      expect(toBool('VraI')).toBe(true);
      expect(toBool('VRaI')).toBe(true);
      expect(toBool('vRAI')).toBe(true);
      expect(toBool('vrAI')).toBe(true);
      expect(toBool('vraI')).toBe(true);
      expect(toBool('v')).toBe(true);
      expect(toBool('V')).toBe(true);
    });

    test('various forms of False should return false', function () {
      expect(toBool('False')).toBe(false);
      expect(toBool('false')).toBe(false);
      expect(toBool('FALSE')).toBe(false);
      expect(toBool('FALSe')).toBe(false);
      expect(toBool('FALSe')).toBe(false);
      expect(toBool('FALse')).toBe(false);
      expect(toBool('FAlse')).toBe(false);
      expect(toBool('falsE')).toBe(false);
      expect(toBool('falSE')).toBe(false);
      expect(toBool('faLSE')).toBe(false);
      expect(toBool('fALSE')).toBe(false);
      expect(toBool('f')).toBe(false);
      expect(toBool('F')).toBe(false);
    });

    test('various forms of Faux (French) should return false', function () {
      expect(toBool('Faux')).toBe(false);
      expect(toBool('faux')).toBe(false);
      expect(toBool('FAUX')).toBe(false);
      expect(toBool('FAUx')).toBe(false);
      expect(toBool('FAux')).toBe(false);
      expect(toBool('Faux')).toBe(false);
      expect(toBool('fAUX')).toBe(false);
      expect(toBool('faUX')).toBe(false);
      expect(toBool('fauX')).toBe(false);
    });

    test('positive numbers should be true', function () {
      for (let i = 1; i < 1000; i++) {
        expect(toBool(i)).toBe(true);
      }
    });

    test('zero should be false', function () {
      expect(toBool(0)).toBe(false);
    });

    test('negative numbers should be false', function () {
      for (let i = 1; i < 1000; i++) {
        expect(toBool(i * -1)).toBe(false);
      }
    });

    test('various non-values should throw', function () {
      expect(() => toBool(undefined)).toThrow(new Error('invalid value'));
      expect(() => toBool()).toThrow(new Error('invalid value'));
      expect(() => toBool(null)).toThrow(new Error('invalid value'));
    });
  });

  /**
 *  * Yes, yes, YES, Y, Oui, oui, OUI, O, t, TRUE, true, True, vrai, V, VRAI, 1, 2, ...some positive number
 * No, no, NO, Non, non, NON, N, n, f, FALSE, false, False, FAUX, faux, Faux, 0, -1, -2, ...some negative number

 */

  describe('all()', function () {
    test('single "true" value works the same as toBool()', function () {
      expect(all(true)).toBe(true);
      expect(all('true')).toBe(true);
      expect(all(10000)).toBe(true);
    });

    test('single "false" value works the same as toBool()', function () {
      expect(all(false)).toBe(false);
      expect(all('false')).toBe(false);
      expect(all(-10000)).toBe(false);
    });

    test('lists of normalized true values results in true', function () {
      expect(
        all(
          'Yes',
          'yes',
          'YES',
          'Y',
          'Oui',
          'oui',
          'OUI',
          'O',
          't',
          'TRUE',
          true,
          'True',
          'VRAI',
          'vrai',
          'V',
          1,
          2,
          3,
          100000
        )
      ).toBe(true);
    });

    test('lists of mostly normalized true values results in false', function () {
      // Last value switched to false
      expect(
        all(
          'Yes',
          'yes',
          'YES',
          'Y',
          'Oui',
          'oui',
          'OUI',
          'O',
          't',
          'TRUE',
          true,
          'True',
          'VRAI',
          'vrai',
          'V',
          1,
          2,
          3,
          -100000
        )
      ).toBe(false);
    });
  });

  describe('some()', function () {
    test('single "true" value works the same as toBool()', function () {
      expect(some(true)).toBe(true);
      expect(some('true')).toBe(true);
      expect(some(10000)).toBe(true);
    });

    test('single "false" value works the same as toBool()', function () {
      expect(some(false)).toBe(false);
      expect(some('false')).toBe(false);
      expect(some(-10000)).toBe(false);
    });

    test('lists of normalized true values results in true', function () {
      expect(
        some(
          'Yes',
          'yes',
          'YES',
          'Y',
          'Oui',
          'oui',
          'OUI',
          'O',
          't',
          'TRUE',
          true,
          'True',
          'VRAI',
          'vrai',
          'V',
          1,
          2,
          3,
          100000
        )
      ).toBe(true);
    });

    test('lists of mostly normalized true values results in true', function () {
      // Last value switched to false
      expect(
        some(
          'Yes',
          'yes',
          'YES',
          'Y',
          'Oui',
          'oui',
          'OUI',
          'O',
          't',
          'TRUE',
          true,
          'True',
          'VRAI',
          'vrai',
          'V',
          1,
          2,
          3,
          0
        )
      ).toBe(true);
    });
  });

  describe('none()', function () {
    test('lists of normalized false values results in true', function () {
      expect(
        none(
          'No',
          'Non',
          'no',
          'non',
          'NO',
          'NON',
          'N',
          'n',
          'f',
          'FAUX',
          'faux',
          'FALSE',
          false,
          'False',
          0,
          -1,
          -100000
        )
      ).toBe(true);
    });

    test('lists of mostly normalized false values results in false', function () {
      // Last value switched to true
      expect(
        none(
          'No',
          'Non',
          'no',
          'non',
          'NO',
          'NON',
          'N',
          'n',
          'f',
          'FAUX',
          'faux',
          'FALSE',
          false,
          'False',
          0,
          -1,
          100000
        )
      ).toBe(false);
    });
  });
});
