const exteriorPopup = document.querySelector('.exterior_pop');
const interiorPopup = document.querySelector('.interior_pop');
const designPopupClose = document.querySelectorAll('.popup_close');
const exterior = document.querySelector('.exterior');
const interior = document.querySelector('.interior');


//외장디자인 팝업
exterior.addEventListener('click', () => {
  exteriorPopup.style.opacity = '1';
  exteriorPopup.style.scale = '1';
  popupAni();

  designPopupClose[0].addEventListener('click', () => {
    exteriorPopup.style.opacity = '0';
    exteriorPopup.style.scale = '0';
  });

})

interior.addEventListener('click', () => {
  interiorPopup.style.opacity = '1';
  interiorPopup.style.scale = '1';
  popupInterAni();

  designPopupClose[1].addEventListener('click', () => {
    interiorPopup.style.opacity = '0';
    interiorPopup.style.scale = '0';
  });

})


function popupAni() {
  const exterImg = document.querySelectorAll('.exter_img');
  const exterDesc = document.querySelectorAll('.exter_desc');
  gsap.from(exterImg, 1, {
    delay: 0.3,
    x: -200,
    opacity: 0
  })

  gsap.from(exterDesc, 1, {
    delay: 0.3,
    x: 200,
    opacity: 0
  })

  gsap.to(designPopupClose[0], 1, {
    delay: 0.8,
    opacity: 1
  })

}

function popupInterAni() {
  const interImg = document.querySelectorAll('.inter_img');
  const interDesc = document.querySelectorAll('.inter_desc');
  gsap.from(interImg, 1, {
    delay: 0.3,
    x: -200,
    opacity: 0
  })

  gsap.from(interDesc, 1, {
    delay: 0.3,
    x: 200,
    opacity: 0
  })

  gsap.to(designPopupClose[1], 1, {
    delay: 0.8,
    opacity: 1
  })
}


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
const tabBg = document.querySelectorAll('.tab_desc>div>div');
tabOn.forEach((item, idx) => {
  item.addEventListener('click', () => {
    for (let el of tabOn) {
      el.classList.remove('on');
    }
    tabOn[idx].classList.add('on');

    tabDesc.forEach((descitem, i) => {
      if (idx === i) {
        tabDesc[idx].style.display = 'block'
        gsap.from(tabBg[i], 1, {
          opacity: 0
        })
      } else {
        descitem.style.display = 'none'
      }
    })
    if (idx === 0) {
      t3.from(susDesc, 1, {
        opacity: 0,
        x: -200
      })
    } else if (idx === 1) {
      gsap.from(techDesc, 1, {
        opacity: 0,
        x: 200
      })
    } else if (idx === 2) {
      gsap.from(buildDesc, 1, {
        opacity: 0,
        y: 200
      })
    } else if (idx === 3) {
      gsap.from(engineDesc, 1, {
        opacity: 0,
        y: 200
      })
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
      clearInterval();
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





//gsap애니메이션
const navigation = document.querySelectorAll('.nav_box li a');
const section = document.querySelectorAll('.content>section');
const arrow = document.querySelector('.arrow_bottom');

navigation.forEach((item, idx) => {
  item.addEventListener('click', () => {
    section.forEach((item, i) => {
      if (idx === i) {
        navigation[idx].classList.add('on');

        gsap.to(window, 0.4, {
          scrollTo: {
            y: section[idx],
            offsetY: 70
          }
        })
      }
    })

  })
})

arrow.addEventListener('click', () => {
  gsap.to(window, 0.4, {
    scrollTo: {
      y: section[1],
      offsetY: 70
    }
  })
})


//design section 애니메이션
const designTit = document.querySelector('.design_text h2');
const designDesc = document.querySelector('.design_desc');
const designBtn = document.querySelector('.design_desc .design_btn');
const designDesc2 = document.querySelectorAll('.design_desc2 .tit');
const designDesc3 = document.querySelectorAll('.design_desc2 .desc');

gsap.registerPlugin(ScrollTrigger);


let tl = gsap.timeline({
  scrollTrigger: {
    trigger: section[1],
    start: 'top 40%',
  },
})
tl.from(designTit, 0.6, {
    y: 100,
    opacity: 0
  })
  .from(designDesc, 0.4, {
    y: 100,
    opacity: 0
  }).from(designBtn, 0.4, {
    y: 200,
    opacity: 0
  }).from(designDesc2, 0.7, {
    y: 100,
    opacity: 0
  }).from(designDesc3, 0.5, {
    y: 100,
    opacity: 0
  })


const colorTit = document.querySelector('.color_section h1');
const carImg = document.querySelectorAll('.swiper-slide .color_box');
const colorSelect = document.querySelector('.genesis_color');

let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: section[2],
    start: 'top 40%',
  },
})
t2.from(colorTit, 0.6, {
  scale: 0,
  opacity: 0
}).from(colorSelect, 0.4, {
  opacity: 0
}).from(carImg, 1, {
  x: 1500,
  opacity: 0
})


//performance 부분
const performance = document.querySelector('.performance');
const susDesc = document.querySelector('.sus_desc');
const techDesc = document.querySelector('.tech_desc');
const buildDesc = document.querySelector('.build_desc');
const engineDesc = document.querySelector('.engine_desc');

let t3 = gsap.timeline({
  scrollTrigger: {
    trigger: section[3],
    start: 'top 40%',
  },
})
t3.from(performance, 0.7, {
  scale: 0,
  opacity: 0
}).from(susDesc, 0.5, {
  opacity: 0,
  x: -200
})

const gallery = document.querySelector('.gallery_div');
const util = document.querySelectorAll('.util ul li');
let t4 = gsap.timeline({
  scrollTrigger: {
    trigger: section[4],
    start: 'top 40%',
  },
})
t4.from('.gallery h1', 0.5, {
  opacity: 0,
  y: 100
})
t4.from(gallery, 1, {
  opacity: 0,
  y: 100
})


util.forEach((item, idx) => {
  gsap.from(item, 0.4, {
    scrollTrigger: {
      trigger: section[4],
      start: 'top 20%',
    },
    delay: (idx + 1) * 0.3,
    opacity: 0,
    y: 50
  })
})




//스와이퍼
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
  speed: 800,
  slidesPerView: 'auto',
  loopAdditionalSlides: 1,
  loopedSlides: 2,
  centeredSlides: true,
  autoplay: {
    delay: 5000
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