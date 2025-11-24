function mostrarPasos() {
  const lista = document.getElementById("pasosGmail");
  const boton = document.getElementById("toggleBtn");

  if (lista.classList.contains("d-none")) {
    // Mostrar pasos
    const pasos = [
      "🌐 Ir a www.gmail.com",
      "➕ Hacer clic en 'Crear cuenta'",
      "👤 Ingresar nombre y apellido",
      "🆔 Elegir nombre de usuario",
      "🔒 Crear una contraseña segura",
      "📞 Confirmar número de teléfono",
      "✅ Aceptar términos y condiciones"
    ];

    lista.innerHTML = "";
    pasos.forEach(paso => {
      const li = document.createElement("li");
      li.textContent = paso;
      li.className = "list-group-item";
      lista.appendChild(li);
    });

    lista.classList.remove("d-none");
    boton.textContent = "Ocultar pasos";
    boton.classList.remove("btn-warning");
    boton.classList.add("btn-danger");
  } else {
    // Ocultar pasos
    lista.classList.add("d-none");
    boton.textContent = "Mostrar pasos";
    boton.classList.remove("btn-danger");
    boton.classList.add("btn-warning");
  }
}
function verificarWhatsapp() {
  const telefono = document.getElementById("telefono").value;
  const internet = document.getElementById("internet").value;
  const numero = document.getElementById("numero").value;
  const resultado = document.getElementById("resultadoWhatsapp");

  resultado.className = "mt-4 fs-5 fw-bold"; // reset clases

  if (telefono === "sí" && internet === "sí" && numero === "sí") {
    resultado.textContent = "¡Estás listo para usar WhatsApp!";
    resultado.classList.add("success");
  } else {
    resultado.textContent = "Aún necesitas completar algunos requisitos.";
    resultado.classList.add("error");
  }

  // 🔄 Limpiar selecciones después de verificar
  document.getElementById("telefono").selectedIndex = 0;
  document.getElementById("internet").selectedIndex = 0;
  document.getElementById("numero").selectedIndex = 0;
}


