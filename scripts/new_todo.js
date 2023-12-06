document.addEventListener("DOMContentLoaded", e => {

    fillUserList();

    const catOption = c => `<option value="${c.id}">${c.name}</option>`;

    fetch("http://localhost:8083/api/categories")
        .then(r => r.json())
        .then(cats => cats.forEach(c => catList.innerHTML += catOption(c)));

    //userid=1&category=1&priority=Medium&description=Make+Tea&deadline=2023-12-06

    saveButton.addEventListener("click", e => {
        const elements = document.querySelectorAll("main [name]");
        const content = [...elements].map(e => `${e.name}=${ encodeURIComponent(e.value) }`).join("&");

        fetch("http://localhost:8083/api/todos/", {method:"POST", body: content, headers:{
            "Content-type": "application/x-www-form-urlencoded" //"application/json"
        } }).then(r => location="todos.html");

    }); //END SAVE
});//END LOADED