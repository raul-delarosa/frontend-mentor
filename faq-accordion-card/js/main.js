const accordion = document.getElementsByClassName('faq-accordion-card__accordion__button');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        accordion[i].classList.toggle('faq-accordion-card__accordion__button--active');

        const panel = accordion[i].nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
}