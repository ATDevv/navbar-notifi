let isHidden = true
const ele = document.getElementById('btn')
const nextEle = ele.nextElementSibling
ele.addEventListener('click', () => {
    if (isHidden) {
        ele.parentElement.classList.add('par')
        isHidden = false
        nextEle.classList.add('show')
        ele.textContent = 'Click me again'
    } else {
        ele.parentElement.classList.remove('par')
        isHidden = true
        nextEle.classList.remove('show')
        ele.textContent = 'Click me'
    }
})
