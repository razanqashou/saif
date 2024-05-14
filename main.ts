
let loginForm = document.querySelector(".login-form")
let menuBar = document.querySelector("#menu-bar")
let amenu = document.querySelector(".navbar")

function showform(){
    loginForm?.classList.add("active")
}
function hideform(){
   loginForm?.classList.remove("active")

}
function showmenu(){
    menuBar?.classList.toggle("fa-times")
    amenu?.classList.toggle("active")
}