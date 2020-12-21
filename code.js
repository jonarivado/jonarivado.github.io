//Navigation
function openMobileNav() {
    document.getElementById("mobileNav").style.transform = "translateX(0%)";
  }

function closeMobileNav() {
    document.getElementById("mobileNav").style.transform = "translateX(100%)";
  }

  //Listen to scroll
  window.addEventListener('scroll', () => {
    if(window.scrolltop == 210) {
      document.getElementById('mynav').style.background = "#ccc";
    }
    else {
      document.getElementById('mynav').style.background = "transparent";
    }
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

