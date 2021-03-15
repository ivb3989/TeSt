function validPairs(str) {
    let result = [];
        for (const ch of str.split("")) {
            switch (ch) {
                case "(":
                    result.push(1) ;
                    break;
                case "[":
                    result.push(2);
                    break;
                case "{":
                    result.push(3);
                    break;
                case "}":
                    if (result[result.length - 1] != 3) return false;
                    result.pop();
                    break;
                case "]":
                    if (result[result.length - 1] != 2) return false;
                    result.pop();
                    break;
                case ")":
                    if (result[result.length - 1] != 1) return false;
                    result.pop();
                    break;
                default:
                    break;
            }
        }
    return result.length == 0;
}

console.log(validPairs("[{()}]")); //true
console.log(validPairs("[{)}]")); //false
