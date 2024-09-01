function showSidebar(toggle){
  const frontbarElement = document.querySelector('.links2');
  const menu_button = document.querySelector('.menu_button');
  if(toggle === 'open'){
    frontbarElement.style.display = 'flex';
    menu_button.style.display = 'none';

  } else if(toggle === 'close'){
    frontbarElement.style.display = 'none';
    menu_button.style.display = 'flex';
  }
}