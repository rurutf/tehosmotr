window.addEventListener('DOMContentLoaded', () => {
    // Modal
    const modalTrigger = document.querySelector('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('[data-close');

    modalTrigger.addEventListener('click', () => {
        modal.classList.add('show');
        modal.classList.remove('hide');
        modal.style.display="block";
        document.body.style.overflow="hidden";
    });
    modalClose.addEventListener('click', () => {
        modal.classList.add('hide');
        modal.classList.remove('show');
        modal.style.display="none";
        document.body.style.overflow="";
    });
});