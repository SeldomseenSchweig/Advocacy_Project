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
  event.preventDefault();
}
formButton.addEventListener('click', addSignature);


// Add a click event listener to the sign now button here