document.addEventListener('DOMContentLoaded', function() {
     function switchTab(tabContainer, tabIndex) {
        const tabs = tabContainer.querySelectorAll('.tab');
        const contents = tabContainer.querySelectorAll('.tab__content');
        
        tabs.forEach(tab => tab.classList.remove('tab_active'));
        contents.forEach(content => content.classList.remove('tab__content_active'));
        
        tabs[tabIndex].classList.add('tab_active');
        contents[tabIndex].classList.add('tab__content_active');
    }
  
    const tabsContainers = document.querySelectorAll('.tabs');
    tabsContainers.forEach(container => {
        const tabs = container.querySelectorAll('.tab');
        
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                switchTab(container, index);
            });
        });
    });
});