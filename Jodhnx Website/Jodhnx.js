//menu
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
      
        nav.classList.toggle('show-menu')
      
        toggle.classList.toggle('show-icon')
    })
 }
 showMenu('nav-toggle','nav-menu')
 const dropdownItems = document.querySelectorAll('.dropdown__item')
 dropdownItems.forEach((item) =>{
     const dropdownButton = item.querySelector('.dropdown__button')     
     dropdownButton.addEventListener('click', () =>{
        
         const showDropdown = document.querySelector('.show-dropdown')     
         toggleItem(item)        
         if(showDropdown && showDropdown!== item){
             toggleItem(showDropdown)
         }
     })
 })
 const toggleItem = (item) =>{
   
     const dropdownContainer = item.querySelector('.dropdown__container')
     if(item.classList.contains('show-dropdown')){
         dropdownContainer.removeAttribute('style')
         item.classList.remove('show-dropdown')
     } else{
       
         dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
         item.classList.add('show-dropdown')
     }
 }

 const mediaQuery = matchMedia('(min-width: 1118px)'),
       dropdownContainer = document.querySelectorAll('.dropdown__container')
 const removeStyle = () =>{
    
     if(mediaQuery.matches){
        
         dropdownContainer.forEach((e) =>{
             e.removeAttribute('style')
         })
         dropdownItems.forEach((e) =>{
             e.classList.remove('show-dropdown')
         })
     }
 }
 
 addEventListener('resize', removeStyle)

 //Image

 window.addEventListener('resize', function() {
    var images = document.querySelectorAll('.image');
    images.forEach(function(image) {
      image.style.flexBasis = 'calc(33.333% - 10px)';
      if (window.innerWidth < 768) {
        image.style.flexBasis = '50%';
      }
      if (window.innerWidth < 480) {
        image.style.flexBasis = '100%';
      }
    });
  });

//scroll 
function scrollToSection() {
    var targetSection = document.getElementById("about");
    var offset = document.getElementById("about").offsetHeight + -280; // Hier kannst du den gewünschten Offset anpassen
    var targetPosition = targetSection.offsetTop - offset;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  }
  
 
    if (isTouchDevice()) {
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    } else {
      window.scrollTo(0, targetPosition);
    }
  
  
  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
  }
  
  
