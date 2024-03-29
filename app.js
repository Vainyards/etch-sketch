let trailEnabled = false;

function createGrid() {
  const gridSize = document.getElementById('grid-size').value;
  const gridContainer = document.getElementById('grid-container');

  // Clear previous grid
  gridContainer.innerHTML = '';

  // Set custom property for grid size
  document.documentElement.style.setProperty('--grid-size', gridSize);

  // Generate a random color for hover effect
  const hoverColor = getRandomColor();

  // Create the grid
  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gridContainer.appendChild(cell);
  }

  // Enable trail on mouse leave
  gridContainer.addEventListener('mouseleave', () => {
    trailEnabled = true;
  });

  // Disable trail on mouse enter
  gridContainer.addEventListener('mouseenter', () => {
    trailEnabled = false;
  });

  // Change color on hover
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.addEventListener('mouseenter', () => {
      if (!trailEnabled) {
        cell.style.backgroundColor = hoverColor;
      }
    });

    cell.addEventListener('mouseleave', () => {
      if (!trailEnabled) {
        cell.style.backgroundColor = 'color';
      }
    });
  });
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Initial grid creation
createGrid();