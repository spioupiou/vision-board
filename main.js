const allImages = document.querySelectorAll(".pic");

document.addEventListener('DOMContentLoaded', (event) => {
  allImages.forEach(node => {
    draggableNode = new Draggable(node);
  });
});

const handleClick = (event) => {
  allImages.forEach(node => {
    node.classList.remove('foreground');
  });
  event.currentTarget.classList.add('foreground');
  console.log(draggableNode.get());
}

allImages.forEach(node => {
  node.addEventListener('click', handleClick);
});
