function sortedFrequency(arr, num) {
    let first = getFirst(arr, num)
    let last = getLast(arr,num)
    if(first == -1){
        return first;
    }
    return last-first+1;
}

function getFirst(arr, num, low=0, high=arr.length-1){
    if(high >= low){
        let middle = Math.floor((low+high)/2)
        if((middle===0 || num>arr[middle-1]) && arr[middle] === num){
            return middle
        }
        else if(num > arr[middle]){
            return getFirst(arr, num, middle+1, high)
        }
        else{
            return getFirst(arr, num, low, middle-1)
        }
    }
    return -1;
}

function getLast(arr, num, low=0, high=arr.length-1){
    if(high >= low){
        let middle = Math.floor((low+high)/2)
        if((middle=== arr.length-1 || num>arr[middle+1]) && arr[middle] === num){
            return middle
        }
        else if(num < arr[middle]){
            return getLast(arr, num, low, middle-1)
        }
        else{
            return getLast(arr, num, middle+1, high)
        }
    }
    return -1;
}

module.exports = sortedFrequency