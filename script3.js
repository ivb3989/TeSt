function validPairs(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] + str[j] == '()' || str[i] + str[j] == '{}' || str[i] + str[j] == '[]') {
                newStr = newStr + str[i] + str[j];
            }
        }
    }
    let bracket1 = newStr.indexOf('()');
    let bracket2 = newStr.indexOf('[]');
    let bracket3 = newStr.indexOf('{}');
    if (bracket1 == -1 || bracket2 == -1 || bracket3 == -1) return false;
    else return true;
}

console.log(validPairs('[{()}]')); //true
console.log(validPairs('[{)}]')); //false
