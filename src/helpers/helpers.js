export const formatDate = (timestamp) => {
  let date = new Date(Number(timestamp));
  let options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  return date.toLocaleDateString('es-ES', options);
}


export const errorMessages = (code) => {
  const errors = {
      "auth/wrong-password": "Contraseña incorrecta",
      "auth/user-not-found": "Correo electronico no encontrado",
      "auth/too-many-requests": "Demasiadas solicitudes",
      "auth/email-already-in-use": "El email ya esta siendo utilizado",
      "auth/requires-recent-login": "Vuelva a iniciar sesion para cambiar su contraseña",
      "auth/invalid-action-code": "Este enlace ya no es valido",
      "auth/user-mismatch": "El usuario que intenta autenticarse no coincide con el usuario que ha iniciado la sesión",
  };

  return errors[code] ? errors[code] : "Error desconocido";
}