var button2 = document.getElementById('read_buttom2');

button2.addEventListener('click', function() {
    var card2 = document.querySelector('.card2');
    card2.classList.toggle('active');

    if (card2.classList.contains('active')) {
        return button2.textContent = 'Leia menos';
    }

    button2.textContent = 'Leia mais'
});