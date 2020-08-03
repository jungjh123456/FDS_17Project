// let liList = document.querySelectorAll('.nav__menuItem a');
// let liList1 = document.querySelectorAll('.nav__subMenu');


// let newArr = Array.from(liList);


// newArr[0].addEventListener('mouseover', function() {
//   toggleElements();
// })




// function toggleElements(){
//   [].forEach.call(liList1, function(toggle){
//     toggle.classList.toggle('isAct');
//   })
// }

// let btn = document.getElementById('btn');
// let liList = document.querySelector('.nav__subMenu');

// btn.addEventListener('mouseover', function() {
//   toggleElements();
// })

// function toggleElements(){
//      [].forEach.call(liList, function(toggle){
//        toggle.classList.toggle('isAct');
//      })
//    }

(function(window,document){
  'use strict'
let searchBtn = document.querySelector('.form__btnSearch');



searchBtn.addEventListener('mouseover', function(){
  let searchInput = document.getElementById('searchInput');
  searchInput.getAttribute('class');
  searchInput.setAttribute('class','isSearch');
});

// window.addEventListener('mouseover', function() {
//   let searchInput = document.getElementById('searchInput');
//   searchInput.getAttribute('class');
//   searchInput.classList.remove('isSearch');
// })
})(window,document)
