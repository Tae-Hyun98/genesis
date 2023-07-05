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

//color섹션에서 이미지클릭시 scale커지는거
const pic = document.querySelectorAll('.genesis_color li');
const swiimg = document.querySelectorAll('.genesis_color li img');
let state = 0;
pic.forEach((item, idx) => {

  item.addEventListener('click', () => {
    for (let el of swiimg) {
      el.classList.remove('scale');
    }
    if (state === 0) {
      swiimg[idx].classList.add('scale');
      state = 1;
    } else {
      swiimg[idx].classList.remove('scale');
      state = 0;
    }
  });
});


const tabOn = document.querySelectorAll('.performance .tab p');
const tabDesc = document.querySelectorAll('.performance .tab_desc>div');

tabOn.forEach((item,idx)=>{
  item.addEventListener('click',()=>{
    for(let el of tabOn){
      el.classList.remove('on');
    }
    tabOn[idx].classList.add('on');

    tabDesc.forEach((descitem,i)=>{
      if(idx===i){
        tabDesc[idx].style.display='block'
      }else{
        descitem.style.display='none'
      }
    })
  })
})



const swiper = new Swiper('.genesis_color', {
  speed: 1000,
  slidesPerView: 'auto',
  centeredSlides: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});