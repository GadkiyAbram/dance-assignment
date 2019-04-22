function arraysCompare(array, arrays){
    let resultArr = [0, 0, 0, 0];
    arrays.forEach((arr) => {                        //[0, 0, 1, 0]  finArray

        for (let i = 0; i < arr.length; i++) {       //[0, 0, 1, 0]  arr1

            if (arr[i] != array[i]) {                //[0, 0, 0, 1]  arr2
                resultArr[i] = arr[i];               //[0, 0, 0, 0]  array
            }
        }
    })
    return resultArr;
}