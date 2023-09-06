function findRotationCount(arr, first=0, last=arr.length-1) {
    let middle = Math.floor((first + last)/2)
    if(first > last){
        return 0;
    }
    if(first === last){
        return last;
    }
    if(middle < high && arr[middle+1] < arr[middle]){
        return middle + 1;
    }
    if(middle > first && arr[middle] < arr[middle-1]){
        return middle;
    }
    if(arr[last] > arr[middle]){
        return findRotationCount(arr, first, middle-1)
    }
    return findRotationCount(arr, middle+1, last)
}

module.exports = findRotationCount