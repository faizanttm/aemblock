export default function decorate(block) {
  // Extract data from the block (assumes a table structure)
  const rows = block.querySelectorAll(':scope > div > div');
  const label = rows[1]?.textContent.trim() || 'Default Button';
  const link = rows[3]?.textContent.trim() || '#';
  const style = rows[5]?.textContent.trim() || 'default';

  // Clear the block’s original content
  block.innerHTML = '';

  // Create the button element
  const button = document.createElement('a');
  button.classList.add('btn', style);
  button.href = link;
  button.textContent = label;
  // Append to block
  block.append(button);
}