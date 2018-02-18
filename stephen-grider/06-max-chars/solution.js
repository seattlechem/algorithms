// Given a string, return the character that is
// most commonly used in the string.
// examples
// maxchar('abccccccd') === 'c'
let str = 'abcccccd';
function maxChar(str) {
    const charMap = {};
    for (let i of str){
        if(charMap[i]){
            charMap[i]++;
        } else {
            charMap[i] = 1;
        }
    }
    let maxValue = 0;
    let maxChar = ' ';
    for (let i in charMap){
        //find highest value and return that key
        if(charMap[i] > maxValue){
            maxValue = charMap[i];
            maxChar = i;
        }
        
    }
    return maxChar;
}

maxChar(str);