document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    const dropdownItems = Array.from(dropdown.querySelectorAll('.dropdown__item'));
   
    dropdownValue.addEventListener('click', () => {
        dropdownList.classList.toggle('dropdown__list_active');
      });
      dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          const selectedValue = item.querySelector('.dropdown__link').textContent;
          dropdownValue.textContent = selectedValue;
          dropdownList.classList.remove('dropdown__list_active');
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      dropdownList.classList.remove('dropdown__list_active');
    }
  });
});
