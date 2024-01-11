let topbx = document.querySelector('.top-bx')
let tbx = document.querySelector('.tbx')
let bf = document.querySelector('.bf')
let audio = document.querySelectorAll('.audio')
let bx = 0
let bfx = 0
tbx.style.top = -70 + 'px'
topbx.addEventListener('click', function () {
  bx++
  if (bx % 2 == 1) {
    var timer = setInterval(function () {
      if (tbx.offsetTop >= 70) { clearInterval(timer); } tbx.style.top = tbx.offsetTop + 10 + 'px';
    }, 60);
  } else {
    var timer = setInterval(function () {
      if (tbx.offsetTop <= -70) { clearInterval(timer); } tbx.style.top = tbx.offsetTop + -10 + 'px';
    }, 60);
  }
})
let hl1 = document.querySelector('.hl1')
let hl2 = document.querySelector('.hl2')
let hear = 0
audio.volume = 0.5
bf.addEventListener('click', function () {
  bfx++
  if (bfx % 2 == 1) {
    bf.classList.add('zt')
    audio[hear].play()
  } else {
    bf.classList.remove('zt')
    audio[hear].pause()
  }
})
hl2.addEventListener('click', function () {
  audio[hear].pause()
  hear++
  if (hear >= audio.length) {
    hear = 0
  }
  audio[hear].play()
  bf.classList.add('zt')
})
hl1.addEventListener('click', function () {
  audio[hear].pause()
  hear--
  if (hear < 0) {
    hear = audio.length - 1
  }
  audio[hear].play()
  bf.classList.add('zt')
})


