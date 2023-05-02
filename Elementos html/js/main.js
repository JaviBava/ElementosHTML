const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(gridItem => {
  const tooltipContent = gridItem.getAttribute('data-tooltip');
  const tooltipElement = document.createElement('div');
  tooltipElement.classList.add('tooltip');
  tooltipElement.textContent = tooltipContent;
  gridItem.appendChild(tooltipElement);

  gridItem.addEventListener('mouseover', () => {
    const tooltip = gridItem.querySelector('.tooltip');
    const rect = gridItem.getBoundingClientRect();
    const leftPosition = rect.left + window.pageXOffset;
    const topPosition = rect.top + rect.height + window.pageYOffset;
    
    tooltip.style.left = `${leftPosition}px`;
    tooltip.style.top = `${topPosition}px`;
  });
});




