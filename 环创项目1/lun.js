// 轮播图
let left = document.querySelector(".button-left")
let right = document.querySelector(".button-right")
let m = document.querySelectorAll(".m")
let images = document.querySelector(".images")
let shell = document.querySelector(".shell")
let index = 0
let time
function position() {
    images.style.left = (index * -100) + "%"
}
function add() {
    if (index >= m.length - 1) {
        index = 0
    } else {
        index++
    }
    for (let i = 0; i < m.length; i++) {
        m[i].classList.remove('ac')
    }
    m[index].classList.add('ac')
}

function desc() {
    if (index < 1) {
        index = m.length - 1
    } else {
        index--
    }
    for (let i = 0; i < m.length; i++) {
        m[i].classList.remove('ac')
    }
    m[index].classList.add('ac')
}

function timer() {
    time = setInterval(() => {
        index++
        desc()
        add()
        position()
    }, 3000)
}
// 左边的按钮

left.addEventListener("click", () => {
    desc()
    position()
    // clearInterval(time)
    // timer()
})
// 右边的按钮
right.addEventListener("click", () => {
    add()
    position()
    // clearInterval(time)
    // timer()
})

for (let i = 0; i < m.length; i++) {
    m[i].addEventListener("click", () => {
        index = i;
        for (let i = 0; i < m.length; i++) {
            m[i].classList.remove('ac')
        }
        m[index].classList.add('ac')
        position();
        // clearInterval(time)
        // timer()
    })
}
// timer()

shell.addEventListener('mouseenter', function () {
    clearInterval(time)
})

shell.addEventListener('mouseleave', function timer() {
    time = setInterval(() => {
        index++
        desc()
        add()
        position()
        console.log('1');
    }, 3000)
})
