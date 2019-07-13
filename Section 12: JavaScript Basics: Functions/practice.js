function isEven(num) {
    return num % 2 === 0
}

function factorial(num) {
    var res = 1
    for (var i = num; i > 1; i--) {
        res *= i 
    }
    return res
}

// /-/g takes all instances of the char inside the /s and replaces with the second value
// replace is not inplace
function kebab_to_snake(str) {
    return str.replace(/-/g, "_")
}
