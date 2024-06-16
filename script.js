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