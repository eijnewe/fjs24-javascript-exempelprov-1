// 4.1 (1p) Gör om följande funktion till en arrow-funktion
const getRandomColor1 = function () {
    const colors = ['red', 'green', 'blue', 'yellow', 'pink']
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

// Din kod här:
const getRandomColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'pink']
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

//4.2 (1p) Gör om följande funktion till en arrow-funktion:
function isGreaterThanTen1(number) {
    return number > 10
}

// Din kod här:

const isGreaterThanTen = (number) => number > 10

//4.3 (1p) Gör om följande funktion till en arrow-funktion:
const numbers = [1, 2, 3, 4, 5, 6]

const evenNumbers1 = numbers.filter(function (number) {
    return number % 2 === 0
})

// Din kod här:
const evenNumbers = numbers.filter((number) => number % 2 === 0)

// 4.4 (2p) Skriv om följande funktion (och callback-funktionen) till arrow-funktioner:
function greetLater1() {
    setTimeout1(function () {
        console.log('Hello there!')
    }, 3000)
}

// Din kod här:

const greetLater = () => {
    setTimeout(() => {
        console.log('Hello there!')
    }, 3000)
}

// Test
console.log(getRandomColor()) // Ska logga en slumpmässig färg
console.log(isGreaterThanTen(15)) // Ska logga true
console.log(evenNumbers) // Ska logga alla jämna tal i listan
greetLater() // Ska logga "Hello there!" efter 3 sekunder
