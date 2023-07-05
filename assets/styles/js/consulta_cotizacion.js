const btn_continue = document.querySelector("#consultar");
const form = document.querySelector("#form-data");
const inputs = form.querySelectorAll("input, select");
const result_table = document.querySelector("#result-table");


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

btn_continue.addEventListener("click", () => {
    result_table.style.display = "block";
});
