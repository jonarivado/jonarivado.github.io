//Navigation
function openMobileNav() {
    document.getElementById("mobileNav").style.transform = "translateX(0%)";
  }

function closeMobileNav() {
    document.getElementById("mobileNav").style.transform = "translateX(100%)";
  }

  //Listen to scroll
  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

  window.addEventListener('scroll', () => {
    if(scroll >= document.body.offsetHeight) {
      document.getElementById('mynav').style.background='#000000';
    }
  })
  