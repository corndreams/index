const l1 = document.querySelector('.l1')
const l2 = document.querySelector('.l2')
// const l3 = document.querySelector('.l3')
const r2 = document.querySelector('.r2')
const r1 = document.querySelector('.r1')
// const r3 = document.querySelector('.r3')
l1.addEventListener('click', function () {
    r2.style.display = 'none'
    // r3.style.display = 'none'
    r1.style.display = 'block'
})
l2.addEventListener('click', function () {
    r1.style.display = 'none'
    // r3.style.display = 'none'
    r2.style.display = 'block'
})
// l3.addEventListener('click', function () {
//     r1.style.display = 'none'
//     r2.style.display = 'none'
//     r3.style.display = 'block'
// })