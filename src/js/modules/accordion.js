const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);

    const closeAllBlocks = () => {
        btns.forEach(btn => {
            btn.classList.remove('active-style');
            btn.nextElementSibling.classList.remove('active-content');
            btn.nextElementSibling.style.maxHeight = '0px';
        });
    };

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            closeAllBlocks();

            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px'; 
        });
    });
};

export default accordion;