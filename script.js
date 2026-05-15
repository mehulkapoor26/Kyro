// Dark Mode
const modeBtn = document.getElementById("modeBtn");
if(modeBtn){

    modeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");
     });
}
// Cart System
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(name, price){

    const product = {
        name:name,
        price:price
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart");
}
// Signup
function signupUser(){

    let username =
    document.getElementById("newUsername").value;

    let password =
    document.getElementById("newPassword").value;
    if(username === "" || password === ""){

        alert("Please fill all fields");

        return;
    }
// Save Data
    localStorage.setItem("username", username);

    localStorage.setItem("password", password);

    alert("Account Created Successfully");

    window.location.href = "login.html";
}
// Login
function loginUser(){

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

// Get Stored Data
    let savedUsername =
    localStorage.getItem("username");

    let savedPassword =
    localStorage.getItem("password");
    if(
        username === savedUsername &&
        password === savedPassword
    ){

        alert("Login Successful");

        window.location.href = "index.html";
    }
else{
        alert("Incorrect Username or Password");
    }
}