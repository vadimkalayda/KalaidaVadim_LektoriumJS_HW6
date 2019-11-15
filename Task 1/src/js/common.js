let carousel = document.querySelector('.carousel'),
  carouselSlide = document.querySelector('.carousel_slide'),
  carouselBtn = document.querySelector('.carousel-btn'),
  btnIcon = document.querySelector('#btnIcon'),
  block = document.querySelector('.block'),
  zoomNumber = 0,
  initX, initY, firstY, firstX;

block.addEventListener('mousedown', function(e) {

  e.preventDefault();
  initX = this.offsetLeft;
  initY = this.offsetTop;
  firstX = e.pageX;
  firstY = e.pageY;

  this.addEventListener('mousemove', dragIt, false);

  window.addEventListener('mouseup', function() {
    block.removeEventListener('mousemove', dragIt, false);
  }, false);

}, false);

function dragIt(e) {
  this.style.left = initX+e.pageX-firstX + 'px';
  this.style.top = initY+e.pageY-firstY + 'px';
}

block.ondragstart = function() {
  return false;
};

block.addEventListener('touchstart', function(e) {

  e.preventDefault();
  initX = this.offsetLeft;
  initY = this.offsetTop;
  let touch = e.touches;
  firstX = touch[0].pageX;
  firstY = touch[0].pageY;

  this.addEventListener('touchmove', swipeIt, false);

  window.addEventListener('touchend', function(e) {
    e.preventDefault();
    block.removeEventListener('touchmove', swipeIt, false);
  }, false);

}, false);

function swipeIt(e) {
  let contact = e.touches;
  this.style.left = initX+contact[0].pageX-firstX + 'px';
  this.style.top = initY+contact[0].pageY-firstY + 'px';
}
