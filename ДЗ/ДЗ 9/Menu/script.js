const showMenu = () => {
  const menu = document.getElementById('mytopnav');
  const button = document.getElementById('btn');
  console.log(menu);
  console.log(button);
  button.addEventListener('click', function(e) {
    menu.style.opacity == 0 ? menu.style.opacity = 1 : menu.style.opacity = 0;
  });
};
showMenu();