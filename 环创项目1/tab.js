
const as = document.querySelectorAll('.tab-nav a')

for (let i = 0; i < as.length; i++) {

    as[i].addEventListener('click', function () {
        // console.log('111')
        var tab = document.querySelector('.tab-content');


        document.querySelector('.tab-nav .active').classList.remove('active')

        this.classList.add('active')
        // this.classList.add(`.s${i + 1}`)
        tab.style.top = 220 + 'px'

        // 干掉别人
        document.querySelector('.tab-content .active').classList.remove('active')

        document.querySelector(`.tab-content .item:nth-child(${i + 1})`).classList.add('active')

        var timer = setInterval(function () {
            if (tab.offsetTop <= 180) { clearInterval(timer); } tab.style.top = tab.offsetTop + -5 + 'px';
        }, 60);


    })
}

const ac = document.querySelectorAll('.tab-nav1 a')
for (let i = 0; i < ac.length; i++) {

    ac[i].addEventListener('click', function () {
        // console.log('鼠标经过')
        var tab1 = document.querySelector('.tab-content');
        document.querySelector('.tab-nav1 .active').classList.remove('active')
        this.classList.add('active')
        // this.classList.add(`.s${i + 1}`)
        tab1.style.top = 200 + 'px'
        // 干掉别人
        document.querySelector('.tab-content .active').classList.remove('active')

        document.querySelector(`.tab-content .item:nth-child(${i + 1})`).classList.add('active')

        var timer1 = setInterval(function () {
            if (tab1.offsetTop <= 160) { clearInterval(timer1); } tab1.style.top = tab1.offsetTop + -5 + 'px';
        }, 60);


    })
}
const superior1 = document.querySelector('.superior1')
const superior2 = document.querySelector('.superior2')
const superior3 = document.querySelector('.superior3')
const superior4 = document.querySelector('.superior4')
const superior5 = document.querySelector('.superior5')
const superior6 = document.querySelector('.superior6')
const superior7 = document.querySelector('.superior7')
const s1 = document.querySelector('.s1')
const s2 = document.querySelector('.s2')
const s3 = document.querySelector('.s3')
const s4 = document.querySelector('.s4')
const s5 = document.querySelector('.s5')
const s6 = document.querySelector('.s6')
const s7 = document.querySelector('.s7')
const su1 = document.querySelector('.su1')
const su2 = document.querySelector('.su2')
const su3 = document.querySelector('.su3')
const su4 = document.querySelector('.su4')
const su5 = document.querySelector('.su5')
const su6 = document.querySelector('.su6')
const su7 = document.querySelector('.su7')
s2.classList.remove('s2')
s3.classList.remove('s3')
s4.classList.remove('s4')
s5.classList.remove('s5')
s6.classList.remove('s6')
s7.classList.remove('s7')
function ste() {
    superior1.classList.remove('s1')
    superior2.classList.remove('s2')
    superior3.classList.remove('s3')
    superior4.classList.remove('s4')
    superior5.classList.remove('s5')
    superior6.classList.remove('s6')
    superior7.classList.remove('s7')
}
function stu() {
    su1.classList.remove('z1')
    su2.classList.remove('z2')
    su3.classList.remove('z3')
    su4.classList.remove('z4')
    su5.classList.remove('z5')
    su6.classList.remove('z6')
    su7.classList.remove('z7')
}
superior1.addEventListener('click', function () {
    ste()
    s1.classList.add('s1')
})
superior2.addEventListener('click', function () {
    ste()
    s2.classList.add('s2')
})
superior3.addEventListener('click', function () {
    ste()
    s3.classList.add('s3')
})
superior4.addEventListener('click', function () {
    ste()
    s4.classList.add('s4')
})
superior5.addEventListener('click', function () {
    ste()
    s5.classList.add('s5')
})
superior6.addEventListener('click', function () {
    ste()
    s6.classList.add('s6')
})
superior7.addEventListener('click', function () {
    ste()
    s7.classList.add('s7')
})

su1.addEventListener('click', function () {
    stu()
    su1.classList.add('z1')
})
su2.addEventListener('click', function () {
    stu()
    su2.classList.add('z2')
})
su3.addEventListener('click', function () {
    stu()
    su3.classList.add('z3')
})
su4.addEventListener('click', function () {
    stu()
    su4.classList.add('z4')
})
su5.addEventListener('click', function () {
    stu()
    su5.classList.add('z5')
})
su6.addEventListener('click', function () {
    stu()
    su6.classList.add('z6')
})
su7.addEventListener('click', function () {
    stu()
    su7.classList.add('z7')
})

const imgsData = [
    { url: 'img/Tx.jpg', title: '小蓝喜欢巧克力', color: 'rgb(51, 192, 238)' },
    { url: 'img/红.jpg', title: '小红喜欢香水', color: 'rgb(230, 63, 49)' },
    { url: 'img/绿.jpg', title: '小绿喜欢风扇', color: 'rgb(45, 219, 114)' },
    { url: 'img/C.png', title: '小黑喜欢篮球', color: 'rgb(0, 0, 0)' },
]
const imgs = document.querySelector('.imgs img')
const love = document.querySelector('.love')
let a = 0
setInterval(function () {
    a++
    if (a >= imgsData.length) {
        a = 0
    }
    imgs.src = imgsData[a].url
    love.innerHTML = imgsData[a].title
    love.style.color = imgsData[a].color
}, 1000)
