document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
        window.location.href = 'Level-2 Task-4 secured.html';
    }

    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('currentUsername', username);
            window.location.href = 'Level-2 Task-4 secured.html';
        } else {
            alert('Incorrect username or password');
        }
    });

    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const regUsername = document.getElementById('regUsername').value;
        const regPassword = document.getElementById('regPassword').value;

        if (localStorage.getItem('username') === regUsername) {
            alert('Username already exists. Please choose a different username.');
            return;
        }
        localStorage.setItem('username', regUsername);
        localStorage.setItem('password', regPassword);
        alert('Registration successful! Please login.');
        window.location.href = 'Leve-2 Task-4 index.html';
    });

    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUsername');
        window.location.href = 'Leve-2 Task-4 index.html';
    });

    const username = localStorage.getItem('currentUsername');
    if (username) {
        document.getElementById('username').textContent = username;
    }
});
