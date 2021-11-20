const menuItem1 = document.getElementById('home');
const menuItem2 = document.getElementById('About');
const menuItem3 = document.getElementById('Process');
const menuItem4 = document.getElementById('Process');
const menuItem5 = document.getElementById('hProcessome');

document.querySelector('#menu').addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('showmenu');
});

document.querySelector('#men').addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('showmenu');
});

var scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

// const elementstoshow = document.querySelectorAll('.show-on-scroll');

// function loop() {
//   elementstoshow.forEach((element) => {
//     if (isElementInViewport(element)) {
//       element.classList.add('is-visible');
//     } else {
//       element.classList.remove('is-visible');
//     }
//   });
//   scroll(loop);
// }

// loop();

// function isElementInViewport(el) {
//   // Special bonus for those using jQuery
//   if (typeof jQuery === 'function' && el instanceof jQuery) {
//     el = el[0];
//   }

//   var rect = el.getBoundingClientRect();

//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight ||
//         document.documentElement.clientHeight) /* or $(window).height() */ &&
//     rect.right <=
//       (window.innerWidth ||
//         document.documentElement.clientWidth) /* or $(window).width() */
//   );
// }
