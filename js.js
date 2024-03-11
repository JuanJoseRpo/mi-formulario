const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.querySelector('#nombre').value;
  const correo = document.querySelector('#correo').value;
  const contrasena = document.querySelector('#contrasena').value;
  const confirmarContrasena = document.querySelector('#confirmar_contrasena').value;

  // Validación de datos

  if (nombre === '') {
    alert('El nombre es obligatorio');
    return;
  }

  if (correo === '') {
    alert('El correo electrónico es obligatorio');
    return;
  }

  if (contrasena === '') {
    alert('La contraseña es obligatoria');
    return;
  }

  if (confirmarContrasena === '') {
    alert('Confirmar contraseña es obligatorio');
    return;
  }

  if (contrasena !== confirmarContrasena) {
    alert('Las contraseñas no coinciden');
    return;
  }

  // Envío de datos a un servidor (ejemplo)

  const data = {
    nombre,
    correo,
    contrasena,
  };

  fetch('/registro', {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert('Usuario registrado correctamente');
        window.location.href = '/login';
      } else {
        alert(data.message);
      }
    });
});
