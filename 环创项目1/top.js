const mtop = document.querySelector('.mtop')
mtop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})


const input = document.querySelector('.reach')
const ul = document.querySelector('.result-list')
console.log(input)
input.addEventListener('focus', function () {
    ul.style.display = 'block'
    input.classList.add('search')
})

input.addEventListener('blur', function () {
    ul.style.display = 'none'
    input.classList.remove('search')
})

const l1 = document.querySelector('.l1')
const list1 = document.querySelector('.list1')
l1.addEventListener('mouseenter', function () {
    list1.style.display = 'block'
})
l1.addEventListener('mouseleave', function () {
    list1.style.display = 'none'
})
// 2
const l2 = document.querySelector('.l2')
const list2 = document.querySelector('.list2')
l2.addEventListener('mouseenter', function () {
    list2.style.display = 'block'
})
l2.addEventListener('mouseleave', function () {
    list2.style.display = 'none'
})
// 3
const l3 = document.querySelector('.l3')
const list3 = document.querySelector('.list3')
l3.addEventListener('mouseenter', function () {
    list3.style.display = 'block'
})
l3.addEventListener('mouseleave', function () {
    list3.style.display = 'none'
})
// 4
const l4 = document.querySelector('.l4')
const list4 = document.querySelector('.list4')
l4.addEventListener('mouseenter', function () {
    list4.style.display = 'block'
})
l4.addEventListener('mouseleave', function () {
    list4.style.display = 'none'
})
// 5
const l5 = document.querySelector('.l5')
const list5 = document.querySelector('.list5')
l5.addEventListener('mouseenter', function () {
    list5.style.display = 'block'
})
l5.addEventListener('mouseleave', function () {
    list5.style.display = 'none'
})
// 头像
const tx = document.querySelector('.tx')
const txBig = document.querySelector('.txBig')
const goon = document.querySelector('.goon')
tx.addEventListener('click', function () {
    goon.style.display = 'block'
    tx.classList.add('tx')
})
const brk = document.querySelector('.break')
brk.addEventListener('click', function () {
    goon.style.display = 'none'
    brk.classList.add('.break')
})

let input1 = document.querySelector('.input1')
input1.addEventListener('click', () => {
    input1.addEventListener('change', e => {
        console.log(e.target.files);
        let url = URL.createObjectURL(e.target.files[0])
        console.log(url);
        tx.src = url
        txBig.src = url
        return (tx)
        return (txBig)
    })
})
