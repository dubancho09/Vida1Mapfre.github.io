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

const btn_contribuyente_1 = document.querySelector("#btn_contribuyente_1");
const btn_contribuyente_2 = document.querySelector("#btn_contribuyente_2");

const btn_autoretenedor_1 = document.querySelector("#btn_autoretenedor_1");

console.log(btn_autoretenedor_1);
const btn_autoretenedor_2 = document.querySelector("#btn_autoretenedor_2");



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

btn_contribuyente_1.addEventListener("click", () => {
    change_color(btn_contribuyente_1, btn_contribuyente_2);
});

btn_contribuyente_2.addEventListener("click", () => {
    change_color(btn_contribuyente_1, btn_contribuyente_2);
});

// btn_autoretenedor_1.addEventListener("click" , ()=> {
//     change_color(btn_autoretenedor_1 ,  btn_autoretenedor_2);
// });

// btn_autoretenedor_2.addEventListener("click" , ()=> {
//     change_color(btn_autoretenedor_1 ,  btn_autoretenedor_2);
// });


const btn_agregar_vinculado = document.querySelector("#btn_agregar");
const tabla_informacion_politica = document.querySelector("#tabla_informacion_politica");

btn_agregar_vinculado.addEventListener("click", () => {
    tabla_informacion_politica.style.display = "block";
});


const btn_agregar_operaciones = document.querySelector('#btn_agregar_operaciones');
const tabla_operaciones_adicionales = document.querySelector('#tabla_operaciones_adicionales');

btn_agregar_operaciones.addEventListener('click', () => {
    tabla_operaciones_adicionales.style.display = 'block';
});

const btn_agregar_reclamaciones = document.querySelector('#btn_agregar_reclamaciones');
const tabla_reclamaciones = document.querySelector('#tabla_reclamaciones');

btn_agregar_reclamaciones.addEventListener('click', () => {
    tabla_reclamaciones.style.display = 'block';
});


