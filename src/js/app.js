var hide = document.querySelector('.hide');
var aside = document.getElementById('nav');
var adminWrapper = document.querySelector('.admin-wrapper');
var arrow = document.querySelector('.fas');
var arrowRight = "fa-arrow-circle-right";


hide.addEventListener('click', function () {
  arrow.classList.toggle(arrowRight);
  if (arrow.classList.length === 3) {
    aside.style.display = 'none';
    adminWrapper.style.gridTemplateAreas = '"header header" "section section" "footer footer"';
  } else {
    aside.style.display = 'block';
    adminWrapper.style.gridTemplateAreas = '"aside header" "aside section" "aside footer"';
  }
});

var actualWidth;
var onResize = function (e) {
  actualWidth = e.target.innerWidth;

  if (actualWidth <= 768) {
    arrow.classList.add('fa-arrow-circle-right');
    aside.style.display = 'none';
    adminWrapper.style.gridTemplateAreas = '"header header" "section section" "footer footer"';
  } else {
    arrow.classList.remove('fa-arrow-circle-right')
    arrow.classList.add('fa-arrow-circle-left');
    aside.style.display = 'block';
    adminWrapper.style.gridTemplateAreas = '"aside header" "aside section" "aside footer"';
  }
};

window.addEventListener('resize', onResize);