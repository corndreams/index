let topbx = document.querySelector('.top-bx')
let tbx = document.querySelector('.tbx')
let top1 = document.querySelector('.top')
let bf = document.querySelector('.bf')

let yx = document.querySelector('.yx')
let ayx = document.querySelector('.ayx')
let btnyx = document.querySelector('.btn-yx')
ayx.addEventListener('click', function () {
  yx.style.display = 'flex'
})
btnyx.addEventListener('click', function () {
  yx.style.display = 'none'
})
let zf = document.querySelector('.zf')
let azf = document.querySelector('.azf')
let btnzf = document.querySelector('.btn-zf')
azf.addEventListener('click', function () {
  zf.style.display = 'flex'
})
btnzf.addEventListener('click', function () {
  zf.style.display = 'none'
})
let pc = document.querySelector('.pc')
let apc = document.querySelector('.apc')
let btnpc = document.querySelector('.btn-pc')
apc.addEventListener('click', function () {
  pc.style.display = 'flex'
})
btnpc.addEventListener('click', function () {
  pc.style.display = 'none'
})
let yd = document.querySelector('.yd')
let ayd = document.querySelector('.ayd')
let btnyd = document.querySelector('.btn-yd')
ayd.addEventListener('click', function () {
  yd.style.display = 'flex'
})
btnyd.addEventListener('click', function () {
  yd.style.display = 'none'
})
// 日志
let rz = document.querySelector('.rz')
let rizhi = document.querySelector('.rizhi')
let rzclick = 0
// 日历
let rl = document.querySelector('.rl')
let rili = document.querySelector('.rili')
let rlclick = 0
// 日志
rz.addEventListener('click', function () {
  rzclick++
  let rld = rili.style.display
  if (rld == 'flex') {
    rlclick++
  }
  if (rzclick % 2 == 1) {
    rizhi.style.display = 'flex'
    rili.style.display = 'none'
  } else {
    rizhi.style.display = 'none'
  }
})
// 日历
rl.addEventListener('click', function () {
  rlclick++
  let rzd = rizhi.style.display
  if (rzd == 'flex') {
    rzclick++
  }
  if (rlclick % 2 == 1) {
    rili.style.display = 'flex'
    rizhi.style.display = 'none'
  } else {
    rili.style.display = 'none'
  }
})

// 音乐盒子
let ttn2 = document.querySelector('.tt-n2')
let ttop = document.querySelector('.ttop')
let audio = document.querySelectorAll('.audio')
let voiceAdd = document.querySelector('.voiceAdd')
let voiceDec = document.querySelector('.voiceDec')
let bx = 0
let bfx = 0
let voice = 0.6
tbx.style.top = -90 + 'px'
topbx.addEventListener('click', function () {
  bx++
  if (bx % 2 == 1) {
    var timer = setInterval(function () {
      if (tbx.offsetTop >= 70) { clearInterval(timer); } tbx.style.top = tbx.offsetTop + 10 + 'px';
    }, 60);
  } else {
    var timer = setInterval(function () {
      if (tbx.offsetTop <= -90) { clearInterval(timer); } tbx.style.top = tbx.offsetTop + -10 + 'px';
    }, 60);
  }
})
let hl1 = document.querySelector('.hl1')
let hl2 = document.querySelector('.hl2')
let hear = 0

bf.addEventListener('click', function () {
  bfx++
  if (bfx % 2 == 1) {
    bf.classList.add('zt')
    audio[hear].play()
    audio[hear].volume = voice
  } else {
    bf.classList.remove('zt')
    audio[hear].pause()
  }
})
// 下一首
hl2.addEventListener('click', function () {
  audio[hear].currentTime = 0;
  audio[hear].pause()
  hear++
  if (hear >= audio.length) {
    hear = 0
  }
  audio[hear].play()
  audio[hear].volume = voice
  bfx = 1
  bf.classList.add('zt')
})

audio[hear].onended = function () {
  console.log();
  audio[hear].pause()
  hear++
  if (hear == audio.length) {
    hear = 0;
  }
  audio[hear].play()
  audio[hear].volume = voice
}
// 上一首
hl1.addEventListener('click', function () {
  audio[hear].currentTime = 0;
  audio[hear].pause()
  hear--
  if (hear < 0) {
    hear = audio.length - 1
  }
  audio[hear].play()
  audio[hear].volume = voice
  bfx = 1
  bf.classList.add('zt')
})
// 音量
voiceAdd.addEventListener('click', function () {
  if (voice <= 0.95) {
    voice += 0.05
    console.log('音量:', voice);
  }
  audio[hear].volume = voice
})
voiceDec.addEventListener('click', function () {
  if (voice >= 0.05) {
    voice -= 0.05
    console.log(voice);
  }
  if (voice <= 0.05) {
    voice = 0
    console.log('音量:', voice);
  }
  audio[hear].volume = voice
})
// ttn2.style.left = '-' + window.getComputedStyle(ttn2).width
// ttn2.style.left = -340 + 'px'
// console.log(window.getComputedStyle(ttn2).width);
// console.log(window.getComputedStyle(ttop).width);
// var timer = setInterval(function () {
//   ttn2.style.left = ttn2.offsetLeft + 1 + 'px';
//   if (ttn2.offsetLeft >= (window.getComputedStyle(ttop).width - window.getComputedStyle(ttn2).width)) {
//     console.log(45);
// ttn2.style.left = '-' + window.getComputedStyle(ttn2).width
//   }
// }, 10);

// 回到顶部
const mtop = document.querySelector('.mtop')
window.addEventListener('scroll', function () {
  var scrollTop = window.scrollY
  if (scrollTop > 10) {
    mtop.style.display = 'block'
    rz.style.bottom = 100 + 'px'
    rl.style.bottom = 180 + 'px'
    top1.style.backgroundColor = '#ddb0cc'
  } else {
    mtop.style.display = 'none'
    rz.style.bottom = 40 + 'px'
    rl.style.bottom = 120 + 'px'
    top1.style.backgroundColor = 'rgb(171, 99, 238)'
  }
})
mtop.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})



