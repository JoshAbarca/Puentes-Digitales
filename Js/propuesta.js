// Mostrar/Ocultar lista de pasos
function togglePasos() {
  const lista = document.getElementById("pasosGmail");
  const boton = document.getElementById("toggleBtn");

  if (lista.classList.contains("d-none")) {
    lista.classList.remove("d-none");
    boton.textContent = "Ocultar pasos";
    boton.style.background = "linear-gradient(45deg, #FF6B35, #F7B32B)";
  } else {
    lista.classList.add("d-none");
    boton.textContent = "Mostrar pasos";
    boton.style.background = "linear-gradient(45deg, #F7B32B, #FF6B35)";
  }
}
function mostrarModalPaso(numero) {
  const textos = {
    1: "🌐 Ir a www.gmail.com",
    2: "➕ Hacer clic en 'Crear cuenta'",
    3: "👤 Ingresar nombre y apellido",
    4: "🆔 Elegir nombre de usuario",
    5: "🔒 Crear una contraseña segura",
    6: "📞 Confirmar número de teléfono",
    7: "✅ Aceptar términos y condiciones"
  };

  const titulo = document.getElementById("tituloPaso");
  const contenido = document.getElementById("contenidoPaso");

  titulo.textContent = textos[numero];
  contenido.innerHTML = `
    <img src="Img/Paso ${numero}.png" alt="${textos[numero]}" class="img-fluid rounded shadow mt-3">
  `;

  const modal = new bootstrap.Modal(document.getElementById("modalPasoGmail"));
  modal.show();
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


