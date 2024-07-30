document.addEventListener('DOMContentLoaded', function () {
    let open = document.querySelector(".open")
    let close = document.querySelector(".close")
    let menu = document.querySelector('.navbar ul')

    open.addEventListener('click',()=>{
        open.style.display = "none"
        close.style.display = "inline-block"
        menu.style.right = "0"
    })
    close.addEventListener('click',()=>{
        close.style.display = "none"
        open.style.display = "inline-block"
        menu.style.right = "-100%"
    })

});

