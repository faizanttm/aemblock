export default function decorate(block) {
  // Extract data from the block (assumes a table structure)
  const rows = block.querySelectorAll(':scope > div > div');
  const icon = rows[1]?.textContent.trim() || 'default';

  // Clear the block’s original content
  block.innerHTML = '';

  // Create the button element
  const button = document.createElement('i');
  button.classList.add('fab', icon);
  // Append to block
  block.append(button);
}
