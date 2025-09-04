document.addEventListener('mousemove', (e) => {
  const trail = document.createElement('div');
  trail.className = 'stitch-trail';
  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;
  document.body.appendChild(trail);
  setTimeout(() => trail.remove(), 100);
});