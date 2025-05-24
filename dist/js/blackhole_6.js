blackhole('#blackhole');

function blackhole(element) {
  var h = $(element).height(),
      w = $(element).width(),
      cw = w,
      ch = h,
      maxorbit = 355,
      centery = ch / 2,
      centerx = cw / 2;

  var startTime = new Date().getTime();
  var currentTime = 0;

  var stars = [],
      collapse = false,
      expanse = false;

  var canvas = $('<canvas/>').attr({ width: cw, height: ch }).appendTo(element),
      context = canvas.get(0).getContext("2d");

  context.globalCompositeOperation = "screen";

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
    this.color = 'rgba(255, 150, 0,' + (1 - ((this.orbital) / 355)) + ')';

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
      this.rotation = this.startRotation + (currentTime * (this.speed / 2));
      if (this.y > this.expansePos) {
        this.y -= Math.floor(this.expansePos - this.y) / -140;
      }
    }
    var brightness = Math.min(1, currentTime / 300);
    var alpha = Math.min(1, (1 - ((this.orbital) / 355)) + brightness);
    this.color = 'rgba(255, 150, 0,' + alpha + ')';
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
    $('.fullpage').addClass('open');
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

    context.fillStyle = 'rgba(10, 25, 48, 0.05)'
    context.fillRect(0, 0, cw, ch);

    for (var i = 0; i < stars.length; i++) {
      if (stars[i] != stars) {
        stars[i].draw();
      }
    }

    requestFrame(loop);
  }

  function init(time) {
    context.fillStyle = 'rgba(26, 54, 93, 1)'
    context.fillRect(0, 0, cw, ch);
    for (var I = 0; I < 2500; I++) {
      new star();
    }
    loop();
  }
  init();
}

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

function changePhoto(event, index) {
event.preventDefault(); // предотвращаем переход по ссылке

const photo = document.getElementById('photo');
const line = document.getElementById('blue-line');
const serviceLinks = document.querySelectorAll('.service');

// Update photo with fade effect
photo.style.opacity = 0; // Start fade out
setTimeout(() => {
    switch (index) {
        case 1:
            photo.src = 'images/banner/1.jpg';
            break;
        case 2:
            photo.src = 'images/banner/bd-2.jpg';
            break;
        case 3:
            photo.src = 'images/banner/slider-3.jpg';
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
