const { toProvince } = require('./solutions');

describe('Problem 4 - toProvince() function', function () {
  test('Invalid postal codes return null', () => {
    expect(toProvince('INVALID')).toEqual(null);
    expect(toProvince('ZZZZZZ')).toEqual(null);
    expect(toProvince('000000')).toEqual(null);
    expect(toProvince('')).toEqual(null);
  });

  test('Valid postal codes without a space work', () => {
    expect(toProvince('K6A1A5')).toEqual('ON');
  });

  test('Valid postal codes with lower-case letters work', () => {
    expect(toProvince('k6a1a5')).toEqual('ON');
  });

  test('Ontario', () => {
    // K
    expect(toProvince('K6A 1A5')).toEqual('ON');
    expect(toProvince('K6A 1A5', true)).toEqual('Ontario');
    // L
    expect(toProvince('L1A 5N3')).toEqual('ON');
    expect(toProvince('L1A 5N3', true)).toEqual('Ontario');
    // M
    expect(toProvince('M5W 1P5')).toEqual('ON');
    expect(toProvince('M5W 1P5', true)).toEqual('Ontario');
    // N
    expect(toProvince('N0B 1K0')).toEqual('ON');
    expect(toProvince('N0B 1K0', true)).toEqual('Ontario');
    // P
    expect(toProvince('P3A 8M6')).toEqual('ON');
    expect(toProvince('P3A 8M6', true)).toEqual('Ontario');
  });

  test('Quebec', () => {
    // G
    expect(toProvince('G3A 7G2')).toEqual('QC');
    expect(toProvince('G3A 7G2', true)).toEqual('Quebec');
    // H
    expect(toProvince('H9H 4Y1')).toEqual('QC');
    expect(toProvince('H9H 4Y1', true)).toEqual('Quebec');
    // J
    expect(toProvince('J7P 2V3')).toEqual('QC');
    expect(toProvince('J7P 2V3', true)).toEqual('Quebec');
  });

  test('Nova Scotia', () => {
    expect(toProvince('B6L 7G2')).toEqual('NS');
    expect(toProvince('B6L 7G2', true)).toEqual('Nova Scotia');
  });

  test('New Brunswick', () => {
    expect(toProvince('E4H 6K1')).toEqual('NB');
    expect(toProvince('E4H 6K1', true)).toEqual('New Brunswick');
  });

  test('Manitoba', () => {
    expect(toProvince('R8N 9E1')).toEqual('MB');
    expect(toProvince('R8N 9E1', true)).toEqual('Manitoba');
  });

  test('British Columbia', () => {
    expect(toProvince('V1Y 5V4')).toEqual('BC');
    expect(toProvince('V1Y 4V4', true)).toEqual('British Columbia');
  });

  test('Prince Edward Island', () => {
    expect(toProvince('C0A 3H0')).toEqual('PE');
    expect(toProvince('C0A 3H0', true)).toEqual('Prince Edward Island');
  });

  test('Saskatchewan', () => {
    expect(toProvince('S0C 1W0')).toEqual('SK');
    expect(toProvince('S0C 1W0', true)).toEqual('Saskatchewan');
  });

  test('Alberta', () => {
    expect(toProvince('T0G 2G0')).toEqual('AB');
    expect(toProvince('T0G 2G0', true)).toEqual('Alberta');
  });

  test('Newfoundland and Labrador', () => {
    expect(toProvince('A0K 1B0')).toEqual('NL');
    expect(toProvince('A0K 1B0', true)).toEqual('Newfoundland and Labrador');
  });

  test('Nunavut, Northwest Territories', () => {
    expect(toProvince('X0G 0A0')).toEqual('NT');
    expect(toProvince('X0G 0A0', true)).toEqual('Northwest Territories and Nunavut');
  });

  test('Yukon', () => {
    expect(toProvince('Y0B 1T0')).toEqual('YT');
    expect(toProvince('Y0B 1T0', true)).toEqual('Yukon');
  });
});
