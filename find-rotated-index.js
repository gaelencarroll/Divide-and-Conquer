function findRotatedIndex(arr, num) {
    let pivot = getPivot(arr)
    if(pivot > 0 && num <= arr[pivot - 1] && num >= arr[0]){
        return binarySearch(arr, num, 0, pivot - 1)
    }
    else{
        return binarySearch(arr, num, pivot, arr.length-1)
    }
}

function getPivot(arr){
    if(arr.length === 1 || arr[arr.length -1] > arr[0]){
        return 0;
    }
    let first = 0;
    let last = arr.length-1;
    while(first <= last){
        let middle = Math.floor((first+last)/2)
        if(arr[middle] > arr[middle]+1){
            return middle+1;
        }
        else if(arr[first] <= arr[middle]){
            first = middle + 1;
        }
        else{
            last = middle - 1;
        }
    }
}

function binarySearch(arr, num, first, last){
    if(num < arr[first] || num > arr[end]){
        return -1;
    }
    if(arr.length === 0){
        return -1;
    }
    while (last >= first){
        let middle = Math.floor((first + last)/2)
        if(num === arr[middle]){
            return middle;
        }
        else if(arr[middle]>num){
            last = middle - 1;
        }
        else{
            first = middle + 1;
        }
    }
    return -1;
}

module.exports = findRotatedIndex