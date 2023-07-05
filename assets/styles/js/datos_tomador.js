//definición de elementos

/* FORMULARIOS */

const btn_continue      = document.querySelector("#continue");
const form              = document.querySelector("#form-data");
const inputs            = form.querySelectorAll("input, select");
const btn_fem           = document.querySelector("#btn_fem");
const btn_mas           = document.querySelector("#btn_mas");



const btn_guardar             = document.querySelector("#btn_guardar");
const nuevo_beneficiario      = document.querySelector("#nuevo-beneficiario");
const agregar_beneficiario    = document.querySelector('#agregar_beneficiario');
const alert_mas_beneficiarios = document.querySelector('#alert_mas_beneficiarios');


//validar formulario (solo para mostrar los estilos)
inputs.forEach(input => {
    input.addEventListener('input', () => {
      
      if ( input.value ) {
        input.classList.add( 'is-valid', 'floating-valid' );
        input.classList.remove( 'is-invalid', 'floating-invalid' );
      } else {
        input.classList.add( 'is-invalid', 'floating-invalid' );
        input.classList.remove( 'is-valid', 'floating-valid' );
      }
  
    });
  });
  
  function validateInputs() {
    
    let valid = true;
  
    inputs.forEach(input => {
      if ( !input.value ) {
        valid = false;
      }
  
      if (input.tagName === "SELECT" && input.value === "") {
        valid = false;
      }
    });
  
    return valid;
  }
  
  
  
  //cambiar el color de los botones
  const change_color = (btn_1 , btn_2) => {
      if (btn_1.classList.contains("button-primary")) {
        btn_1.classList.remove("button-primary");
        btn_1.classList.add("button-secondary");
      } else {
        btn_1.classList.remove("button-secondary");
        btn_1.classList.add("button-primary");
      }
    
      if (btn_2.classList.contains("button-secondary")) {
        btn_2.classList.remove("button-secondary");
        btn_2.classList.add("button-primary");
      } else {
        btn_2.classList.remove("button-primary");
        btn_2.classList.add("button-secondary");
      }
  };
  
  btn_fem.addEventListener("click", ()=>{
      change_color( btn_fem , btn_mas );
  });
  
  btn_mas.addEventListener("click", ()=>{
      change_color( btn_fem , btn_mas );
  });



  btn_guardar.addEventListener("click" , () => {
    nuevo_beneficiario.style.display = "block";
    btn_continue.disabled = false;
    agregar_beneficiario.disabled = true;
    alert_mas_beneficiarios.style.display = 'none';
  });

  btn_continue.addEventListener("click" , () => {
    location.href = "./preguntas_seguridad.html";
  });


/**checkbox */
const check_data = document.querySelector('#flexSwitchCheckChecked');
const form_data = document.querySelector('#form-data');
const data = document.querySelector('#datos_tomador');

check_data.addEventListener('change' , () => {
  if(check_data.checked == true){
    form_data.style.display = 'flex';
    data.style.display = 'none';
  }
  else{
    form_data.style.display = 'none';
    data.style.display = 'block';
  }
});