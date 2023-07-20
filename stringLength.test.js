const stringLength = require('./stringLength');

test('stringLength returns the length of a string', () => {
    expect(stringLength('Hello World!')).toBe(12);
    });