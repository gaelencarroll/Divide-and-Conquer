function findFloor(arr, num, low = 0, high = arr.length-1) {
    let middle = Math.floor((low+high)/2)
    if(num >= arr[high]){
        return arr[high]
    }
    if(low > high){
        return -1
    }
    if(arr[middle] === num){
        return arr[middle]
    }
    if(num < arr[middle]){
        return findFloor(arr, num, low, mid-1)
    }
    if(middle>0 && num < arr[middle] && arr[middle -1] <= num){
        return arr[middle-1]
    }
    return findFloor(arr, num, mid+1, high)
}

module.exports = findFloor