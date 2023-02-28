function insertionSort(arr){
    for(var i = 1; i< arr.length; i++){
        var currentVal = arr[i];
        for (var j=i-1; j >= 0 && arr[j]> currentVal; j--){
            arr[j+i] = arr[j]
        }
        arr[j+i]= currentVal;
        // console.log(arr);
    }
    return arr;
}

insertionSort([2,1,9,76,4])