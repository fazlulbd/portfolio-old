const mainManu = document.querySelector('.main-manu');
window.addEventListener('scroll', function(){
  mainManu.classList.toggle('manu-bar', window.scrollY > 100)
})

/* ===============================================================Type Js====================================================================*/
var typeText= new Typed('.text',{
  strings:['Web Designer', 'Creative Designer','Web developer'],
  typeSpeed: 100,
  backSpeed: 60,
  loop:true,
})
/* ===============================================================Skill Js====================================================================*/
  
  window.onload = function () {
    let bar = document.querySelectorAll('.bar');
    bar.forEach((progress) => {
      let value = progress.getAttribute('data-value');
      progress.style.width = `${value}%`;
      let count = 0;
      let progressAnimation = setInterval(() => {
        count++;
        progress.setAttribute('data-text', `${count}%`);
        if (count >= value) {
          clearInterval(progressAnimation);
        }
      }, 15);
    });
  };

/* ===============================================================Modal Js====================================================================*/

let preveiwContainer = document.querySelector('.modal-area');
let previewBox = preveiwContainer.querySelectorAll('.modal-item');

document.querySelectorAll('.prot-area .protbtn').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.modal-icon').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

/* ===============================================================Testimonial Js====================================================================*/