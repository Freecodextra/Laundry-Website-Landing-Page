var calcel = document.querySelector('.call-to-action .cancel');
var burger = document.querySelector('header .burger');
var callToAction = document.querySelector('.call-to-action');
var navBar = document.querySelector("header .nav-bar");
var links = document.querySelectorAll("header .nav-bar ul li a");
var lists = document.querySelectorAll("header .nav-bar ul li");
var logo = document.querySelector("header .nav-bar ul li.logo");






calcel.onclick = () => {
    callToAction.style.display = "none";
}
var toggleBurger = false;
burger.onclick = () => {
    burger.classList.toggle("turn");
    navBar.classList.toggle("close");
}

links.forEach((link, index) => {
        link.setAttribute("id", index);
        link.onclick = (event) => {
            handleClick(event);
        }
});

function handleClick(e) {
    const linkId = e.target.id;
            console.log(x);
    links.forEach((item, index) => {
        if (linkId == index) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
    navBar.classList.add("close");
    burger.classList.remove("turn");
}

// ACCORDION
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].setAttribute("id", i);
  acc[i].addEventListener("click", function(event) {
    this.classList.toggle("actives");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.style.borderBottom = "none";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.style.borderBottom = "1px solid #bbb";
    } 
    handleClose(event);
  });
}

function handleClose(event) {
    let unique = event.target.id;
    for (let i = 0; i < acc.length; i++) {
            if (unique != i) {
                var panel = acc[i].nextElementSibling;
                acc[i].style.borderBottom = "none";
                acc[i].classList.remove("actives");
                panel.style.maxHeight = null;
            }
        
    }
}

//  ONSCROLL
var x = window.innerWidth;
var y = document.documentElement.scrollTop;
window.onscroll = () => {
    handleScroll();
    x = window.innerWidth;
    y = document.documentElement.scrollTop;
}
window.onresize = () => {
     handleScroll();
    x = window.innerWidth;
    y = document.documentElement.scrollTop;
}

function handleScroll() {
    if (y > 450 && x < 767) {
        burger.style.position = "fixed";
        burger.style.backgroundColor = "#b73e3e";
        burger.style.top = "20px";
        navBar.style.position = "absolute";
        navBar.style.height = "100%";
        navBar.style.top = y.toString() + "px";
        navBar.style.background = "#b73e3e";
    } else if (y < 450 && x < 767) {
        burger.style.position = "absolute";
        burger.style.backgroundColor = "transparent";
        burger.style.top = "40px";
        navBar.style.position = "absolute";
        navBar.style.height = "100%";
        navBar.style.top = "60px";
        navBar.style.background = "linear-gradient(transparent 0%,#b73e3ef8 10%, #b73e3ef8 20%, #b73e3ef8 30%, #b73e3ef8 40%, #b73e3ef8 50%, #b73e3ef8 60%, #b73e3ef8 70%, #b73e3ef8 80%, #b73e3ef8 90%, #b73e3ef8 100%)";
    } else if (y > 450 && x > 767) {
        navBar.style.position = "fixed";
        navBar.style.top = "0";
        navBar.style.width = "100%";
        navBar.style.height = "30px";
        logo.classList.add("hide");
        navBar.style.background = "#b73e3e";
        lists.forEach(list => {
            list.style.marginTop = "0";
        })
    } else if (y < 450 && x > 767) {
        navBar.style.position = "inherit";
        navBar.style.width = "auto";
        navBar.style.height = "auto";
        logo.classList.remove("hide");
        navBar.style.background = "transparent";
        lists.forEach(list => {
            list.style.marginTop = "25px";
        })
    }
}