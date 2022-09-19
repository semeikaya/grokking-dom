const ul = document.createElement('ul')
const li = document.createElement('li')

ul.className = 'list'
li.textContent = 'привет мир'
ul.append(li)

console.log(ul);
console.log(li);
