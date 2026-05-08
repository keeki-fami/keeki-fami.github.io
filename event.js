window.addEventListener('scroll', function() {
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;

    const cards = document.querySelectorAll('.card');

    cards.forEach(function(card) {
        const distanceToBox = card.offsetTop;
        if(scroll + windowHeight > distanceToBox + 200) {
            card.classList.add('is-active');
        }
    })
});

window.onload = function() {
    const spinner = document.getElementById('loading');

    spinner.classList.add('loaded');
}