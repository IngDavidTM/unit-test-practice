const stringLength = require('./task1.js');

test ('The string has 11 characters', () => {
    expect (stringLength('abcdefghijk')).toBe(11)
})
