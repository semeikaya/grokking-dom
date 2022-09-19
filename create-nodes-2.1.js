const arr = ['html', 'css', 'js']
const ul = document.createElement('ul')

for (const ar of arr) {
    const li = document.createElement('li')
    li.textContent = ar
    ul.append(li)
}

document.body.append(ul)
