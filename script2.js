function sumZero(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == 0) {
                result.push(arr[i]);
                result.push(arr[j]);
            }
        }
    }
    return result;
}
    
console.log(
    sumZero([-4,-3,-2,-1,0,1,2,5])
); //[[-2, 2]]