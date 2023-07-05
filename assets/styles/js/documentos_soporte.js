let dropZone = document.getElementById('drop_zone');
let documentoSubido = document.getElementById('documento_subido');
let progressBar = document.querySelector('#progress_bar');
const btn_subir = document.querySelector("#btn_subir");
const campo_archivo = document.querySelector("#campo_archivo");
const btn_continue = document.querySelector("#continue");
const btn_continuar_modal = document.querySelector("#btn_continuar_modal");


let name_file;

btn_continuar_modal.addEventListener("click", () => {
    window.location.href = "./documentos_firmar.html";
});

dropZone.addEventListener('dragover', function (e) {
    e.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', function (e) {
    e.preventDefault();
    dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', function (e) {
    e.preventDefault();
    dropZone.classList.remove('dragover');

    // Obtener los archivos que se soltaron
    let files = e.dataTransfer.files;

    // Recorrer los archivos y realizar acciones
    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        // Aquí puedes ejecutar la lógica necesaria con cada archivo
        console.log('Archivo soltado:', file.name);

        name_file = file.name;
        let reader = new FileReader();

        reader.onprogress = function (event) {
            if (event.lengthComputable) {
                let percentLoaded = (event.loaded / event.total) * 100;
                progressBar.style.width = percentLoaded + '%';
            }
        };

        reader.onload = function (event) {
            let data = event.target.result;
            console.log('Archivo cargado:', data);

            documentoSubido.querySelector('.text-title b').textContent = file.name;
            documentoSubido.querySelector('i').textContent = (file.size / 1024).toFixed(2) + ' KB';

            documentoSubido.style.display = "block";
            dropZone.style.display = 'none';
            btn_subir.disabled = false;
            campo_archivo.innerHTML = name_file;
            btn_continue.disabled = false;
        };

        reader.readAsDataURL(file);

    }
});

// Evitar que el archivo se abra en una nueva pestaña
window.addEventListener('dragover', function (e) {
    e.preventDefault();
    e.stopPropagation();
});

window.addEventListener('drop', function (e) {
    e.preventDefault();
    e.stopPropagation();
});