const stringLength = require('./stringLength.js');
// test if stringLength is less than 1 or greater than 10 to throw error  
test('stringLength', () => {
    expect(() => stringLength('')).toThrow('The length of the string must be between 1 and 10 characters long.');
    expect(() => stringLength('12345678901')).toThrow('The length of the string must be between 1 and 10 characters long.');
    expect(() => stringLength('1234567890')).not.toThrow('The length of the string must be between 1 and 10 characters long.');
});
