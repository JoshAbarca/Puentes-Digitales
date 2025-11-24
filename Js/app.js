// Cargar contenido desde JSON
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('titulo-intro').textContent = data.intro.titulo;
    document.getElementById('descripcion-intro').textContent = data.intro.descripcion;
  })
  .catch(error => console.error('Error cargando JSON:', error));

// Interacción 1: Toggle de info extra
function toggleInfo() {
  const info = document.getElementById('info-extra');
  info.style.display = info.style.display === 'none' ? 'block' : 'none';
}

// Interacción 2: Cambiar color de fondo al hacer clic en el título
document.getElementById('titulo-intro').addEventListener('click', function() {
  this.style.color = this.style.color === '#FF6B35' ? '#E91E63' : '#FF6B35';
});
