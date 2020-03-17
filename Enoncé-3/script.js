var number = [10, 20, 30, 40] 
function nextInLine(arr, item) {

    "use strict";

    arr.push(item)
    console.log(+ arr[0])
    arr.shift()
    console.log(arr)


}