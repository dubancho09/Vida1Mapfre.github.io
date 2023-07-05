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

const btn_transacciones_1 = document.querySelector("#btn_transacciones_1");
const btn_transacciones_2 = document.querySelector("#btn_transacciones_2");

const btn_influencia_1 = document.querySelector("#btn_influencia_1");
const btn_influencia_2 = document.querySelector("#btn_influencia_2");

const btn_representante_1 = document.querySelector("#btn_representante_1");
const btn_representante_2 = document.querySelector("#btn_representante_2");


const btn_recursos_1 = document.querySelector("#btn_recursos_1");
const btn_recursos_2 = document.querySelector("#btn_recursos_2");

btn_transacciones_1.addEventListener("click", () => {
    change_color(btn_transacciones_1, btn_transacciones_2);
});

btn_transacciones_2.addEventListener("click", () => {
    change_color(btn_transacciones_1, btn_transacciones_2);
});




btn_influencia_1.addEventListener("click", () => {
    change_color(btn_influencia_1, btn_influencia_2);
});

btn_influencia_2.addEventListener("click", () => {
    change_color(btn_influencia_1, btn_influencia_2);
});


btn_representante_1.addEventListener("click", () => {
    change_color(btn_representante_1, btn_representante_2);
});

btn_representante_2.addEventListener("click", () => {
    change_color(btn_representante_1, btn_representante_2);
});


btn_recursos_1.addEventListener("click", () => {
    change_color(btn_recursos_1, btn_recursos_2);
});


btn_recursos_2.addEventListener("click", () => {
    change_color(btn_recursos_1, btn_recursos_2);
});


const checkDatos = document.querySelector('#check-1');
const checkSubir = document.querySelector('#check-2');
const firma_datos = document.querySelector('#firma_datos');
const btn_continue_1 = document.querySelector('#continue_1');
const btn_continue_2 = document.querySelector('#continue_2');
const documento_subido = document.querySelector('#subir_archivo');

checkDatos.addEventListener('change', () => {
    if (checkDatos.checked == true) {
        documento_subido.style.display = 'none';
        firma_datos.style.display = 'block';
    }
});

checkSubir.addEventListener('change', () => {
    if (checkSubir.checked == true) {
        firma_datos.style.display = 'none';
        documento_subido.style.display = 'block';
    }
});

btn_continue_1.addEventListener('click', () => {
    location.href = "./datos_tomador_2.html";
});

btn_continue_2.addEventListener('click', () => {
    location.href = "./datos_tomador_2.html";
});




