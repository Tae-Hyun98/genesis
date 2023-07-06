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


//performance 탭메뉴
const tabOn = document.querySelectorAll('.performance .tab p');
const tabDesc = document.querySelectorAll('.performance .tab_desc>div');

tabOn.forEach((item, idx) => {
  item.addEventListener('click', () => {
    for (let el of tabOn) {
      el.classList.remove('on');
    }
    tabOn[idx].classList.add('on');

    tabDesc.forEach((descitem, i) => {
      if (idx === i) {
        tabDesc[idx].style.display = 'block'
      } else {
        descitem.style.display = 'none'
      }
    })

    if (idx === 3) {
      engineCount();
    }
  })

})


function engineCount() {
  const psCount = document.querySelector('.ps');
  const kgfCount = document.querySelector('.kgf');
  let ps = 0;
  let kgf = 0;
  setInterval(() => {
    if (ps === 304) {
      clearInterval(count);
      return false;
    }
    ps += 1;
    psCount.innerHTML = ps;
  }, 10)

  setInterval(() => {
    if (kgf === 43) {
      clearInterval();
      return false;
    }
    kgf += 1;
    kgfCount.innerHTML = kgf + '.0';
  }, 75)
}



const swiper = new Swiper('.genesis_color', {
  speed: 1000,
  slidesPerView: 'auto',

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


const gallerySwiper = new Swiper('.gallery_div', {
  loop: true,
  speed: 1000,
  slidesPerView: 3,
  loopAdditionalSlides: 1,
  loopedSlides: 2,
  slidesPerGroup: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000
  }

});

let slides = document.querySelectorAll('.swiper-slide');
for (let i of slides) {
  i.addEventListener('mouseover', () => {
    gallerySwiper.autoplay.stop();
  });
  i.addEventListener('mouseout', () => {
    gallerySwiper.autoplay.start();
  });
}


//gsap애니메이션
const navigation = document.querySelectorAll('.nav_box li a');
const design = document.querySelectorAll('.content>section');
navigation.forEach((item, idx) => {
  item.addEventListener('click', () => {
    design.forEach((item, i) => {
      if (idx === i) {

        navigation[idx].classList.add('on');

        gsap.to(window, 0.4, {
          scrollTo: {
            y: design[idx],
            offsetY: 70
          }
        })
      }
    })

  })
})