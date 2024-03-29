function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
function isUniform(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (first !== arr[i]) {
            return false
        }
    }
    return true
}

function sumArray(arr) {
    var sum = 0;
    arr.forEach(function (value) {
        sum += value;
    });
    return sum
}

function maxNum(arr) {
    var max = arr[0];
    arr.forEach(function (value) {
        max = Math.max(max, value);
    });
    return max
}