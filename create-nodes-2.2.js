function render(arr) {
    const ul = document.createElement("ul");
    
    for (const ar of arr) {
        const li = document.createElement("li");
        li.textContent = ar;
        ul.append(li);
    }
    document.body.append(ul);
    return document.body;
}

console.log(render(["html", "css", "js"]));
