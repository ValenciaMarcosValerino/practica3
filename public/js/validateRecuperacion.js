console.log("JS cargado");
document
  .getElementById("formRecuperacion")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("click en recuperar");
    const data = {
      correo: document.getElementById("correo").value,
      preguntaRecuperacion: document.getElementById("preguntaRecuperacion").value,
      nuevaPassword: document.getElementById("nuevaPassword").value,
    };

    try {
      const res = await fetch("http://localhost:3000/api/recuperar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      document.getElementById("resultado").textContent = result.msg;
    } catch (error) {
      document.getElementById("resultado").textContent =
        "Error al conectar con el servidor";
    }
  });



  document.getElementById("miFormulario").addEventListener("submit", async (e) => {
  e.preventDefault();

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

    document.getElementById("resultado").textContent = result.msg;
  } catch (error) {
    document.getElementById("resultado").textContent = "Error";
  }
});