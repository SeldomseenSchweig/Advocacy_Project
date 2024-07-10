// Toggle the navigation menu for mobile view


function toggleMenu() {
  const menu = document.querySelector('.navbar ul');
  menu.classList.toggle('active');
}

// Toggle dark mode on and off
const btn = document.getElementById('toggle-theme-button');
function darkMode() {
  const body = document.querySelector('body');
  body.classList.toggle('dark-mode');
}
btn.addEventListener('click', darkMode);

// Add a signature to the petition
const formButton = document.getElementById('sign-now-button');
const addSignature = (event) => {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById('name').value;
  const hood = document.getElementById('hood').value;
  const email = document.getElementById('email').value;

  if (!name) {
    alert('Please enter your name');
    return;
  }
  if (!hood) {
    alert('Please enter your neighborhood');
    return;
  }
  if (!email) {
    alert('Please enter your email');
    return;
  }



  const newSignature = document.createElement('p');
  newSignature.innerText = `🖊️ ${name} from ${hood} supports this.`;

  const sigs = document.getElementsByClassName('signatures')[0];
  sigs.appendChild(newSignature);

  document.getElementById("sign-petition").reset();
  openModal(name, hood);
}

// Validate form inputs
const validateForm = (event) => {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById('email');
  if (!email.value.includes('.com')) {
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }

  let containsErrors = false;
  const petitionInputs = document.getElementById("sign-petition").elements;

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  if (!containsErrors) addSignature(event);
}

let signNowButton = document.getElementById('sign-now-button');
signNowButton.addEventListener('click', validateForm);

// Reveal animations on scroll
let revealableContainers = document.getElementsByClassName('revealable');

function reveal() {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - 150) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}
window.addEventListener('scroll', reveal);
reveal();

// Modal handling
function openModal(name, location) {
  document.getElementById('thanks').innerText = `${name} from ${location} supports this! Awesome!`;
  let modal = document.getElementById("petitionModal");
  modal.style.display = "block";

  setTimeout(() => {
    modal.style.display = "none";
  }, 5000);
}

let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  let modal = document.getElementById("petitionModal");
  modal.style.display = "none";
}
window.onclick = function(event) {
  let modal = document.getElementById("petitionModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let greetingForm = document.getElementsByClassName("greeting-container")[0]
let username = document.getElementById("username");
function setName(username, event) {
  event.preventDefault();
  let value = username.value;
  console.log(value)
  

  greetingForm.classList.replace("greeting-container", "hidden")
  window.localStorage.setItem("name", value)
  console.log(greetingForm)
  document.getElementById("greeting").innerHTML = `Hi ${value}! `
}

window.addEventListener("load", () => {
  let greetingName = window.localStorage.getItem("name")
  if (greetingName) {
    greetingForm.classList.replace("greeting-container", "hidden")


    document.getElementById("greeting").innerHTML = `Welcome Back ${greetingName}!`
  }
})