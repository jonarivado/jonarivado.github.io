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
    var someDiv = document.getElementById('resume');
   var distanceToTop = someDiv.getBoundingClientRect().top;
   if(distanceToTop <= 0 && distanceToTop > -someDiv.clientHeight) {
     document.getElementById('mynav').style.color = 'white';
   }
   else {
    document.getElementById('mynav').style.color = 'black';
   }

   if(isElementInViewport(document.getElementById('edu'))) {
    document.getElementById('edu').classList.add('animate__animated', 'animate__slideInUp');

   }

  }, false);

  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
     rect.top >= 0 &&
     rect.left >= 0 &&
     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
   }

//fibbonaci animation
   document.onreadystatechange = () => {
  
    if (document.readyState === 'complete') {
              
      /**
       * Setup your Lazy Line element.
       * see README file for more settings
       */

      let el = document.querySelector('#jonathanSun');
                let myAnimation = new LazyLinePainter(el, {"ease":"easeInOutQuad","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#222F3D","strokeCap":"square","reverse":true}); 
                myAnimation.paint();
    }
  }