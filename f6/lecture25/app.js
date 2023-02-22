// Rock Paper Scissors game
// Камень Бумага Ножницы игра

// 1. создать кнопки в хтмл +
// 2. какие выборы у нас есть? +
    // => камень, ножницы, бумага
// 3. как можно написать функцию checkWinner +
    // которая будет определять кто победил в зависимости от того что он получает во входе два значения
// 4. получить что выбрал пользователь (какую кнопку нажал пользователь) +
// 5. создать рандомный выбор для компьютера .
// 6. показывать кто выиграл +-
// 7. добавить картинки для каждой кнопки
// 8. добавить минимальные стили
// ВСЕ красиво оформить в отдельные функции

// Домашка: добавить считалку, сколько раз выиграл юзер и сколько раз выиграл компьютер

const choices = ['камень', 'ножницы', 'бумага']

const rockButton = document.querySelector('.rock')
const scissorsButton = document.querySelector('.scissors')
const paperButton = document.querySelector(".paper")
// console.log(rockButton, scissorsButton, paperButton)
const choicestTxt = document.querySelector('.text')
const resultHeader = document.querySelector('.result')

const buttons = [rockButton, scissorsButton, paperButton]

for (let i = 0; i < 3; i++){
    buttons[i].addEventListener('click', (button) => {
        //console.log(button.target.innerText) // камень ножницы бумага
        // let user = button.target.innerText

        // когда поменяли структуру хтмл
        // console.log(button.target.className)
        let classnameValue = button.target.className
        let user = convertClassToText(classnameValue)

        let randomIndex = Math.floor(Math.random() * 3)
        let computer = choices[randomIndex]
        console.log('Мой Выбор: ', user,'Выбор компьютера: ', computer)

        let winner = checkWinner(user, computer)
        console.log(winner)
        choicestTxt.innerHTML = `Ваш выбор был <span class='purple'>${user}</span>, а компьютер выбрал <span class='purple'> ${computer}</span>`
        resultHeader.innerHTML = winner
    })
}

const convertClassToText = (value) => {
    let text
    if (value === 'rock'){
        text = 'камень'
    } else if (value === 'scissors'){
        text = 'ножницы'
    } else if (value === 'paper') {
        text = 'бумага'
    }

    return text
}

// function checkWinner(){} и то что снизу ОДНО и ТО ЖЕ
const checkWinner = (userChoice, computerChoice) => {
    let result;
    let youWon = `<span class='green'>Вы выиграли</span>`
    let compWon = `<span class='red'>Компьютер выиграл</span>`

    if (userChoice === computerChoice){
        result = 'Ничья'
    } else if (userChoice === 'камень' && computerChoice === 'ножницы') {
        result = youWon
        // userCounter++
    } else if (userChoice === 'камень' && computerChoice === 'бумага'){
        result = compWon
        // compCounter--
    } else if (userChoice === 'ножницы' && computerChoice === 'бумага'){
        result = youWon
    } else if (userChoice === 'ножницы' && computerChoice === 'камень'){
        result = compWon
    } else if (userChoice === 'бумага' && computerChoice === 'камень'){
        result = youWon
    } else if (userChoice === 'бумага' && computerChoice === 'ножницы'){
        result = compWon
    } else {
        result = 'Ошибка'
    }

    return result
}

// console.log(userChoice) // Область видимости переменных

// Обьяснения Рандомизации компьютера 

// Math.random() => 0-1
// * 3 => 0 > x < 3   - 0.11111, 1,23434565, 2,1242345
// let number = Math.random()*3
// let randomIndex = Math.floor(number)
// console.log(number, randomIndex)


// Обьяснения как работает функция checkWinner

// ваш выбор и выбор компьютером
// первый = вы
// второй = компьютер

// одинаково => ничья
// камень ножницы => первый
// камень бумага => второй

// ножницы бумага => первый
// ножницы камень => второй

// бумага камень => первый
// бумага ножницы => второй