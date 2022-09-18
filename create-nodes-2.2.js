// Вариант 1
function render(arr) {
    const body = document.createElement("body");
    const ul = document.createElement("ul");
    for (const ar of arr) {
        const li = document.createElement("li");
        li.textContent = ar;
        ul.append(li);
    }
    body.append(ul);
    return body;
}


// Вариант 2
function render1(arr) {
    const body = document.createElement("body");
    for (const ar of arr) {
        const ul = document.createElement("ul");
        for (const ar of arr) {
            const li = document.createElement("li");
            li.textContent = ar;
            ul.append(li);
        }
        body.append(ul);
    }
    return body;
}

console.log(render(["html", "css", "js"]));
