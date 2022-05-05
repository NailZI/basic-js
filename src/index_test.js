
import example from './images/19825.png'
import './css/style.css'
// создание свойства класса без конструктора
class Game {
   game = 'Violin Charades'
}
const myGame = new Game()

// создаем параграф
const p = document.createElement('p')
p.className = 'like'
p.textContent = `I like ${myGame.game}.`

// создаем элемент заголовка
const heading = document.createElement('h1')
heading.textContent = 'Как интересно! ... было, пока что-то не пошло не так.'

const div = document.createElement('div')
div.textContent = 'Probe1'
const div2 = document.createElement('div')
div2.textContent = 'Probe2'

// добавляем параграф и заголовок в DOM
const root = document.querySelector('#root')
root.append(heading, div, div2, p)