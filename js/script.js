const dropdownMenu = document.querySelectorAll('[data-dropdown]');
const dropdownMenuMobile = document.querySelectorAll('[data-dropdown-mobile]');
const dropdownSubMobile = document.querySelectorAll('[data-dropdown-submenu]');

dropdownMenu.forEach(menu => {
  ['click', 'touchstart'].forEach(userEvent => {
    menu.addEventListener(userEvent, handleClick);
  })
} )

function handleClick(event){
  console.log(event.target);
  this.classList.add('ativo');
  outsideClick(this,()=>{
    this.classList.remove('ativo');
  });
}

function outsideClick(element, callback){
  console.log(event.target);
  const html = document.documentElement;
  html.addEventListener('click', handleOutsideClick);
  function handleOutsideClick(event){
    if(!element.contains(event.target)){
      html.removeEventListener('click', handleOutsideClick);
      callback();
    }   
  }

}

dropdownMenuMobile.forEach(menumobile => {
  ['click', 'touchstart'].forEach(userEvent => {
    menumobile.addEventListener(userEvent, handleClickMobile);
  })
} )

function handleClickMobile(event){
  var menuM = event.target;
  if(menuM.classList.contains('sanduiche')){
    this.classList.toggle('ativoM');
  }
}

dropdownSubMobile.forEach(subMenu => {
  ['click', 'touchstart'].forEach(userEvent => {
    subMenu.addEventListener(userEvent, handleClickSub);
  })
} )

function handleClickSub(event){
  console.log(event.target);
    this.classList.toggle('ativoM');
}
