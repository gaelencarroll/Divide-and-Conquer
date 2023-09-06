function countZeroes(arr) {
  let first = getFirst(arr)
  if(first === -1){
    return 0
  }
  else{
    return arr.length - first;
  }
}

function getFirst(arr, low = 0, high = arr.length-1){
    if(high >= low){
        let middle = low + Math.floor((high-low)/ 2)

        if(middle === 0 || arr[middle === 0] || arr[middle-1] === 0 ){
            return middle
        }
        else if(arr[middle] === 1){
            return(getFirst(arr, middle + 1, high))
        }
        else{
            return getFirst(arr, low, middle-1)
        }
    }
    return -1
}

module.exports = countZeroes