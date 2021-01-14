const panels = document.querySelectorAll('.panel');
const parentPanel = document.querySelector('.panels');
 
function switcherPanel(e) {
    if (e.target.classList.contains('panel')) {
        panels.forEach(panel => panel.classList.remove('panel_open'));
        e.target.classList.toggle('panel_open');
        activeText();
    }
}

function activeText(e) {
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('panel_active');
    }
}

parentPanel.addEventListener('click', switcherPanel);
panels.forEach(panel => panel.addEventListener('transitionend', activeText));