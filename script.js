function toggleMenu() {
  const menu = document.querySelector('.navbar ul');
  menu.classList.toggle('active');
}

const btn = document.getElementById('toggle-theme-button');
function darkMode() {
  const body = document.querySelector('body');
  body.classList.toggle('dark-mode');
}

btn.addEventListener('click', darkMode)


const formButton = document.getElementById('sign-now-button');
const addSignature = (event) => {
  const name = document.getElementById('name').value;
  if (!name) {
    alert('Please enter your name');
    return
  }
  const hood = document.getElementById('hood').value;
  if (!hood) {
    alert('Please enter your hood'); g
    return
  }
  const email = document.getElementById('email').value
  if (!email) {
    alert('Please enter your email');
    return
  }

  const newSignature = document.createElement('p');
  newSignature.innerText = `🖊️ ${name} from
  ${hood} supports this.`;
  const sigs = document.getElementsByClassName('signatures')[0];
  sigs.appendChild(newSignature)
  document.getElementById("sign-petition").reset()
  openModal(name, hood)
  event.preventDefault();

}


// Validation function

const validateForm = () => {
  const email = document.getElementById('email');
  if (!email.value.includes('.com')) {
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }
  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
  // TODO: Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    console.log(petitionInputs[i].id)
    if (petitionInputs[i].value.length < 2) {
      console.log("error")
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }

  // TODO: Validate the value of each input
  if (containsErrors == false) addSignature();
}
let signNowButton = document.getElementById('sign-now-button');
signNowButton.addEventListener('click', validateForm);

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}




let revealableContainers = document.getElementsByClassName('revealable');

function reveal() {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    console.log()
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - 150) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}
window.addEventListener('scroll', reveal);

reveal()

function openModal(name, location) {

  document.getElementById('thanks').innerText = ` ${name} from  ${location} supports this! Awesome!`;
  let modal = document.getElementById("petitionModal");
  modal.style.display = "block";

  setTimeout(() => {
    let modal = document.getElementById("petitionModal");
    modal.style.display = "none";
  }, 5000)
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


