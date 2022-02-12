let elblue = document.getElementById('blue-color');
let elbody = document.getElementById('bodySite');
let elyellow = document.getElementById('yellow-color');
let elgreen = document.getElementById('green-color');
let elred = document.getElementById('red-color');
let elmodalopen = document.getElementById('BtnModalopen');
let elmodalclose = document.getElementById('BtnModalclose');
let elmodal = document.getElementById('modalEl');


elred.addEventListener('click',function(){
    elbody.classList.add('red')
    elbody.classList.remove('blue')
    elbody.classList.remove('yellow')
    elbody.classList.remove('green')
   
})
elblue.addEventListener('click',function(){
    elbody.classList.add('blue')
    elbody.classList.remove('red')
    elbody.classList.remove('yellow')
    elbody.classList.remove('green')
  
})
elyellow.addEventListener('click',function(){
    elbody.classList.add('yellow')
    elbody.classList.remove('red')
    elbody.classList.remove('blue')
    elbody.classList.remove('green')
   
})
elgreen.addEventListener('click',function(){
    elbody.classList.add('green')
    elbody.classList.remove('red')
    elbody.classList.remove('blue')
    elbody.classList.remove('yellow')
  
})
elmodalopen.addEventListener('click',function(){
    elbody.classList.add('pad-left');
    elmodal.classList.add('show-modal');
})
elmodalclose.addEventListener('click',function(){
    elbody.classList.remove('pad-left');
    elmodal.classList.remove('show-modal');
})

