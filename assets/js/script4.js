var button4 = document.getElementById('read_buttom4');

button4.addEventListener('click', function() {
    var card4 = document.querySelector('.card4');
    card4.classList.toggle('active');

    if (card4.classList.contains('active')) {
        return button4.textContent = 'Leia menos';
    }

    button4.textContent = 'Leia mais'
});