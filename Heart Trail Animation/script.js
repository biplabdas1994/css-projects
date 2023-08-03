const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove', () => {
    const posX = event.offsetX;
    const posY = event.offsetY;
    const spanEl = document.createElement('span');
    spanEl.style.left = posX + 'px';
    spanEl.style.top = posY + 'px';
    bodyEl.appendChild(spanEl);
    const size = Math.random() * 100;
    spanEl.style.width = size + "px"
    spanEl.style.height = size + "px"
    setTimeout(() => {
        spanEl.remove()
    }, 3000);
})