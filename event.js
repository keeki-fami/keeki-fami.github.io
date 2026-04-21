window.addEventListener('scroll', function() {
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;

    const cards = document.querySelectorAll('.card');

    cards.forEach(function(card) {
        const distanceToBox = card.offsetTop;
        if(scroll + windowHeight > distanceToBox) {
            card.classList.add('is-active');
        }
    })
});