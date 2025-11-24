// Cargar contenido dinámico desde JSON
fetch("acercade.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("autor-nombre").textContent = data.autor.nombre;
    document.getElementById("autor-descripcion").textContent = data.autor.descripcion;
    document.getElementById("autor-correo").textContent = data.autor.correo;
    document.getElementById("autor-extra-texto").textContent = data.autor.extra;
    document.getElementById("contexto-institucional").textContent = data.contexto;
  });

// Interacción sencilla con JS
function toggleAutor() {
  const extra = document.getElementById("autor-extra");
  extra.style.display = (extra.style.display === "none") ? "block" : "none";
}
