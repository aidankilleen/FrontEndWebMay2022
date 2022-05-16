var user = {
    id: 1,
    name: "Alice", 
    email: "alice@gmail.com", 
    active: false, 

    display: function () {
        console.log(user.name + " " + user.email);
    }
}

console.log(user.name);

user.display();

var users = [
    { id:1, name:"Alice", email:"alice@gmail.com", active:true }, 
    { id:2, name:"Bob", email:"bob@gmail.com", active:false }, 
    { id:3, name:"Carol", email:"carol@gmail.com", active:true }, 
    { id:4, name:"Dan", email:"dan@gmail.com", active:false }, 
];

var selUsers = document.getElementById("selUsers");

for (var i=0; i<users.length; i++) {
    var option = document.createElement("option");
    option.innerHTML = users[i].name;
    selUsers.append(option);
}





