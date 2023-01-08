const { createVideo } = require('./solutions');

describe('Problem 2 - createVideo() function', function () {
  test('<video> is correct for given src', function () {
    let src = 'https://web222.ca';
    let result = createVideo(src);
    expect(result).toBe('<video src="https://web222.ca"></video>');
  });

  test('<video> HTML is correct for src value that needs to be trimmed', function () {
    let src = '   https://web222.ca  ';
    let result = createVideo(src);
    expect(result).toBe('<video src="https://web222.ca"></video>');
  });

  test('<video> HTML is correct when loop is true', function () {
    let src = 'https://web222.ca';
    let loop = true;
    let result = createVideo(src, loop);
    expect(result).toBe('<video src="https://web222.ca" loop></video>');
  });

  test('<video> HTML is correct when loop is not a boolean true', function () {
    let src = 'https://web222.ca';
    let loop = 'true';
    let result = createVideo(src, loop);
    expect(result).toBe('<video src="https://web222.ca"></video>');
  });

  test('<video> HTML is correct when muted is true', function () {
    let src = 'https://web222.ca';
    let muted = true;
    let result = createVideo(src, false, muted);
    expect(result).toBe('<video src="https://web222.ca" muted></video>');
  });

  test('<video> HTML is correct when muted is not a boolean true', function () {
    let src = 'https://web222.ca';
    let muted = 'true';
    let result = createVideo(src, false, muted);
    expect(result).toBe('<video src="https://web222.ca"></video>');
  });

  test('<video> HTML is correct for various combinations of loop and muted values', function () {
    let src = 'https://web222.ca';
    expect(createVideo(src, false, false)).toBe('<video src="https://web222.ca"></video>');
    expect(createVideo(src, true, false)).toBe('<video src="https://web222.ca" loop></video>');
    expect(createVideo(src, false, true)).toBe('<video src="https://web222.ca" muted></video>');

    // Allow the order of loop and muted to be reversed (i.e., it doesn't matter which is first)
    const videoRe = /^<video src="https:\/\/web222.ca" (loop muted|muted loop)><\/video>$/;
    expect(createVideo(src, true, true)).toEqual(expect.stringMatching(videoRe));
  });
});
