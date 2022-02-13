let elblue = document.getElementById('blue-color');
let elbody = document.getElementById('bodySite');
let elyellow = document.getElementById('yellow-color');
let elgreen = document.getElementById('green-color');
let elred = document.getElementById('red-color');
let elmodalopen = document.getElementById('BtnModalopen');
let elmodalclose = document.getElementById('BtnModalclose');
let elmodal = document.getElementById('modalEl');
let elabout = document.getElementById('about-cont')


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
    elmodalopen.classList.add('disp-none');
    elabout.classList.add('about-width');
})
elmodalclose.addEventListener('click',function(){
    elbody.classList.remove('pad-left');
    elmodal.classList.remove('show-modal');
    elmodalopen.classList.remove('disp-none')
    elabout.classList.remove('about-width');

})

var typed = new Typed('#textAnime', {
  strings: ['Web developer', 'Freelancer'],
  typeSpeed: 50,
  backSpeed: 30,
  loop:true
});
var typed = new Typed('#textAnimeAbout', {
  strings: ['Najmiddiov Jamoliddin','Web developer', 'Freelancer'],
  typeSpeed: 50,
  backSpeed: 30,
  loop:true
});

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 400
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});