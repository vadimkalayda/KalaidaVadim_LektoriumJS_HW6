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

function addEventFunc() {

  for(let i = 0; i < dragItem.length; i++) {
    dragItem[i].onmousedown = function(event) {

      let shiftX = event.clientX - dragItem[i].getBoundingClientRect().left;
      let shiftY = event.clientY - dragItem[i].getBoundingClientRect().top;

      document.body.append(dragItem[i]);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        dragItem[i].style.left = pageX - shiftX + 'px';
        dragItem[i].style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      document.addEventListener('mousemove', onMouseMove);

      dragItem[i].onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        dragItem[i].onmouseup = null;
      };

      dragItem[i].ondragstart = function() {
        return false;
      };
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



