let bottom = document.querySelector('.bottom')
let header = document.querySelector('header')
let topHead = document.querySelector('.top')
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
      bottom.classList.add('active')
    }else{
      bottom.classList.remove('active')
    }
}

let clik = document.getElementById('click')


clik.onclick = () => {
  let isClick = true;
  if(isClick) {
    clik.classList.toggle('click')
  }
    
}
  