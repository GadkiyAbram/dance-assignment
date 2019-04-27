function arraysCompare(array, arrays, arr){
    let resultArr = arr.slice(0);

    arrays.forEach((arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != array[i]) {
                resultArr[i] = arr[i];
            }
        }
    });

    return resultArr;
}