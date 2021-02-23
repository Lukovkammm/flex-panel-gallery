const panels = document.querySelectorAll('.panel');
const parentPanel = document.querySelector('.panels');

function switcherPanel(e) {
    panels.forEach(panel => panel.classList.remove('panel_open'));
    panels.forEach(panel => panel.classList.remove('panel_active'));
    if (e.target.classList.contains('panel')) {
        e.target.classList.add('panel_open');
        e.target.classList.add('panel_active');
    }
}

parentPanel.addEventListener('click', switcherPanel);