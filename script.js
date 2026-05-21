// script.js

// Dark Mode Optional
const modeBtn =
document.getElementById("modeBtn");



// Add To Cart

function addToCart(name,price){

    let cart =
    JSON.parse(localStorage.getItem("cart"))
    || [];

    cart.push({
        name:name,
        price:price
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " added to cart!");
}



// Signup

function signupUser(){

    const username =
    document.getElementById("newUsername").value;

    const password =
    document.getElementById("newPassword").value;

    if(username === "" || password === ""){

        alert("Please fill all fields");

        return;
    }

    localStorage.setItem(
        "username",
        username
    );

    localStorage.setItem(
        "password",
        password
    );

    alert("Account Created Successfully!");

    window.location.href =
    "login.html";
}



// Login

function loginUser(){

    const username =
    document.getElementById("username").value;

    const password =
    document.getElementById("password").value;

    const savedUser =
    localStorage.getItem("username");

    const savedPass =
    localStorage.getItem("password");

    if(
        username === savedUser &&
        password === savedPass
    ){

        alert("Login Successful!");

        window.location.href =
        "index.html";
    }

    else{

        alert("Invalid Credentials");
    }
}
// Theme Toggle

const themeToggle =
document.getElementById("theme-toggle");


// Load Saved Theme

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");

    themeToggle.innerHTML =
    '<i class="fa-solid fa-sun"></i>';
}



// Toggle Theme

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");



    // Save Theme

    if(document.body.classList.contains("light-mode")){

        localStorage.setItem("theme","light");

        themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';
    }

    else{

        localStorage.setItem("theme","dark");

        themeToggle.innerHTML =
        '<i class="fa-solid fa-moon"></i>';
    }
});