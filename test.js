var a = Array.from(Array(10).keys());
console.log(`First array: ${a}`)
var b = []
a.forEach(x => b.push(x * 2))
console.log(`2nd array: ${b}`)