function stringLength(string) {
    
    if (string.length < 1 || string.length > 10) {
        throw new Error('The length of the string must be between 1 and 10 characters long.');
    }
}
module.exports = stringLength;