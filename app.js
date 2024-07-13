
let logoPersona = document.querySelector(".imagen_logo_persona");
let texto_1 = document.getElementById("texto_1");
let texto_2 = document.getElementById("texto_2");
let resultadoTexto = document.querySelector(".resultado_texto");
let resultadoContenedor = document.querySelectorAll(".ocultar");

function encriptarBoton() {
    let entrada = document.getElementById("contenedor_texto").value;

    if (entrada.trim() === "") {
        swal("Ooops!", "Debes ingresar un texto", "warning");
        return;
    } else {
        ocultar();
        let salida = encriptar(entrada);
        resultadoTexto.textContent = salida;
    
        document.getElementById("contenedor_texto").value = "";
        const copiarBoton = document.getElementById("boton_copiar");
        copiarBoton.innerText = "Copiar";
    
    }

}

function desencriptarBoton() {
    let entradaTexto = document.getElementById("contenedor_texto").value;

    if (entradaTexto.trim() === "") {
        swal("Ooops!", "Debes ingresar un texto", "warning");
        return;
    } else {
        ocultar()
        var entrada = document.getElementById("contenedor_texto").value;
        var salida = desencriptar(entrada);
        resultadoTexto.textContent = salida;
    
        document.getElementById("contenedor_texto").value = "";
        const copiarBoton = document.getElementById("boton_copiar");
        copiarBoton.innerText = "Copiar";
    }
   
}

function encriptar(texto) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return texto
}

function desencriptar(texto) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][1])) {
            texto = texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
    return texto
}

function ocultar() {
    logoPersona.classList.add("ocultar");
    texto_1.classList.add("ocultar");
    texto_2.classList.add("ocultar");
    resultadoContenedor[0].classList.add("activate");
    resultadoContenedor[1].classList.add("activate");
    resultadoTexto.classList.add("resultado_contenedor")

}

const botonCopiar = document.getElementById("boton_copiar");
botonCopiar.addEventListener('click', () => {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
            var contenido = document.querySelector(".resultado_texto").textContent;

            const entradaTemporal = document.createElement("textarea");
            entradaTemporal.value = contenido;

            document.body.appendChild(entradaTemporal);

            entradaTemporal.select();
            document.execCommand("copy");

            document.body.removeChild(entradaTemporal);

            botonCopiar.innerText = "¡Copiado!";
        }
    });
});