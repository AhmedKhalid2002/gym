const links=document.getElementById("links");
const menu=document.getElementById("menu")
const Xmenu=document.getElementById("x-menu")


function hiddenNav(){
    links.classList.add("toggle-nav");
    Xmenu.classList.remove("show-menu");
    menu.classList.add("show-menu")
}
function showNav(){
    links.classList.remove("toggle-nav");
    Xmenu.classList.add("show-menu");
    menu.classList.remove("show-menu")
}

Xmenu.addEventListener("click",hiddenNav)
menu.addEventListener("click",showNav)