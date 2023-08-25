var button1 = document.getElementById('read_buttom1');

button1.addEventListener('click', function() {
    var card1 = document.querySelector('.card1');
    card1.classList.toggle('active');

    if (card1.classList.contains('active')) {
        return button1.textContent = 'Leia menos';
    }

    button1.textContent = 'Leia mais'
});