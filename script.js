function toggleMenu() {
  const menu = document.querySelector('.navbar ul');
  menu.classList.toggle('active');
}

const btn = document.getElementById('toggle-theme-button');
function darkMode(){
  const body = document.querySelector('body');
  body.classList.toggle('dark-mode');
}

btn.addEventListener( 'click', darkMode)


const formButton = document.getElementById('sign-now-button');  
const addSignature = (event) => {
  const name = document.getElementById('name').value;
  if(!name) {
    alert('Please enter your name');
    return}
  const hood = document.getElementById('hood').value;
  if(!hood) {
    alert('Please enter your hood');
    return}
  const email = document.getElementById('email').value
  if(!email) {
    alert('Please enter your email');
    return}
  console.log("The name is: ",name, hood, email)
    
  const newSignature = document.createElement('p');
  newSignature.innerText = `🖊️ ${name} from
  ${hood} supports this.`;
  const sigs = document.getElementsByClassName('signatures')[0];
  sigs.appendChild(newSignature)
  document.getElementById("sign-petition").reset()
  event.preventDefault();
  
}


// Validation function

const validateForm = () => {
  const email = document.getElementById('email');
  if (!email.value.includes('.com')) {
    email.classList.add('error');
  }else {
      email.classList.remove('error');
  }
  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
  // TODO: Loop through all inputs
  console.log(petitionInputs)
  for(let i = 0; i < petitionInputs.length; i++){
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
  if (containsErrors == false)  addSignature();
}
let signNowButton = document.getElementById('sign-now-button');
signNowButton.addEventListener('click', validateForm);