const { cleanUp } = require('./solutions');

describe('Problem 1 - cleanUp() function', function () {
  test('should return a string', function () {
    let result = cleanUp('This should return a string');
    expect(typeof result).toBe('string');
  });

  test('should return a string unchanged if it does not break any rules', function () {
    let result = cleanUp('This should be unchanged');
    expect(result).toBe('This should be unchanged');
  });

  test('returns string with one space after a period vs two', function () {
    let result = cleanUp('This should have one space.  But it has two.');
    expect(result).toBe('This should have one space. But it has two.');
  });

  test('returns string with one space after a question mark vs two', function () {
    let result = cleanUp('This should have one space?  But it has two.');
    expect(result).toBe('This should have one space? But it has two.');
  });

  test('returns string with one space after a exclamation mark vs two', function () {
    let result = cleanUp('This should have one space!  But it has two.');
    expect(result).toBe('This should have one space! But it has two.');
  });

  test('returns string with one space after multiple periods, exclamation or question marks', function () {
    let result = cleanUp('One.  Two.  Three!  Four!  Five?  Six?  Seven.');
    expect(result).toBe('One. Two. Three! Four! Five? Six? Seven.');
  });

  test('returns string with single-quotes vs. double-quotes', function () {
    let result = cleanUp('This should use "single" quotes');
    expect(result).toBe(`This should use 'single' quotes`);
  });

  test('returns string with all double-quotes replaced with single-quotes', function () {
    let result = cleanUp(`This "has" multiple "uses" of "quotes" and some are already 'correct'`);
    expect(result).toBe(`This 'has' multiple 'uses' of 'quotes' and some are already 'correct'`);
  });

  test('returns string with space after a ( removed', function () {
    let result = cleanUp('This ( should) not have a space');
    expect(result).toBe(`This (should) not have a space`);
  });

  test('returns string with space before a ) removed', function () {
    let result = cleanUp('This (should ) not have a space');
    expect(result).toBe(`This (should) not have a space`);
  });

  test('returns string with multiple spaces before/after (...) removed', function () {
    let result = cleanUp('This (       should ) not ( have       ) a (space)');
    expect(result).toBe(`This (should) not (have) a (space)`);
  });

  test('returns string with any/all formatting errors cleaned up', function () {
    let result = cleanUp(
      `This is a sentence.  This is also a sentence!  But is this a sentence?  It (  is ), really it "is" ( trust "me" ).`
    );
    expect(result).toBe(
      `This is a sentence. This is also a sentence! But is this a sentence? It (is), really it 'is' (trust 'me').`
    );
  });
});
