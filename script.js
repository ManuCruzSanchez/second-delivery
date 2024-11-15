//MENÚ DE BOTÓN

// Obtener el icono y menú
const menuToggle = document.getElementById('icono');
const menu = document.getElementById('hmenu');

// Añadir evento de clic al icono
menuToggle.addEventListener('click', () => {
  // Alternar la clase 'show' en el menú
  if (menu.style.display == "block") {
    menu.style.display = "none"
  } else {
    menu.style.display = "block"
  }
});


//FORMULARIO

//BOTÓN DE FORMULARIO
function listenForValidation() {
  const PERSONAL_DATA_FORM = document.getElementById("personal-data-form");
  PERSONAL_DATA_FORM.addEventListener("submit", validatePersonalDataForm);
}

//
function validatePersonalDataForm(e) {

  const FEELING = e.target.feeling.value;

  let valid = true;

  if (!FEELING) {
    document.getElementById("form-feeling").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-feeling").style.visibility = "hidden";

  if (!BACK) {
    document.getElementById("form-back").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-back").style.visibility = "hidden";

  if (!valid) {
    e.preventDefault();
  } else {
    saveData(FEELING,);
  }
}

//GUARDAR DATO EN LOCAL HOST
function saveData(feeling, back) {
  localStorage.setItem("feeling", feeling);
}

//NOMBRE DE FUNCIÓN (ESCUCHAR ACCIÓN "ENVIAR")
listenForValidation();