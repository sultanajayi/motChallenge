// // let randomNum = Math.random()         // generates 0 to 0.999
// // let numBtnZeroAndTen = randomNum * 11

// // console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

// // let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
// // console.log(randomNumRoundToFloor)    // this gives between 0 and 10

// let challenge = '30 Days Of JavaScript'
// let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// let sentence = 'You cannot end a sentence with because because because is a conjunction'

// console.log(challenge)
// console.log(challenge.length)
// console.log(challenge.toUpperCase())
// console.log(challenge.toLowerCase())
// console.log(challenge.substr(2,21))
// console.log(challenge.substring(0,3))
// console.log(challenge.includes('Script'))
// console.log(challenge.split())
// console.log(challenge.split(' '))
// console.log(string.split(' '))
// console.log(challenge.replace('JavaScript','Python'))
// console.log(challenge.charAt(15))
// console.log(challenge.indexOf('a'))
// console.log(challenge.lastIndexOf('a'))
// console.log(sentence.indexOf('because'))
// console.log(sentence.lastIndexOf('because'))
// console.log(sentence.search('because'))
// console.log(challenge.trim())
// console.log(challenge.startsWith('30'))
// console.log(challenge.endsWith('JavaScript'))
// console.log(challenge.match('a'))
// console.log(challenge.concat('30 Days of', 'JavaScript'))
// console.log(challenge.repeat(2))

// console.log(`The quote\n\'There is no exercise better for the heart than reaching down and lifting people up.\'\n by John Holmes teaches us to help one another.`)

// console.log(`\" Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"`)

// // 

// let parseFloat = '9.8'
// let numFloat = +parseFloat

// console.log(Math.ceil(+parseFloat))

// let check = " python and jargon "

// console.log(check.search('on'))

// let find = 'I hope this course is not full of jargon'

// console.log(find.search('jargon'))

// 
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

console.log(`1\t1\t1\t1\t1`) 
console.log(`2\t1\t2\t4\t8`)
console.log(`3\t1\t3\t9\t27`)
console.log(`4\t1\t4\t16\t64`)
console.log(`5\t1\t5\t25\t125`)

let sub = 'You cannot end a sentence with because because because is a conjunction'
console.log(sub.length)
console.log(sub.substring(31,39,47))


let count = 'You cannot end a sentence with because because because is a conjunction'

console.log(count.match('because'))
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

// 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let monthlyEarns = 5000
let annualBonus = 10000
let course = 15000

let totalMonthly = monthlyEarns*12
let totalCourse = course*12

console.log(totalCourse+totalMonthly+annualBonus)