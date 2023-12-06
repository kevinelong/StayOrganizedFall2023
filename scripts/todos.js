
function todo(t) {
    // const completed = t.completed ? "[X]" : "[&nbsp;]";
    
    let completed = "[&nbsp;]"
    if(t.completed){
        completed = "[X]"
    }
    
    return `
    <div class="todo card">
        <div class="id">        ${t.id}</div>
        <div class="userid">     ${t.userid}</div>
        <div class="category">   ${t.category}</div>
        <div class="description">${t.description}</div>
        <div class="deadline">   ${t.deadline}</div>
        <div class="priority">   ${t.priority}</div>
        <div class="completed">  ${completed}</div>
    </div>
    `;
}

document.addEventListener("DOMContentLoaded", e => {

    const userOption = u => `<option value="${u.id}">${u.name} - (${u.username})</option>`;

    fetch("http://localhost:8083/api/users")
        .then(r => r.json())
        .then(users => users.forEach(u => userList.innerHTML += userOption(u)));

    userList.addEventListener("change", e => {
        fetch("http://localhost:8083/api/todos/")
            .then(r => r.json())
            .then(todos => {
                todoList.innerHTML = todos.filter(t => t.userid == userList.value).map(todo).join("");
            })
    });//END USER CHANGE

});//END OF LOADED