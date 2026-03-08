function sendOrder(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let name = document.getElementById("name").value;

let phone = document.getElementById("phone").value;

let address = document.getElementById("address").value;

let text = "New Order:%0A";

text += "Name: " + name + "%0A";

text += "Phone: " + phone + "%0A";

text += "Address: " + address + "%0A";

text += "Items:%0A";

cart.forEach(i => {

text += i.name + " ₹" + i.price + "%0A";

});

let store = "919792497071";

let url = "https://wa.me/" + store + "?text=" + text;

window.open(url);

}


