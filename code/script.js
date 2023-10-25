const loader = document.querySelector('.loader');
const display = document.querySelector('.Display');


setTimeout(function() {
   
   loader.style.opacity = 0
   display.style.opacity =1
   setTimeout(() => {
      loader.style.display = "none"
      display.style.display ="flex"
   }, 4500)
}, 4500)



