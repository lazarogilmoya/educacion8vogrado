document.addEventListener("DOMContentLoaded", function () {
    // Funcionalidad para botones desplegables
    var dropdownButtons = document.querySelectorAll(".dropdown-btn");

    dropdownButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    });

    // Funcionalidad para la galería de imágenes y modal
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.gallery-image').forEach(image => {
        image.addEventListener('click', function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    closeBtn.onclick = function () {
        modal.style.display = "none";
    };
});
function filterGlossary(letter) {
    const terms = document.querySelectorAll('.term');
    terms.forEach(term => {
        if (term.getAttribute('data-letter') === letter) {
            term.style.display = 'block';
        } else {
            term.style.display = 'none';
        }
    });
}
  // JavaScript para procesar la búsqueda
  document.addEventListener("DOMContentLoaded", function() {
    const query = new URLSearchParams(window.location.search).get('query');
    document.getElementById('search-query').textContent = query;
    
    // Aquí podrías añadir lógica para buscar en tu contenido o API
    // Por ejemplo, mostrar resultados simulados
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = `<p>Resultados simulados para la búsqueda: ${query}</p>`;
});