// const form = document.querySelector('.login-form');

// //Generar el evento y la funciòn
// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const datos = {};
//   for (const element of form.elements) {
//     if (element.name) {
//       datos[element.name] = element.value;
//     }
//   }
//   if (datos.email && datos.password) {
//     console.log(datos);
//     form.reset();
//   } else {
//     alert('campos vacios');
//   }
// });



const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  
  const formData = Object.fromEntries(new FormData(form));
  const { email, password } = formData;

  if (email && password) {
    console.log(formData);
    form.reset();
  } else {
    alert('Campos vacios');
  }
});



