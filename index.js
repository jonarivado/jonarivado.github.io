//Navigation
function openMobileNav() {
  document.getElementById("mobileNav").style.transform = "translateX(0%)";
}

function closeMobileNav() {
  document.getElementById("mobileNav").style.transform = "translateX(100%)";
}

//Listen to scroll

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

window.addEventListener(
  "scroll",
  () => {
    var someDiv = document.getElementById("resume");
    var distanceToTop = someDiv.getBoundingClientRect().top;
    if (distanceToTop <= 0 && distanceToTop > -someDiv.clientHeight) {
      document.getElementById("mynav").style.color = "white";
    } else {
      document.getElementById("mynav").style.color = "black";
    }
  },
  false
);

document.addEventListener("aos:in:education", ({ detail }) => {
  document.getElementById("arrowDown").style.display = "none";
});

var callScroll = false;

document.addEventListener("aos:in:call", ({ detail }) => {
  if (!callScroll) {
    let el2 = document.querySelector("#call");
    let myAnimation2 = new LazyLinePainter(el2, {
      ease: "easeInOutQuad",
      strokeWidth: 1,
      strokeOpacity: 1,
      strokeColor: "#222F3D",
      strokeCap: "square"
    });
    myAnimation2.paint();
    callScroll = true;
  }
});

/*function isElementInViewport(elem) {
    var div = document.getElementById(elem)
    var clientHeight = div.offsetHeight();
    return clientHeight >= 0;
  }*/

//fibbonaci animation
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    let el = document.querySelector("#jonathanSun");
    let myAnimation = new LazyLinePainter(el, {
      ease: "easeInOutQuad",
      strokeWidth: 1,
      strokeOpacity: 1,
      strokeColor: "#222F3D",
      strokeCap: "square",
      reverse: true
    });
    myAnimation.paint();
  }
};

//show or hide skill pages
function showDiv(id) {
  //document.getElementById(id).style.display = 'block';
  document.getElementById(id).style.transform = "translateX(0%)";
  document.body.classList.add("noscroll");
}

function hideDiv(id) {
  document.getElementById(id).style.transform = "translateX(-100%)";
  //document.getElementById(id).style.display = 'hidden';
  document.body.classList.remove("noscroll");
}
