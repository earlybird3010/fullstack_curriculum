// Data
console.log((13).toString(2))
console.log("a".charCodeAt(0).toString(2))

// Values
// Numbers
console.log(0.1 + 0.2 == 0.3) //Floating point imprecision
console.log(1 + 2 == 3) // Use integrals instead
console.log(Math.PI) // Floating point numbers
console.log(9e16 + 1) // Overflow
console.log(0.4 + 0.5 == 0.9) // This one outputs true, so be careful when use arithmetic operations on floating point numbers

console.log(Infinity)
console.log(-Infinity)
console.log(0 / 0) //NaN
console.log (Infinity - Infinity) //NaN

console.log(typeof(1+ 2 * 3.5))

// Strings
console.log('Taeyang sings: "I am a good boy!"')
console.log("I am tall!, and I hate 'math'!")
let name = "Chau"
let age = 10 + 13
console.log(`Hello! My name is ${name}, and I am ${age} years old!`)
console.log("This is the first line.\nThis is the second line.")
console.log("haha" + "hoho")

console.log(typeof "muahahaha")

//Boolean
console.log(3 > 2)
console.log(3 < 2)
console.log("AZZZZZZZZZZZZ" < "B")
console.log(Number(true).toString(2))
console.log(Number(false).toString(2))
console.log(NaN == NaN) //false
console.log(Infinity == Infinity - 1) //true (avoid working with special numbers)

//Null
console.log(typeof null)

//Undefined
console.log(typeof undefined)

console.log(null && true)

let my_var
console.log(my_var)

// Type conversion
console.log(8 * null) //-> 0
console.log("5" - 1) //-> 4
console.log("5" + 1) //-> 51
console.log("five" * 2) //-> NaN
console.log(false == 0) //-> true (this one is kind of standard in C)
console.log("5" * 2) //-> 10

    // Weird stuff of ==
console.log(null == undefined) //->true
console.log(false == 0) //->true, like in C
console.log(false == '') //->true, like in C
console.log(false == '\0')

console.log(false ?? 100) //->false
console.log(null ?? 100) //->100
console.log(undefined ?? 100) //-> 100

//////////////////////////////////////////////////////////////////////////////////