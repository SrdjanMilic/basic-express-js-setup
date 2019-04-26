let menu = document.getElementsByClassName('menu')[0];
let profile = document.getElementsByClassName('profile')[0];

menu.addEventListener('click', (e) => {
  e.preventDefault();
  if (profile.classList.value == 'profile show') {
    profile.classList.value = 'profile hide';
  } else {
    profile.classList.value = 'profile show';
  }
});
