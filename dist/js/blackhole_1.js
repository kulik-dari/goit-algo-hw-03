document.addEventListener('DOMContentLoaded', function() {
  // Initialize black hole
  blackhole('#blackhole');

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle) {
      menuToggle.addEventListener('click', function() {
          navLinks.classList.toggle('active');
          this.classList.toggle('active');
      });
  }

  // Add fade-in animation to content
  const bannerContent = document.querySelector('.banner-content');
  if (bannerContent) {
      bannerContent.classList.add('fade-in');
  }

  // Handle window resize
  let resizeTimeout;
  window.addEventListener('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function() {
          if (window.innerWidth > 768) {
              navLinks.classList.remove('active');
              menuToggle.classList.remove('active');
          }
      }, 250);
  });
});
function blackhole(element) {
  const container = $(element);
  let cw = container.width();
  let ch = container.height();
  let maxorbit = Math.min(355, Math.min(cw, ch) * 0.5);
  let centery = ch / 2;
  let centerx = cw / 2;

  const startTime = new Date().getTime();
  let currentTime = 0;

  let stars = [];
  let collapse = false;
  let expanse = false;

  const canvas = $('<canvas/>').attr({ width: cw, height: ch }).appendTo(element);
  const context = canvas.get(0).getContext("2d");

  context.globalCompositeOperation = "screen";

  function setDPI(canvas, dpi) {
      const scaleFactor = dpi / 96;
      const canvasEl = canvas.get(0);
      
      canvasEl.style.width = cw + 'px';
      canvasEl.style.height = ch + 'px';
      
      canvasEl.width = Math.ceil(cw * scaleFactor);
      canvasEl.height = Math.ceil(ch * scaleFactor);
      
      const ctx = canvasEl.getContext('2d');
      ctx.scale(scaleFactor, scaleFactor);
  }

  function rotate(cx, cy, x, y, angle) {
      const radians = angle;
      const cos = Math.cos(radians);
      const sin = Math.sin(radians);
      const nx = (cos * (x - cx)) + (sin * (y - cy)) + cx;
      const ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
      return [nx, ny];
  }

  function star() {
      const rands = [];
      rands.push(Math.random() * (maxorbit / 2) + 1);
      rands.push(Math.random() * (maxorbit / 2) + maxorbit);

      this.orbital = (rands.reduce((p, c) => p + c, 0) / rands.length);
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
      this.color = `rgba(255, 150, 0,${1 - ((this.orbital) / maxorbit)})`;
      this.hoverPos = centery + (maxorbit / 2) + this.collapseBonus;
      this.expansePos = centery + (this.id % 100) * -10 + (Math.floor(Math.random() * 20) + 1);

      this.prevR = this.startRotation;
      this.prevX = this.x;
      this.prevY = this.y;
  }

  star.prototype.draw = function() {
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

    const brightness = Math.min(1, currentTime / 300);
    const alpha = Math.min(1, (1 - ((this.orbital) / maxorbit)) + brightness);
    this.color = `rgba(255, 150, 0,${alpha})`;

    context.save();
    context.fillStyle = this.color;
    context.strokeStyle = this.color;
    context.beginPath();
    const oldPos = rotate(centerx, centery, this.prevX, this.prevY, -this.prevR);
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
};

function handleResize() {
    cw = container.width();
    ch = container.height();
    maxorbit = Math.min(355, Math.min(cw, ch) * 0.5);
    centerx = cw / 2;
    centery = ch / 2;

    // Update canvas dimensions
    canvas.attr({ width: cw, height: ch });
    canvas.get(0).style.width = cw + 'px';
    canvas.get(0).style.height = ch + 'px';
    
    setDPI(canvas, 192);
    
    // Recalculate star positions
    stars.forEach(star => {
        star.x = centerx;
        star.y = centery + star.orbital;
        star.yOrigin = centery + star.orbital;
        star.hoverPos = centery + (maxorbit / 2) + star.collapseBonus;
        star.expansePos = centery + (star.id % 100) * -10 + (Math.floor(Math.random() * 20) + 1);
    });
}

function loop() {
    const now = new Date().getTime();
    currentTime = (now - startTime) / 50;

    context.fillStyle = 'rgba(10, 25, 48, 0.05)';
    context.fillRect(0, 0, cw, ch);

    for (let i = 0; i < stars.length; i++) {
        if (stars[i] !== undefined) {
            stars[i].draw();
        }
    }

    requestAnimationFrame(loop);
}

// Initialize animation
function init() {
    context.fillStyle = 'rgba(26, 54, 93, 1)';
    context.fillRect(0, 0, cw, ch);
    
    // Create stars
    for (let i = 0; i < 2500; i++) {
        new star();
    }
    
    // Start animation loop
    loop();
}

// Handle window resize with debounce
$(window).on('resize', _.debounce(handleResize, 250));

// Handle hover effects
$('.centerHover').on('mouseover', function() {
    if (!expanse) {
        collapse = true;
    }
}).on('mouseout', function() {
    if (!expanse) {
        collapse = false;
    }
});

// Auto animation sequence
setTimeout(function() {
    collapse = false;
    expanse = true;
    
    // Add any additional animation classes
    $('.centerHover').addClass('open');
    $('.banner-content').addClass('fade-in');
}, 2000);

// Initialize canvas and animation
setDPI(canvas, 192);
init();

// Return public methods if needed
return {
    reset: function() {
        stars = [];
        collapse = false;
        expanse = false;
        init();
    },
    resize: handleResize
};
}

// Add requestAnimationFrame polyfill
window.requestAnimationFrame = (function() {
return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();