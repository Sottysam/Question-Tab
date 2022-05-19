const s1 = document.querySelectorAll(".s1")
const s2 = document.querySelectorAll(".s2")
const span = document.querySelector(".span")

s1.forEach(function(btn){
    btn.addEventListener("click", function(e){
       e.currentTarget.parentElement.parentElement.parentElement.classList.add("close");;
       e.currentTarget.parentElement.parentElement.parentElement.classList.add("open");
    })
})

s2.forEach(function(btn){
    btn.addEventListener("click", function(e){
       e.currentTarget.parentElement.parentElement.parentElement.classList.remove("close");;
       e.currentTarget.parentElement.parentElement.parentElement.classList.remove("open");
    })
})


