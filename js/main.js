let elblue = document.getElementById('blue-color');
let elbody = document.getElementById('bodySite');
let elyellow = document.getElementById('yellow-color');
let elgreen = document.getElementById('green-color');
let elred = document.getElementById('red-color');
let elmodalopen = document.getElementById('BtnModalopen');
let elmodalclose = document.getElementById('BtnModalclose');
let elmodal = document.getElementById('modalEl');
let elabout = document.getElementById('about-cont');
let elservices = document.getElementById('services-con');
let elportfolio = document.getElementById('portfolio-cont');
let elcounter = document.getElementById('counter-cont');
let elconatct = document.getElementById('contact-con');




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
    elservices.classList.add('services-width');
    elportfolio.classList.add('portfolio-width');
    elcounter.classList.add('counter-width');
    elconatct.classList.add('contact-width');


})
elmodalclose.addEventListener('click',function(){
    elbody.classList.remove('pad-left');
    elmodal.classList.remove('show-modal');
    elmodalopen.classList.remove('disp-none');
    elabout.classList.remove('about-width');
    elservices.classList.remove('services-width');
    elportfolio.classList.remove('portfolio-width');
    elcounter.classList.remove('counter-width');
    elconatct.classList.remove('contact-width');





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
        "value_area": 600
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
(function ($) {
    "use strict";

    //Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
        t.style.left = n.clientX + "px",
            t.style.top = n.clientY + "px",
            e.style.left = n.clientX + "px",
            e.style.top = n.clientY + "px",
            i.style.left = n.clientX + "px",
            i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");

    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }

    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll("a"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }

    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
})(jQuery);


window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
    const up = document.getElementById("up");

    if (document.documentElement.scrollTop > 100) {
        up.classList.add("pa-up");
    } 
    else {
        up.classList.remove("pa-up");}
};







