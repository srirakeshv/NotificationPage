let markAsRead=document.querySelector('.mark')
let notify=document.querySelector('.notificationcenter')
let disable=document.querySelectorAll('.dot')
let notification=document.querySelector('.notification')


markAsRead.addEventListener('click',()=>{
    notification.classList.toggle('none')
    notify.classList.toggle('bg')
    disable.forEach(dot=>{
        dot.classList.toggle('disable')
    })
})