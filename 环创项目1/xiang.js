const nav1i = document.querySelector('.nav1i')
const n1 = document.querySelector('.n1')
let clicktime1 = 0
let clicktime2 = 0
let clicktime3 = 0
let clicktime4 = 0
nav1i.addEventListener('click', function () {
    n1.style.display = 'block'
})
var nbtn = document.querySelector('.nbtn')

nbtn.addEventListener('click', function () {
    n1.style.display = 'none'
})
var lt1 = document.querySelector('.lt1')
var lit1 = document.querySelector('.lit1')
lt1.addEventListener('click', function () {
    clicktime1++
    if (clicktime1 % 2 == 0) {
        lit1.style.display = 'none'
    } else {
        lit1.style.display = 'block'
    }

    // lt1.addEventListener('click', function () {
    //     lit1.style.display = 'none'
    // })
})
var lt2 = document.querySelector('.lt2')
var lit2 = document.querySelector('.lit2')
lt2.addEventListener('click', function () {
    clicktime2++
    if (clicktime2 % 2 == 0) {
        lit2.style.display = 'none'
    } else {
        lit2.style.display = 'block'
    }
})
var lt3 = document.querySelector('.lt3')
var lit3 = document.querySelector('.lit3')
lt3.addEventListener('click', function () {
    clicktime3++
    if (clicktime3 % 2 == 0) {
        lit3.style.display = 'none'
    } else {
        lit3.style.display = 'block'
    }
})
var lt4 = document.querySelector('.lt4')
var lit4 = document.querySelector('.lit4')
lt4.addEventListener('click', function () {
    clicktime4++
    if (clicktime4 % 2 == 0) {
        lit4.style.display = 'none'
    } else {
        lit4.style.display = 'block'
    }
})
const nav2i = document.querySelector('.nav2i')
const n2 = document.querySelector('.n2')
nav2i.addEventListener('click', function () {
    console.log('111');
    n2.style.display = 'block'
})
var nbtn2 = document.querySelector('.nbtn2')

nbtn2.addEventListener('click', function () {
    n2.style.display = 'none'
})

