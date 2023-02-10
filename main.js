let btnup = document.querySelector('.btnUp');
let btnright = document.querySelector('.btnRight');
let btndown = document.querySelector('.btnDown');
let btnleft = document.querySelector('.btnLeft');
let s;

// btnup.onclick = () => {
//   btnPress();
// }

// document.addEventListener('keydown', e => {
//   console.log(e);
//   if (e.code === 'ArrowUp') {
//     s = e.code;
//     btnPress();
//   }
// });

// document.addEventListener('keydown', e => {
//   console.log(e);
//   if (e.code === 'ArrowRight') {
//     s = e.code;
//     btnPress();
//   }
// });

// document.addEventListener('keydown', e => {
//   console.log(e);
//   if (e.code === 'ArrowDown') {
//     s = e.code;
//     btnPress();
//   }
// });

// document.addEventListener('keydown', e => {
//   console.log(e);
//   if (e.code === 'ArrowLeft') {
//     s = e.code;
//     btnPress();
//   }
// });



// btnPress = () => {
//   switch (true) {
//     case s === 'ArrowUp':
//       btnup.classList.add('btnActive')
//       setTimeout(() => {
//         btnup.classList.remove('btnActive');
//       }, 100)
//     break;

//     case s === 'ArrowRight':
//       btright.classList.add('btnActive')
//       setTimeout(() => {
//         btright.classList.remove('btnActive');
//       }, 100)
//     break;

//     case s === 'ArrowDown':
//       btndown.classList.add('btnActive')
//       setTimeout(() => {
//         btndown.classList.remove('btnActive');
//       }, 100)
//     break;
    
//     case s === 'ArrowLeft':
//       btnleft.classList.add('btnActive')
//       setTimeout(() => {
//         btnleft.classList.remove('btnActive');
//       }, 100)
//     break;
//   }
// }


//--------- 2 -ci variant---------

/* Uncaught ReferenceError: btnPress is not defined
at HTMLButtonElement.onclick ((index):18:63) */
/* console da bele sehv vere biler. Fikir vermeyin. Html de onclick 1-ci variant uchun yazmishdim ozum pozmadim
  ki 1-ci varianti da goresiz ve 2-ci var. ishlemeyine mane etmir, sadece tanimir deye sehv yazir.
*/


// click

btnup.addEventListener('click', e =>{
  btnup.classList.add('btnActive')
  setTimeout(() => {
    btnup.classList.remove('btnActive');
  }, 100)
});

btnright.addEventListener('click', e =>{
  btnright.classList.add('btnActive')
  setTimeout(() => {
    btnright.classList.remove('btnActive');
  }, 100)
});

btndown.addEventListener('click', e =>{
  btndown.classList.add('btnActive')
  setTimeout(() => {
    btndown.classList.remove('btnActive');
  }, 100)
});

btnleft.addEventListener('click', e =>{
  btnleft.classList.add('btnActive')
  setTimeout(() => {
    btnleft.classList.remove('btnActive');
  }, 100)
});

// keyboard - keydown

document.addEventListener('keydown', e => {
  console.log(e);
  console.log(e.code);
  switch (e.code) {              
    case 'ArrowUp':
      btnup.classList.add('btnActive')
      setTimeout(() => {
        btnup.classList.remove('btnActive');
      }, 100)
    break;

    case 'ArrowRight':
      btnright.classList.add('btnActive')
      setTimeout(() => {
        btnright.classList.remove('btnActive');
      }, 100)
    break;

    case 'ArrowDown':
      btndown.classList.add('btnActive')
      setTimeout(() => {
        btndown.classList.remove('btnActive');
      }, 100)
    break;
    
    case 'ArrowLeft':
      btnleft.classList.add('btnActive')
      setTimeout(() => {
        btnleft.classList.remove('btnActive');
      }, 100)
    break;
  }
});

