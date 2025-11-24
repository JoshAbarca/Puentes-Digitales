// Inicializar mapa con ubicación actual usando Leaflet + OpenStreetMap
window.onload = function () {
  const mapContainer = document.getElementById("map");

  if (!mapContainer) return;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      // Crear mapa centrado en la ubicación actual
      const map = L.map('map').setView([lat, lng], 15);

      // Cargar tiles de OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(map);

      // Agregar marcador en la ubicación actual
      const marker = L.marker([lat, lng]).addTo(map);
      marker.bindPopup('<strong>Tu ubicación actual</strong>').openPopup();
    }, function (error) {
      mapContainer.innerHTML = `<div class="alert alert-warning text-center" role="alert">
        No se pudo obtener tu ubicación: ${error.message}
      </div>`;
    });
  } else {
    mapContainer.innerHTML = `<div class="alert alert-danger text-center" role="alert">
      Tu navegador no soporta geolocalización.
    </div>`;
  }
};

// Validación del formulario y mostrar datos en modal
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || correo === "" || asunto === "") {
      alert("Por favor complete los campos obligatorios: Nombre, Correo y Asunto.");
      return;
    }

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
      alert("Ingrese un correo electrónico válido.");
      return;
    }

    const captcha = grecaptcha.getResponse();
    if (!captcha) {
      alert("Por favor complete el captcha.");
      return;
    }

    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Correo:</strong> ${correo}</p>
      <p><strong>Asunto:</strong> ${asunto}</p>
      <p><strong>Mensaje:</strong> ${mensaje}</p>
    `;

    const modal = new bootstrap.Modal(document.getElementById("contactModal"));
    modal.show();

    form.reset();
    grecaptcha.reset();
  });
});
