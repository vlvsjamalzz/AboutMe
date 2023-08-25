var button3 = document.getElementById('read_buttom3');

button3.addEventListener('click', function() {
    var card3 = document.querySelector('.card3');
    card3.classList.toggle('active');

    if (card3.classList.contains('active')) {
        return button3.textContent = 'Leia menos';
    }

    button3.textContent = 'Leia mais'
});