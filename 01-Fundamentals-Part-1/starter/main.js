// Assigement JavaScript Fundamentals – Part 1
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console
const counry = 'somali'
const countinent = 'Africa'
const population = 6
console.log(counry + '', countinent + '', population)


// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

const isIsland = false;
const language = '';
const populations = 200
console.log(typeof isIsland)
console.log(typeof language)
console.log(typeof populations)



// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some
//     countries have multiple languages, but just choose one)
//     2. Think about which variables should be const variables (which values will never
//     change, and which might change?). Then, change these variables to const.
//     3. Try to change one of the changed variables now, and observe what happens

// let you can change
let myConrylanguage = ' arabic'
myConrylanguage = 'somali'
console.log(myConrylanguage)

// var you also can change var
var myConrylanguage2 = 'english'
myConrylanguage2 = 'suomi'
console.log(myConrylanguage2)

// const you can't change conts 
const myName = 'maxamud'
console.log(myName)




// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese

// 1.
let myCountrySplitHalf = 50 / 2;
console.log('each half will be living ', myCountrySplitHalf, 'miljon')

// 2. Increase the population of your country by 1 and log the result to the console
myCountrySplitHalf++;
console.log(myCountrySplitHalf)

//   3 .Finland has a population of 6 million. Does your country have more people than

myCountrySplitHalf += 10;
console.log(myCountrySplitHalf)

// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
myCountrySplitHalf = 33;
console.log(myCountrySplitHalf > 6)

// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese
let description = counry + ' is Africa' + countinent + population + 'and its 11 million'
console.log(description)
// people speak portuguese'



// LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

// 1
let population1 = 22;
if (population1 >= 33) {
    console.log(`${counry}  population is above average`)

}
else {
    console.log(`${counry}  population is 22 million below average' ${33 - population}`)
}


// 1. Predict the result of these 5 operations without executing them:
// console.log('9' - '5'); // 4
// console.log('19' - '13' + '17'); // 317
// console.log('19' - '13' + 17); // 23
// console.log('123'  '5' < 7); // false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143



/* Write your code below. Good luck! 🙂 */
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
const massMark = 78 // kg
const heightMark = 1.69 // pituus
const massJohn = 92  // kg
const heightJohn = 1.95 // pituus

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn)

if (BMIMark > BMIJohn) {
    console.log(`"Mark's BMI (${BMIMark}) is higher than John's! (${BMIJohn})`)
} else {
    console.log(`john's (${BMIJohn})  is higher than mark's! (${BMIMark}) `)
}

// template Template literals ovat uusi tapa tehdä merkkijonoja JavaScriptissä, 
// jotka lisäävät paljon tehokkaita uusia ominaisuuksia, kuten monirivisten merkkijonojen luomisen 
// helpommin ja paikkamerkkien käyttämisen lausekkeiden upottamiseen merkkijonoon

let myNames = 'maxamud '
let mylastNames = 'cabdi'
let birthday = 1995
// normaalisti kirjoitetaan täin
let myInformation = 'my name is ' + myNames + ' my lasntname is ' + mylastNames + ' my age is  ' + (2023 - birthday);
console.log(myInformation)

// tempalte literals

let myInformation2 = `my name is ${myNames} my lasntname is ${mylastNames} my age is ${2023 - birthday}`;
console.log(myInformation2);


// take desiction if\ else

let age = 16
if (age >= 18) {
    console.log('rayaan you can get driven license')
}
else {

    let leftage = 18 - age;
    console.log(`rayaan you are too young. wait another ${leftage} years `)
}


// type conversion and corscion
// type conversion 
// strink ayaa lambar u bdali kartaa adoo ka hormarinaao number
const inputNumber = '1995'
console.log(Number(inputNumber), inputNumber)
console.log(Number(inputNumber) + 18)

console.log(String(23), 23)
// number ayaa u badali kartaa strink adoo ka hormarinaayo strink
// lambarada dhan waa ku isdicmaali kartaa ka eheen isku darka

console.log('I am ' + 23, 'year old')
console.log('23' - '10 ' - 3) // 10 
console.log('23' / '10 ' / 3) //  0.7666666666666666

console.log('23' * '10 ' * 3) //690  

let n = '100' + 50;
n = n - 10;
console.log(n) // 10040

console.log(2 + 4 + 2 + '5') // 85 
console.log(10 - 3 - 5 + '6') // 26

// truthy and falsy values
//  5 falsy values is " 0, " undefined, null , NAN
console.log(Boolean(0))
console.log(Boolean('')) // its false its undefind
console.log(Boolean('maxamud')) // its tru becous its trink
console.log(Boolean(null))
console.log(Boolean(NaN)) //NAN its false  

let money = 0;
if (money) {
    console.log('dont spend money ')
} else {
    console.log('get a job')
}

let myNamee; // its 
if (myNamee) {
    console.log('welcome ' + myNamee)
} else {
    console.log('name is undefined')
}


// equality operators == vs  === 
// == waxaa strink iyo lambar wuu qadanaa
const myAge = '18';
if (myAge == 18) console.log('now you are a edult')
// === meel walbo waa inaa isku mid ka ahaandaan variabalka iyo lambarka
'marwalbo isku day ina isticmaashid  === its always sure 100%'
if (myAge === 18) console.log('now you are a edult') // ma shaqeenaayo maadama uu 18 strink yahaya .

// prompt input . userinput
// const myvouritnumber = prompt('what is you vourit number10')
// console.log(myvouritnumber)

// if (myvouritnumber == 10) {
//     console.log('cool 10 is amazin number')
// }
// // if(myvouritnumber === 10) { // kan ma shaqeenaayo maadama u ka 
// //     console.log('cool 10 is amazin number')
// // }
// else if (myvouritnumber == 7) {
//     console.log('7 is also amazin number')
// }

// else {
//     console.log('why not 10')
// }


//  local operator && \\ != 
// const hasDriverLicense = true
// const hasGoodVision = false

// if (hasDriverLicense && hasGoodVision) {
//     console.log('maxamud has able to drive ')
// } else {
//     console.log('someone else can drive')
// }
// //  
// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }


// CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.


// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.


// 11. Calculate the average score for each team, using the test data included below. 
// The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

let scoreDolphins = (96 + 108 + 89) / 3
let scoreKoalas = (88 + 91 + 110) / 3

console.log(scoreDolphins, scoreKoalas)
if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy')
}
else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy")

}
else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy")
}

