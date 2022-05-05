
import './css/style.css'
import buttons from './buttons'

const div_wrapper = document.createElement('div')
div_wrapper.className = 'wrapper'

for (let i = 0; i < buttons.length; i++) {
    const div_row = document.createElement('div')
    div_row.className = 'row'
    div_wrapper.appendChild(div_row)
    for (let j = 0; j < buttons[i].length; j++) {
        const div_btn = document.createElement('div')
        div_btn.className = 'btn'
        div_btn.textContent = buttons[i][j]
        div_btn.setAttribute('id', i*10+j)
        div_row.appendChild(div_btn)
    }
}

const textarea = document.createElement('textarea')
// textarea.textContent = 'Probe1'
textarea.setAttribute('rows', 10)
textarea.setAttribute('cols', 50)

// добавляем div в DOM
const root = document.querySelector('#root')
root.append(textarea, div_wrapper)