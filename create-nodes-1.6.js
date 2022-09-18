const body = document.createElement('body')
const div = document.createElement('div')
const ul = document.createElement('ul')
const li1 = document.createElement('li')
const li2 = document.createElement('li')
const link1 = document.createElement('a')
const link2 = document.createElement('a')
link1.href = 'https://instagram.com/intocode'
link1.textContent =  'наш инстаграм'
link2.href = 'https://intocode.ru'
link2.textContent =  'наш сайт'
li1.append(link1)
li2.append(link2)
ul.append(li1, li2)
div.append(ul)
body.append(div)
console.log(body);
