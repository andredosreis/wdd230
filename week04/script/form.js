document.querySelector('form').addEventListener('submit', function(event) {
    var password = document.getElementById('keyphrase');
    var confirmPassword = document.getElementById('keyphrase2');
    
    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        alert('Passwords do not match!');
        password.value = '';
        confirmPassword.value = '';
        password.focus();
    }
});
