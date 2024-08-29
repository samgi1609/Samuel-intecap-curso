// Datos iniciales en localStorage
if (!localStorage.getItem('users')) {
    const initialUsers = [
        { name: 'Javier', lastname: 'Girón', role: 'Administrador', email: 'admin@hotelesgt.com', phone: '12345678', password: 'admin123' }
    ];
    localStorage.setItem('users', JSON.stringify(initialUsers));
}

let loginAttempts = 0;

// Lógica de inicio de sesión
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        loginAttempts = 0;
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('user-screen').style.display = 'block';
        document.getElementById('admin-info').textContent = `Usuario: ${user.name} ${user.lastname}`;
        loadUsers();
    } else {
        loginAttempts++;
        document.getElementById('error-message').textContent = 'Datos incorrectos. Intentos restantes: ' + (3 - loginAttempts);
        if (loginAttempts >= 3) {
            window.close(); // Esto no cerrará la ventana en navegadores modernos, es solo un ejemplo
        }
    }
});

function loadUsers() {
    const users = JSON.parse(localStorage.getItem('users'));
    const tbody = document.querySelector('#users-table tbody');
    tbody.innerHTML = '';

    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.lastname}</td>
            <td>${user.role}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
        `;
        tbody.appendChild(row);
    });
}

document.getElementById('add-user-btn').addEventListener('click', function() {
    document.getElementById('user-screen').style.display = 'none';
    document.getElementById('add-user-screen').style.display = 'block';
});

document.getElementById('cancel-add-user').addEventListener('click', function() {
    document.getElementById('add-user-screen').style.display = 'none';
    document.getElementById('user-screen').style.display = 'block';
});

document.getElementById('add-user-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!name || !lastname || !email || !phone) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const newUser = { name, lastname, role: 'Gerente', email, phone };
    const users = JSON.parse(localStorage.getItem('users'));
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    document.getElementById('add-user-form').reset();
    document.getElementById('add-user-screen').style.display = 'none';
    document.getElementById('user-screen').style.display = 'block';

    loadUsers();
});

document.getElementById('logout-btn').addEventListener('click', function() {
    document.getElementById('user-screen').style.display = 'none';
    document.getElementById('login-screen').style.display = 'block';
});