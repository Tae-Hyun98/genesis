# genesis (개인프로젝트)
> genesis를 프로모션형태로 변경하여 제작한 프로모션사이트입니다.

<img width="1402" alt="genesis" src="https://github.com/Tae-Hyun98/genesis/assets/119056869/fe97b20a-5609-424f-8b4b-49184a04b121">

## 목차

  ### 1. [프로젝트 소개](#1-프로젝트-소개)
  ### 2. [제작기간](#2-제작-기간--20230703--20230706)
  ### 3. [사용한 기술스택](#3-사용한-skills)
  ### 4. [페이지 구성](#4-페이지-구성-1)
  ### 5. [주요기능(코드)](#5-주요기능)   
   - #### [네비게이션 언더바](#5-1-섹션도달시-네비게이션-언더바)  
   - #### [아코디언 탭메뉴](#5-2-아코디언-탭메뉴)  
   - #### [숫자카운트 애니메이션](#5-3-숫자증가-애니메이션)  
  ### 6. [느낀점](#6-느낀점-1)

<br/> 

## 1. 프로젝트 소개
- genesis를 프로모션형태로 변경하여 제작한 프로모션사이트입니다.

- 퍼블리싱 및 기능구현은 **개인 100%** 작업입니다.

- HTML5, SCSS로 마크업 및 스타일을 입혔으며, swiper.js라이브러리로 슬라이드효과를 주었고, gsap.js라이브러리를 사용하여 스크롤애니메이션효과를 주었습니다.

- SCSS는 vscode extenstion인 Live Sass Compiler를 이용하여 SCSS로 제작하였습니다.

- 주요기능으로는 **해당섹션도달시 네비게이션 언더바, performance 아코디언 탭메뉴, 숫자카운트 애니메이션** 등이 있습니다.

- 제작된 프로젝트는 Github를 통해 배포를 하였습니다.
  
<br/>

## 2. 제작 기간 : 2023.07.03 ~ 2023.07.06

<br/>

## 3. 사용한 Skills  
  <a href="#!"><img src="https://img.shields.io/badge/html5-E34F26?style=flat&logo=html5&logoColor=white"/></a>
  <a href="#!"><img src="https://img.shields.io/badge/scss-CC6699?style=flat&logo=sass&logoColor=white"/></a>
  <a href="#!"><img src="https://img.shields.io/badge/jquery-0769AD?style=flat&logo=jquery&logoColor=white"/></a>
  <a href="#!"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white"/></a>

  <a href="#!"><img src="https://img.shields.io/badge/swiper.js-6332F6?style=flat&logo=swiper&logoColor=white"/></a>
  <a href="#!"><img src="https://img.shields.io/badge/gsap.js-88CE02?style=flat&logo=greensock&logoColor=white"/></a>
    
  <a href="#!"><img src="https://img.shields.io/badge/visual studio code-007ACC?style=flat&logo=visualstudiocode&logoColor=white"/></a>
  <a href="#!"><img src="https://img.shields.io/badge/github-181717?style=flat&logo=github&logoColor=white"/></a>

<br/>

## 4. 페이지 구성  
페이지는 **인트로페이지, 메인페이지**로 구성되어있습니다.

<br/>

## 5. 주요기능  
### 5-1. 섹션도달시 네비게이션 언더바  
<img src="https://github.com/Tae-Hyun98/genesis/assets/119056869/9c7143d6-634f-4c0d-9533-51939093f59e" width=90%/>

#### 👇👇👇👇👇👇
<details>
 <summary>🔎 코드보기</summary>

 #### 해당 섹션의 offsetTop값을 변수에 담은뒤 if문으로 논리연산자를 이용한 조건을 걸어 window.scrollY가 조건에 맞는위치에 있으면 해당 네비게이션에 클래스를 붙이고, 아니면 제거를 하도록 구현하였습니다.
```javascript
const visual = document.querySelector('.visual').offsetTop;
const design = document.querySelector('.design_section').offsetTop - 200;
const color = document.querySelector('.color_section').offsetTop - 200;
const performanceSection = document.querySelector('.performance_section').offsetTop - 200;
const gallerySection = document.querySelector('.gallery_section').offsetTop - 200;

window.addEventListener('scroll', () => {
  for (let nav of navigation) {
    nav.classList.remove('on');
  }
  if (window.scrollY >= visual && window.scrollY <= design) {
    navigation[0].classList.add('on');
  } else if (window.scrollY >= design && window.scrollY <= color) {
    navigation[1].classList.add('on');
  } else if (window.scrollY >= color && window.scrollY <= performanceSection) {
    navigation[2].classList.add('on')
  } else if (window.scrollY >= performanceSection && window.scrollY <= gallerySection) {
    navigation[3].classList.add('on')
  } else if (window.scrollY >= gallerySection) {
    navigation[4].classList.add('on')
  }
});
```
</details>

<br/>

------------

### 5-2. 아코디언 탭메뉴
<img src="https://github.com/Tae-Hyun98/genesis/assets/119056869/c7e39066-4f6c-4eb2-833b-a377b89e1e91" width=90%/>

#### 👇👇👇👇👇👇
<details>
 <summary>🔎 코드보기</summary>

 #### 각 탭들에게 클릭이벤트를 주어 선택된 탭에게 클래스를 주어 선택된 탭과 같은 인덱스를 가진 배경이 나타나도록 조건을 걸어주었으며, 탭에대한 정보는 jQuery문법을 사용하여 정보가 숨겨져 있다면 slideDown으로 보이도록하였고, 아니라면 slideUp으로 숨겨지도록 구현하였습니다.
```javascript
const tabOn = document.querySelectorAll('.performance .tab .tab_tit');
const tabDesc = document.querySelectorAll('.performance .tab_bg>div');
const tabBg = document.querySelectorAll('.tab_bg>div>div');
tabOn.forEach((item, idx) => {
  item.addEventListener('click', () => {
    for (let el of tabOn) {
      el.classList.remove('on');
    }
    tabOn[idx].classList.add('on');

    tabDesc.forEach((descitem, i) => {
      if (idx === i) {
        tabDesc[idx].style.display = 'block'
        gsap.from(tabBg[i], 0.8, {
          opacity: 0
        })
      } else {
        descitem.style.display = 'none'
      }
    })

    if (idx === 3) {
      gsap.from(engineDesc, 1, {
        opacity: 0,
        y: 200
      })
      engineCount();
    }
  })

})

$(function () {
  $(".tab_tit").click(function () {
    $('.desc p').slideUp();
    if ($(this).siblings('.desc').children('p').is(':hidden')) {
      $(this).siblings('.desc').children('p').slideDown();
    }
  });
});
```
</details>

<br/>

------------

### 5-3. 숫자증가 애니메이션
<img src="https://github.com/Tae-Hyun98/genesis/assets/119056869/27e3f618-6a44-4ecc-88d7-fb1fb5c78bd8" width=90%/>

#### 👇👇👇👇👇👇
<details>
 <summary>🔎 코드보기</summary>

 #### setInterval을 사용하여 초기값을 0으로 지정한 변수를 선언해주고 그 변수가 if문에 해당하는 값에 도달하면 clearInterval로 중지되도록 구현을 하였습니다.
```javascript
//인트로 카운트
let countBox = document.querySelector('.counting');

let count = 0;

setInterval(() => {
  if (count === 100) {
    clearInterval(counting);
    return false;
  }
  count += 1;
  countBox.innerHTML = count + '%'
}, 10);

//performence engine카운트
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
```
</details>

<br/>

------------

## 6. 느낀점  
- genesis 프로모션사이트를 제작하면서 스크롤 애니메이션 라이브러리인 gsap.js의 timeline을 활용할 수 있게 되었습니다.
- 디자인에 대한 부분이 미흡하지만 이번프로젝트를 하며 디자인에 대한 부분을 보완할 수 있는 계기가 되었습니다.





