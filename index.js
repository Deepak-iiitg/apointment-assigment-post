const submit = document.getElementById("submit");
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    axios.post("https://crudcrud.com/api/10d4278371e146ef9a4cc8f70af142f5/apointment", {
        Name: name,
        Email: email
    });
})