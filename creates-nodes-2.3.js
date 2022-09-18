function render(arr) {
    const ul = document.createElement('ul');
    const body = document.createElement('body')
    for (let ar of arr) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = ar.url;
        a.textContent = ar.name;
        li.append(a);
        ul.append(li);
    }
    body.append(ul)
    console.log(body);
}

