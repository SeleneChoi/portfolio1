
// DROPDOWN MENU - PROJECT
const button = document.getElementById('dropdownHoverButton');
const dropdown = document.getElementById('dropdownHover');
                
button.addEventListener('mouseenter', () => {
    dropdown.classList.remove('hidden');
});
                
button.addEventListener('mouseleave', () => {
    dropdown.classList.add('hidden');
});

dropdown.addEventListener('mouseenter', () => {
    dropdown.classList.remove('hidden');

    if(window.location.pathname !== '/project.html'){
    button.classList.add('underline','md:text-3xl');
    }
});

dropdown.addEventListener('mouseleave', () => {
    dropdown.classList.add('hidden');

    if(window.location.pathname !== '/project.html'){
    button.classList.remove('underline','md:text-3xl');
    }
});

//  SLICK SLIDER
$(document).ready(function(){
    // console.log("hmmm");
    $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 1000,
    });
  });
