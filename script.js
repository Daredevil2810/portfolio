// Mobile Menu Toggle

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if(navLinks.style.display === "flex"){
        navLinks.style.display = "none";
    }else{
        navLinks.style.display = "flex";
    }

});


// Close menu when link clicked (mobile)

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if(window.innerWidth < 768){
            navLinks.style.display = "none";
        }

    });

});


// Fade In Animation on Scroll

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom){
            section.classList.add("show");
        }

    });

});


// Active Navbar Link Highlight

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});



const typingText = [
"Web Developer ",
"Android Developer "
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type(){

currentText = typingText[i];

if(!isDeleting){
document.querySelector(".typing").textContent = currentText.substring(0,j++);
}else{
document.querySelector(".typing").textContent = currentText.substring(0,j--);
}

if(!isDeleting && j === currentText.length){
isDeleting = true;
setTimeout(type,1000);
return;
}

if(isDeleting && j === 0){
isDeleting = false;
i = (i+1)%typingText.length;
}

setTimeout(type,120);
}

type();

const form = document.getElementById("contact-form");
const button = document.getElementById("send-btn");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function(e){

e.preventDefault();

button.innerText = "Sending...";
button.disabled = true;

let data = new FormData(form);

try{

let response = await fetch(form.action,{
method: "POST",
body: data,
headers:{
'Accept': 'application/json'
}
});

if(response.ok){

status.innerText = "✔ Message Sent Successfully!";
status.classList.add("success");

form.reset();

button.innerText = "Send Message";
button.disabled = false;

}else{

status.innerText = "❌ Something went wrong.";
status.classList.add("error");

button.innerText = "Send Message";
button.disabled = false;

}

}catch(error){

status.innerText = "❌ Network error. Try again.";
status.classList.add("error");

button.innerText = "Send Message";
button.disabled = false;

}

});

window.addEventListener("scroll", function(){

let scrollTop = document.documentElement.scrollTop;
let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

let progress = (scrollTop / scrollHeight) * 100;

document.querySelector(".scroll-progress").style.width = progress + "%";

});

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function(){

if(document.documentElement.scrollTop > 300){
scrollBtn.style.display = "block";
}else{
scrollBtn.style.display = "none";
}

});

scrollBtn.addEventListener("click", function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

});