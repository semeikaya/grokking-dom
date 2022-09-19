const div1 = document.createElement('div')
const div2 = document.createElement('div')
const div3 = document.createElement('div')

div1.classList.add('red')
div2.classList.add('blue')
div3.classList.add('green')

div2.textContent = 'я вложен'

div3.append(div2)
div1.append(div3)

console.log(div1);
console.log(div2);
console.log(div3);
