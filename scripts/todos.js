document.addEventListener("DOMContentLoaded", e => {

    const userOption = u => `<option value="${u.id}">${u.name} - (${u.username})</option>`;

    fetch("http://localhost:8083/api/users")
    .then(r=>r.json())
    .then(users => users.forEach(u => userList.innerHTML += userOption(u) ));

});//END OF LOADED