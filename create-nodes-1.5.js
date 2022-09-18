const div1 = document.createElement('div')
const div2 = document.createElement('div')
const div3 = document.createElement('div')
div1.classList.add('red')
div2.classList.add('blue')
div3.classList.add('green')
div1.append(div3)
div3.append(div2)
div2.textContent = 'я вложен'
console.log(div1);
console.log(div2);
console.log(div3);