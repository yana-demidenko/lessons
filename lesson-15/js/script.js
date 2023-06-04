document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const clearError = (elementId) => {
        document.getElementById(elementId).textContent = '';
    };

    const showError = (elementId, message) => {
        document.getElementById(elementId).textContent = message;
    };

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const accept = document.getElementById('accept').checked;

    clearError('nameError');
    clearError('phoneError');
    clearError('acceptError');

    if (name === '') {
        showError('nameError', 'Поле не должно быть пустым');
    }

    if (phone === '') {
        showError('phoneError', 'Поле не должно быть пустым');
    } else if (!/^\d+$/.test(phone)) {
        showError('phoneError', 'Введите только цифры в поле "Ваш номер телефона"');
    }

    if (/\d/.test(name)) {
        showError('nameError', 'Имя не должно содержать цифры');
    }

    if (!accept) {
        showError('acceptError', 'Вы должны согласиться с условиями');
    }

    if (name !== '' && phone !== '' && /^\d+$/.test(phone) && !/\d/.test(name) && accept) {
        alert('Форма отправлена');
        document.getElementById('form').reset();
    }
})