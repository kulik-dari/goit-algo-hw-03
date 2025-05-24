document.addEventListener("DOMContentLoaded", function() {
  const menu = document.getElementById("menu");
  const sections = document.querySelectorAll("section");
  const letters = document.querySelectorAll("#logo .letter");
  const underscore = document.querySelector("#logo .underscore");

  function checkVisibility() {
      const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      
      // Change menu background color based on scroll position
      const hue = Math.floor(scrollPercentage * 360);
      menu.style.backgroundColor = `hsl(${hue}, 50%, 50%)`;

      // Handle letter visibility and underscore position
      let visibleLetters = Math.floor((1 - scrollPercentage) * letters.length);
      visibleLetters = Math.max(1, visibleLetters); // Keep at least one letter visible

      letters.forEach((letter, index) => {
          if (index < visibleLetters) {
              letter.style.display = '';
          } else {
              letter.style.display = 'none';
          }
      });

      // Position underscore after last visible letter
      const lastVisibleLetter = letters[visibleLetters - 1];
      if (lastVisibleLetter) {
          underscore.style.display = '';
          lastVisibleLetter.insertAdjacentElement('afterend', underscore);
      } else {
          underscore.style.display = 'none';
      }

      // Handle section visibility
      sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
              section.classList.add("visible");
          } else {
              section.classList.remove("visible");
          }
      });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Initial check on page load
});



function addClass() {
	document.body.classList.add("sent");
	document.getElementById("backToForm").style.display = "inline-block";
  }

  function resetForm() {
	document.body.classList.remove("sent");
	document.getElementById("contactForm").reset();
	document.getElementById("backToForm").style.display = "none";
  }

  document.getElementById("contactForm").addEventListener("submit", function(event) {
	event.preventDefault();
	addClass();
  });

  document.getElementById("backToForm").addEventListener("click", resetForm);

  /* Blackhole*/
  (function ($) {
    'use strict';
  
    blackhole('#blackhole');
  
    function blackhole(element) {
      var h = $(element).height(),
          w = $(element).width(),
          cw = w,
          ch = h,
          maxorbit = 255,
          centery = ch / 2,
          centerx = cw / 2;
  
      var startTime = new Date().getTime();
      var currentTime = 0;
  
      var stars = [],
          collapse = false,
          expanse = false;
  
      var canvas = $('<canvas/>').attr({ width: cw, height: ch }).appendTo(element),
          context = canvas.get(0).getContext("2d");
  
      context.globalCompositeOperation = "multiply";
  
      function setDPI(canvas, dpi) {
        if (!canvas.get(0).style.width)
          canvas.get(0).style.width = canvas.get(0).width + 'px';
        if (!canvas.get(0).style.height)
          canvas.get(0).style.height = canvas.get(0).height + 'px';
  
        var scaleFactor = dpi / 96;
        canvas.get(0).width = Math.ceil(canvas.get(0).width * scaleFactor);
        canvas.get(0).height = Math.ceil(canvas.get(0).height * scaleFactor);
        var ctx = canvas.get(0).getContext('2d');
        ctx.scale(scaleFactor, scaleFactor);
      }
  
      function rotate(cx, cy, x, y, angle) {
        var radians = angle,
            cos = Math.cos(radians),
            sin = Math.sin(radians),
            nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
            ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
        return [nx, ny];
      }
  
      setDPI(canvas, 192);
  
      var star = function () {
        var rands = [];
        rands.push(Math.random() * (maxorbit / 2) + 1);
        rands.push(Math.random() * (maxorbit / 2) + maxorbit);
  
        this.orbital = (rands.reduce(function (p, c) {
          return p + c;
        }, 0) / rands.length);
  
        this.x = centerx;
        this.y = centery + this.orbital;
        this.yOrigin = centery + this.orbital;
  
        this.speed = (Math.floor(Math.random() * 2.5) + 1.5) * Math.PI / 180;
        this.rotation = 0;
        this.startRotation = (Math.floor(Math.random() * 360) + 1) * Math.PI / 180;
  
        this.id = stars.length;
  
        this.collapseBonus = this.orbital - (maxorbit * 0.7);
        if (this.collapseBonus < 0) {
          this.collapseBonus = 0;
        }
  
        stars.push(this);
        this.color = 'rgba(204, 85, 0,' + (1 - ((this.orbital) / 255)) + ')';
  
        this.hoverPos = centery + (maxorbit / 2) + this.collapseBonus;
        this.expansePos = centery + (this.id % 100) * -10 + (Math.floor(Math.random() * 20) + 1);
  
        this.prevR = this.startRotation;
        this.prevX = this.x;
        this.prevY = this.y;
      }
      star.prototype.draw = function () {
        if (!expanse) {
          this.rotation = this.startRotation + (currentTime * this.speed);
          if (!collapse) {
            if (this.y > this.yOrigin) {
              this.y -= 2.5;
            }
            if (this.y < this.yOrigin - 4) {
              this.y += (this.yOrigin - this.y) / 10;
            }
          } else {
            this.trail = 1;
            if (this.y > this.hoverPos) {
              this.y -= (this.hoverPos - this.y) / -5;
            }
            if (this.y < this.hoverPos - 4) {
              this.y += 2.5;
            }
          }
        } else {
          this.rotation = this.startRotation + (currentTime 	* 	(this.speed / 2));
          if (this.y > this.expansePos) {
          this.y -= Math.floor(this.expansePos - this.y) / -140;
          }
          }
          context.save();
          context.fillStyle = this.color;
          context.strokeStyle = this.color;
          context.beginPath();
          var oldPos = rotate(centerx, centery, this.prevX, this.prevY, -this.prevR);
          context.moveTo(oldPos[0], oldPos[1]);
          context.translate(centerx, centery);
          context.rotate(this.rotation);
          context.translate(-centerx, -centery);
          context.lineTo(this.x, this.y);
          context.stroke();
          context.restore();
          this.prevR = this.rotation;
          this.prevX = this.x;
          this.prevY = this.y;
          }
          setTimeout(function () {
          collapse = false;
          expanse = true;
          $('.centerHover').addClass('open');
          setTimeout(function () {
          $('.header .welcome').removeClass('gone');
          }, 500);
          }, 2000);
          $('.centerHover').on('mouseover', function () {
          if (expanse == false) {
          collapse = true;
          }
          });
          $('.centerHover').on('mouseout', function () {
          if (expanse == false) {
          collapse = false;
          }
          });
          window.requestFrame = (function () {
          return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function (callback) {
          window.setTimeout(callback, 1000 / 60);
          };
          })();
          function loop() {
          var now = new Date().getTime();
          currentTime = (now - startTime) / 50;
          context.fillStyle = 'rgba(25,25,25,0.2)';
          context.fillRect(0, 0, cw, ch);
          for (var i = 0; i < stars.length; i++) {
          if (stars[i] != stars) {
          stars[i].draw();
          }
          }
          requestFrame(loop);
          }
          function init(time) {
          context.fillStyle = 'rgba(25,25,25,1)';
          context.fillRect(0, 0, cw, ch);
          for (var I = 0; I < 2500; I++) {
          new star();
          }
          loop();
          }
          init();
          }
          })(jQuery);

          import animate from "https://cdn.jsdelivr.net/npm/animateplus@2/animateplus.js";

animate({
  elements: ".service-block",
  duration: 2000,
  delay: index => index * 100,
  transform: ["scale(0)", "scale(1)"]
})
'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * search bar toggle
 */
const searchInput = document.getElementById('searchInput');
const content = document.querySelector('body'); // Get all content

searchInput.addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    // Reset previous highlights
    content.querySelectorAll('.search-highlight').forEach(el => {
        el.classList.remove('search-highlight');
    });

    // Find matches
    const matches = content.querySelectorAll(':not(script):not(style)').filter(el => {
        const text = el.textContent.toLowerCase();
        return text.includes(searchTerm);
    });

    // Highlight matches
    matches.forEach(match => {
        match.classList.add('search-highlight');
    });
});


document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
      duration: 800,
      easing: 'slide',
      once: true
  });

  // Set initial position for the blue line
  const initialService = document.querySelector('.service');
  const line = document.getElementById('blue-line');
  line.style.top = `${initialService.offsetTop}px`;
  line.style.height = `${initialService.clientHeight}px`;
});

function changePhoto(index) {
  const photo = document.getElementById('photo');
  const line = document.getElementById('blue-line');
  const serviceLinks = document.querySelectorAll('.service');

  // Update photo with fade effect
  photo.style.opacity = 0; // Start fade out
  setTimeout(() => {
      switch (index) {
          case 1:
              photo.src = 'images/dashboard.jpg';
              break;
          case 2:
              photo.src = 'images/dashboard2.jpg';
              break;
          case 3:
              photo.src = 'images/dashboard3.jpg';
              break;
      }
      photo.style.opacity = 1; // Fade in
  }, 500); // Delay for fade out duration

  // Update blue line position
  const selectedService = serviceLinks[index - 1];
  const offsetTop = selectedService.offsetTop;
  const serviceHeight = selectedService.clientHeight;

  line.style.top = `${offsetTop}px`;
  line.style.height = `${serviceHeight}px`;
}
//Pricing 
