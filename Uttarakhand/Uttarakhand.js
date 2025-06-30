// Future interactivity can go here. For now, just log filter clicks.
document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    alert(`Filter by: ${btn.textContent}`);
  });
});
