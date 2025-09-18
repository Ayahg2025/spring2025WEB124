// Ayah Ghazouli / 09.17.2025
// Source: JavaScript30 by Wes Bos
// New: Dynamic CSS variable updates from input controls
// Challenge: Syncing input values with CSS variables in real time

const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));