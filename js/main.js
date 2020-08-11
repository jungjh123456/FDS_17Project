// let liList = document.querySelectorAll('.nav__menuItem a');
// let liList1 = document.querySelectorAll('.nav__subMenu');


// let newArr = Array.from(liList);


// newArr[0].addEventListener('mouseover', function() {
//   toggleElements();
// })





(function( document){
  'use strict'

  const $nav = document.querySelectorAll('.buttonBurger');
  const $list = document.querySelector('.flex-group');
  let listtoggle = Array.from($nav);
  console.log(listtoggle);

  listtoggle[1].onclick = function(){
    const $list = document.querySelector('.flex-group');
    console.log(listtoggle[1]);
    console.log($list);
    $list.classList.toggle('isAct');
  }

  listtoggle[0].onclick = function(){
    const $list = document.querySelector('.flex-group');
    $list.classList.remove('isAct');
  }





  //isAct 추가
  // $nav.onmouseover =(e) => {
  //   if(!e.target.matches('.nav__menu > li > a')) {
  //     return;
  //   }
  //   console.log(e.target);
  //   const subM =e.target.nextElementSibling; /*<- ul : nav__subMenu  */
  //   e.target.nextElementSibling.classList.add('isAct');
  //   // test.classList.add('isAct');
    
  //   // isAct 제거a
  //   $nav.onmouseout =(e) => {
  //     if(!e.target.matches('.nav__menu > li > a ')) {
  //       return;
  //     }
  //     e.target.nextElementSibling.classList.remove('isAct');
  //   }
  //   subM.onmouseover = e =>{
  //     subM.classList.add('isAct')
  //     subM.onmouseout = e => {
  //       subM.classList.remove('isAct')
  //     }
  //   }
  // }


})( document)
