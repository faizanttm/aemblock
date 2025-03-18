export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);
  const rows = block.querySelectorAll(':scope > div > div');
  rows.forEach((row,index) => {
    if(row.textContent == 'section-class'){
      block.parentElement.parentElement.classList.add(rows[index+1].textContent);
      rows[index].remove();
      rows[index+1].remove();
    }
  });

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}
