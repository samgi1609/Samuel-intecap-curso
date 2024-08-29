 // Usuario y contraseña definidos por el programador
        const validUsername = "Coach";
        const validPassword = "sexloard69";
 
        // Selecciona el formulario y el mensaje
        const loginForm = document.getElementById('loginForm');
        const message = document.getElementById('message');
 
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío del formulario
 
            // Obtiene los valores ingresados por el usuario
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
 
            // Verifica si los datos ingresados son correctos
            if (username === validUsername && password === validPassword) {
                message.textContent = "Feliciades shinji!";
                message.style.color = "green";
                // Aquí puedes redirigir al usuario a otra página o realizar alguna acción
            } else {
                message.textContent = "Haz fracasado en tu vida";
                message.style.color = "red";
            }
        });