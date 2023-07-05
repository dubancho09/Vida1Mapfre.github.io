//definición de elementos

/* FORMULARIOS */

const btn_continue = document.querySelector(".continue");
const form = document.querySelector("#form-data");
const inputs = form.querySelectorAll("input, select");
const btn_fem = document.querySelector("#btn_fem");
const btn_mas = document.querySelector("#btn_mas");

/* CARD MOTO */
const card_condiciones = document.querySelector(".cond-moto");
const btn_gurdar_moto = document.querySelector("#btn_gurdar_moto");
const btn_close_card = document.querySelector(".button-close-card");
const btn_reset = document.querySelector(".btn-reset");
const descripcion_card1 = document.querySelector(".card-seccionada-item");

/* CARD ARMA DE FUEGO */
const btn_guardar_arma = document.querySelector("#btn_guardar_arma_fuego");
const card_condiciones_arma = document.querySelector(".cond-arma");
const btn_close_card_arma = document.querySelector(".button-close-card-arma");
const descripcion_card_arma = document.querySelector(".card-seccionada-item-arma");
const btn_reset_arma = document.querySelector(".btn-reset-arma");

/* CARD FUMAS */
const card_condiciones_fumas = document.querySelector(".cond-fumas");
const btn_close_card_fumas = document.querySelector(".button-close-card-fumas");
const btn_guardar_fumas = document.querySelector("#btn_guardar_arma_fumas");
const descripcion_card_fumas = document.querySelector(".card-seccionada-item-fumas");
const btn_reset_fumas = document.querySelector(".btn-reset-fumas");

/* CARD HIPERTENSIÓN */
const card_condiciones_hiper = document.querySelector(".cond-hiper");
const btn_close_card_hiper = document.querySelector(".button-close-card-hiper");
const btn_guardar_hiper = document.querySelector("#btn_guardar_arma_hiper");
const descripcion_card_hiper = document.querySelector(".card-seccionada-item-hiper");
const btn_reset_hiper = document.querySelector(".btn-reset-hiper");

//validar formulario (solo para mostrar los estilos)
inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (validateInputs()) {
      btn_continue.disabled = false;
    } else {
      btn_continue.disabled = true;
    }

    if (input.value) {
      input.classList.add('is-valid', 'floating-valid');
      input.classList.remove('is-invalid', 'floating-invalid');
    } else {
      input.classList.add('is-invalid', 'floating-invalid');
      input.classList.remove('is-valid', 'floating-valid');
    }

  });
});

function validateInputs() {

  let valid = true;

  inputs.forEach(input => {
    if (!input.value) {
      valid = false;
    }

    if (input.tagName === "SELECT" && input.value === "") {
      valid = false;
    }
  });

  return valid;
}



//cambiar el color de los botones
const change_color = (btn_1, btn_2) => {
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

btn_fem.addEventListener("click", () => {
  change_color(btn_fem, btn_mas);
});

btn_mas.addEventListener("click", () => {
  change_color(btn_fem, btn_mas);
});



//card moto
const show_optios = () => {
  card_condiciones.classList.add("card-seccionada");
  btn_close_card.style.display = "block";
  descripcion_card1.style.display = "block";
}

const reset_card = () => {
  card_condiciones.classList.remove("card-seccionada");
  btn_close_card.style.display = "none";
  descripcion_card1.style.display = "none";
}


btn_gurdar_moto.addEventListener("click", () => {
  show_optios();
});

btn_close_card.addEventListener("click", () => {
  reset_card();
});

btn_reset.addEventListener("click", () => {
  reset_card(card_condiciones);
});



//card arma de fuego
const show_optios_arma = () => {
  card_condiciones_arma.classList.add("card-seccionada");
  btn_close_card_arma.style.display = "block";
  descripcion_card_arma.style.display = "block";
}

btn_guardar_arma.addEventListener("click", () => {
  show_optios_arma();
});

const reset_card_arma = () => {
  card_condiciones_arma.classList.remove("card-seccionada");
  btn_close_card_arma.style.display = "none";
  descripcion_card_arma.style.display = "none";
}

btn_close_card_arma.addEventListener("click", () => {
  reset_card_arma();
});

btn_reset_arma.addEventListener("click", () => {
  reset_card_arma();
});


//card fumas
const show_optios_fumas = () => {
  card_condiciones_fumas.classList.add("card-seccionada");
  btn_close_card_fumas.style.display = "block";
  descripcion_card_fumas.style.display = "block";
}

btn_guardar_fumas.addEventListener("click", () => {
  show_optios_fumas();
});

const reset_card_fumas = () => {
  card_condiciones_fumas.classList.remove("card-seccionada");
  btn_close_card_fumas.style.display = "none";
  descripcion_card_fumas.style.display = "none";
}

btn_close_card_fumas.addEventListener("click", () => {
  reset_card_fumas();
});

btn_reset_fumas.addEventListener("click", () => {
  reset_card_fumas();
});


//card hipertensión
const show_optios_hiper = () => {
  card_condiciones_hiper.classList.add("card-seccionada");
  btn_close_card_hiper.style.display = "block";
  descripcion_card_hiper.style.display = "block";
}

btn_guardar_hiper.addEventListener("click", () => {
  show_optios_hiper();
});

const reset_card_hiper = () => {
  card_condiciones_hiper.classList.remove("card-seccionada");
  btn_close_card_hiper.style.display = "none";
  descripcion_card_hiper.style.display = "none";
}

btn_close_card_hiper.addEventListener("click", () => {
  reset_card_hiper();
});

btn_reset_hiper.addEventListener("click", () => {
  reset_card_hiper();
});

btn_continue.addEventListener('click', () => {
  location.href = "datos_coberturas.html";
});












