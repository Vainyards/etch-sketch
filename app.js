let trailEnabled = false;
let hoverColor = 'lightblue'; // Change to any color you like

function createGrid() {
  const gridSize = document.getElementById('grid-size').value;
  const gridContainer = document.getElementById('grid-container');

  // Clear previous grid
  gridContainer.innerHTML = '';

  // Set custom property for grid size
  document.documentElement.style.setProperty('--grid-size', gridSize);

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

    /*cell.addEventListener('mouseleave', () => {
      if (!trailEnabled) {
        cell.style.backgroundColor = 'white';
      }
    });*/
  });
}

// Initial grid creation
createGrid();