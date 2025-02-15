let isHidden = true
document.title = 'Navbar Notifi'
const ele = document.getElementById('btn')
const nextEle = ele.nextElementSibling
ele.addEventListener('click', () => {
    if (isHidden) {
        ele.parentElement.classList.add('par')
        isHidden = false
        nextEle.classList.add('show')
        ele.classList.add('rotate-[180deg]')
    } else {
        ele.parentElement.classList.remove('par')
        isHidden = true
        nextEle.classList.remove('show')
        ele.classList.remove('rotate-[180deg]')
    }
})

const ele2 = document.getElementById('icon')
const check = true
const nextEle2 = ele2.nextElementSibling
const nextEle3 = nextEle2.nextElementSibling
ele2.addEventListener('click', () => {
    nextEle2.classList.add('tran2')
    nextEle3.classList.add('tran3')
})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('tran3')) {
        nextEle2.classList.remove('tran2')
        nextEle3.classList.remove('tran3')
    }
})
