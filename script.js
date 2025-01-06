document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Aquí normalmente enviarías estas credenciales a tu servidor
    console.log('Login attempt:', { email, password });
    
    // Para fines de demostración, muestra una alerta
    alert('Login attempt registered!\nEmail: ' + email);
});
