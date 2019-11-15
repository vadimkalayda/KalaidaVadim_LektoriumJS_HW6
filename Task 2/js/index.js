let taggingBlock = document.querySelector('.tagging');

function addTaggingElementFunc(myPosition, myBlock, val, myLeft, myTop, zIndex) {
  let taggingElem = `<div class="tagging-element" draggable="true" style="top: ${myTop}px; left: ${myLeft}px; z-index: ${zIndex};">
  <span class="tagging-title">${val}</span>
  <span class="tagging-delete">X</span>
</div>`;


  myBlock.insertAdjacentHTML(myPosition, taggingElem);
}

addTaggingElementFunc('beforeend', taggingBlock, 'Lorem Ipsum', 200, 200, 0);
addTaggingElementFunc('beforeend', taggingBlock, 'Lorem', 200, 300, 1);
addTaggingElementFunc('beforeend', taggingBlock, 'Lorem ipsum dolor...', 100, 100, 1);

let dragItem = document.querySelectorAll('.tagging-element'),
  itemDelete = document.querySelectorAll('.tagging-delete'),
  itemText = document.querySelectorAll('.tagging-title');
let initX, initY, mousePressX, mousePressY;

function addEventFunc() {

  for(let i = 0; i < dragItem.length; i++) {

    dragItem[i].addEventListener('mousedown', function(event) {
      initX = this.offsetLeft;
      initY = this.offsetTop;
      mousePressX = event.clientX;
      mousePressY = event.clientY;

      this.addEventListener('mousemove', repositionElement, false);

      window.addEventListener('mouseup', function() {
        dragItem[i].removeEventListener('mousemove', repositionElement, false);
      }, false);

    }, false);

    function repositionElement(event) {
      this.style.left = initX + event.clientX - mousePressX + 'px';
      this.style.top = initY + event.clientY - mousePressY + 'px';
    }

    dragItem[i].ondragstart = function() {
      return false;
    };
    
    itemText[i].addEventListener('mousedown', function () {
      itemDelete[i].classList.toggle('active');
    });

    itemDelete[i].addEventListener('mousedown', function () {
      dragItem[i].className = 'tagging-elementNone';
    });
  }
}

addEventFunc();



