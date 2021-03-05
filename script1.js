function areAllLettersUnique(str) {
    let pos = 0;
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        while (true) {
            let foundPos = str.indexOf(str[i], pos);
            if (foundPos == -1) break;

            pos = foundPos + 1;
            count++;
        }
        if (count > 1) return false;
    }
    return true;
}

console.log(areAllLettersUnique('hello')); // false
console.log(areAllLettersUnique('world')); // true