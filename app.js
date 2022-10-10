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
        burger.style.backgroundColor = "#1746a2";
        burger.style.top = "20px";
        navBar.style.position = "fixed";
        navBar.style.height = "100%";
        navBar.style.top = "0px";
        navBar.style.background = "#1746a2";
    } else if (y < 450 && x < 767) {
        burger.style.position = "absolute";
        burger.style.backgroundColor = "transparent";
        burger.style.top = "40px";
        navBar.style.position = "fixed";
        navBar.style.height = "100%";
        navBar.style.top = "60px";
        navBar.style.background = "linear-gradient(transparent 0%,#1746a2f8 10%, #1746a2f8 20%, #1746a2f8 30%, #1746a2f8 40%, #1746a2f8 50%, #1746a2f8 60%, #1746a2f8 70%, #1746a2f8 80%, #1746a2f8 90%, #1746a2f8 100%)";
    } else if (y > 450 && x > 767) {
        navBar.style.position = "fixed";
        navBar.style.top = "0";
        navBar.style.width = "100%";
        navBar.style.height = "30px";
        logo.classList.add("hide");
        navBar.style.background = "#1746a2";
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