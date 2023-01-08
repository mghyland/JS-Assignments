const { buildQuery } = require('./solutions');

// function buildQuery(query, order, count, license) {

describe('Problem 10 - buildQuery() function', function () {
  function assertUrl(urlString, query, perPage, page, format) {
    let url = new URL(urlString);
    expect(url.origin).toBe('https://api.web222-example.org');
    expect(url.pathname).toBe('/v3/query');
    expect(url.searchParams.get('query')).toEqual(query);
    expect(url.searchParams.get('per_page')).toEqual(String(perPage));
    expect(url.searchParams.get('page')).toEqual(String(page));
    expect(url.searchParams.get('format')).toEqual(format);
  }

  test('correct values produce an expected url', function () {
    let url = buildQuery('butterfly', 10, 1, 'json');
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly', 10, 1, 'json');
  });

  test('query values are properly encoded on url', function () {
    let url = buildQuery('butterfly with special characters:/\\{}<>[]}`"', 25, 3, 'xml');
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly with special characters:/\\{}<>[]}`"', 25, 3, 'xml');
  });

  test('perPage below 1 throws but 1 works', function () {
    expect(() => buildQuery('butterfly', 0, 1, 'xml')).toThrow();

    let url = buildQuery('butterfly', 1, 1, 'xml');
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly', 1, 1, 'xml');
  });

  test('perPage above 100 throws but 100 works', function () {
    expect(() => buildQuery('butterfly', 101, 1, 'xml')).toThrow();

    let url = buildQuery('butterfly', 100, 1, 'xml');
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly', 100, 1, 'xml');
  });

  test('page below 1 throws but 1 works', function () {
    expect(() => buildQuery('butterfly', 1, 0, 'xml')).toThrow();

    let url = buildQuery('butterfly', 1, 1, 'xml');
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly', 1, 1, 'xml');
  });

  test('license must be one of the expected values', function () {
    ['xml', 'html', 'json'].forEach((format) => {
      let url = buildQuery('monarch butterfly', 50, 2, format);
      expect(typeof url).toEqual('string');
      assertUrl(url, 'monarch butterfly', 50, 2, format);
    });
  });

  test('formats other than the expected values will throw', function () {
    expect(() => buildQuery('butterfly', 1, 1, '')).toThrow();
    expect(() => buildQuery('butterfly', 1, 1)).toThrow();
    expect(() => buildQuery('butterfly', 1, 1, null)).toThrow();
    expect(() => buildQuery('butterfly', 1, 1, 'text')).toThrow();
  });
});
