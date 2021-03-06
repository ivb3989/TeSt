function validPairs(str) {
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length; j++) {
            if (str[i] + str[j] == '()' || str[i] + str[j] == '{}' || str[i] + str[j] == '[]') {
                newStr = newStr + str[i] + str[j];
            }
        }
    }
    var bracket1 = newStr.indexOf('()');
    var bracket2 = newStr.indexOf('[]');
    var bracket3 = newStr.indexOf('{}');
    if (bracket1 == -1 || bracket2 == -1 || bracket3 == -1) return false;
    else return true;
}

console.log(validPairs('[{()}]')); //true
console.log(validPairs('[{)}]')); //false