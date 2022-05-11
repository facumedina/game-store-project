function register(event) {
  
  const el = event.target.elements;
  event.preventDefault()
  params = {
    from_name: el.email.value,
    userName: el.userName.value,
    title: '<h1>Bienvenido a Games Chief</h1>',
    message: `Gracias por comunicarse con nosotros. Nos pondremos en contacto a la brevedad`,
  }
  
  emailjs.send('service_cocsh87', 'template_jbus0xp', params)
    .then((resp) => swal ("El mensaje ha sido enviado correctamente.","En breve nos pondremos en contacto para resolver su consulta", "success"))
    .catch((error) => swal ("Error", "No se pudo enviar el correo, por favor verifique los datos", "erorr"))
  emailjs.send('service_cocsh87', 'template_jbus0xp', params)
}