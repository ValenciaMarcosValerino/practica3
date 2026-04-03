console.log("registro JS cargado");
const form = document.getElementById("formRecuperacion");
const resultado = document.getElementById("resultado");
const campos = [
    "nombre",
    "password",
    "confirmarPassword",
    "preguntaRecuperacion",
    "correo"
];

function validarCampo(id) {
    const input = document.getElementById(id);
    const error = document.getElementById("error-" + id);

    if (!input || !error) return true;

    error.textContent = "";
    input.classList.remove("valido", "invalido");

    if (input.required && input.validity.valueMissing) {
        error.textContent = "Este campo es obligatorio";
        input.classList.add("invalido");
        return false;
    }

    if (id === "password") {
        if (input.value.length < 8) {
            error.textContent = "La contraseña debe tener al menos 8 caracteres";
            input.classList.add("invalido");
            return false;
        }
    }

    if (id === "confirmarPassword") {
        const password = document.getElementById("password").value;

        if (input.value.length < 8) {
            error.textContent = "La confirmación debe tener al menos 8 caracteres";
            input.classList.add("invalido");
            return false;
        }

        if (input.value !== password) {
            error.textContent = "Las contraseñas no coinciden";
            input.classList.add("invalido");
            return false;
        }
    }

    if (id === "preguntaRecuperacion") {
        if (input.value.trim().length < 5) {
            error.textContent = "La pregunta de recuperación es muy corta";
            input.classList.add("invalido");
            return false;
        }
    }

    if (input.validity.patternMismatch) {
        const mensajes = {
            nombre: "El nombre solo debe contener letras y espacios"
        };

        error.textContent = mensajes[id] || "Formato inválido";
        input.classList.add("invalido");
        return false;
    }

    if (input.validity.typeMismatch) {
        error.textContent = "Correo electrónico inválido";
        input.classList.add("invalido");
        return false;
    }

    input.classList.add("valido");
    return true;
}

campos.forEach(id => {
    const input = document.getElementById(id);

    if (!input) return;

    input.addEventListener("blur", () => validarCampo(id));
    input.addEventListener("input", () => validarCampo(id));
});
form.addEventListener("submit", async function (e) {
    e.preventDefault();

    let valido = true;

    campos.forEach(id => {
        if (!validarCampo(id)) {
            valido = false;
        }
    });

    if (!valido) return;

    const data = {
        correo: document.getElementById("correo").value,
        password: document.getElementById("password").value,
        preguntaRecuperacion: document.getElementById("preguntaRecuperacion").value,
    };

    try {
        const res = await fetch("http://localhost:3000/api/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();

        resultado.textContent = result.msg;
    } catch (error) {
        resultado.textContent = "Error al conectar";
    }
});