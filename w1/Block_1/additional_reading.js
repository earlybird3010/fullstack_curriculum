let x = 5
x = "kakaka"
console.log(x)

console.log(1 / 0)

//Overflow
console.log(Number.MAX_VALUE + Number.MAX_VALUE) //->overflow to Infinity, note that the second operand must be large enough to cause this overflow
console.log(Number.MAX_SAFE_INTEGER + 1 == Number.MAX_SAFE_INTEGER + 2) //->true
console.log(Number.MAX_SAFE_INTEGER + 12 == Number.MAX_SAFE_INTEGER + 11) //->false, which is pretty weird

    // BigInt
console.log(Number.MAX_SAFE_INTEGER)
console.log(9007199254740993n) //->9007199254740993n
console.log(9007199254740993) //->9007199254740992

// Unary operator
console.log(typeof undefined)
console.log(typeof null)

console.log(typeof 1.5)
console.log(typeof `hahaha`)
console.log(typeof true)

console.log(typeof 10n)
console.log(typeof Math)
console.log(typeof Symbol("id"))
console.log(typeof console.log)
