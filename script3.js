function validPairs(str) {
    if (str.includes('[') && str.includes(']')) {
        if (str.includes('{') && str.includes('}')) {
            if (str.includes('(') && str.includes(')')) {
                return true;
            }
        }
    }
    return false;
}

console.log(validPairs('[{()}]')); //true
console.log(validPairs('[{)}]')); //false
