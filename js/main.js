const exteriorPopup = document.querySelector('.exterior_pop');
const interiorPopup = document.querySelector('.interior_pop');
const designPopupClose = document.querySelectorAll('.popup_close');
const exterior = document.querySelector('.exterior');
const interior = document.querySelector('.interior');
//외장디자인 팝업
exterior.addEventListener('click', () => {
  exteriorPopup.style.opacity = '1';
  exteriorPopup.style.scale = '1';

  designPopupClose[0].addEventListener('click', () => {
    exteriorPopup.style.opacity = '0';
    exteriorPopup.style.scale = '0';
  });

})

interior.addEventListener('click', () => {
  interiorPopup.style.opacity = '1';
  interiorPopup.style.scale = '1';

  designPopupClose[1].addEventListener('click', () => {
    interiorPopup.style.opacity = '0';
    interiorPopup.style.scale = '0';
  });

})



const swiper = new Swiper('.genesis_color', {
  // effect: "fade",
  speed: 1000,
  slidesPerView: 'auto',
  centeredSlides: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});