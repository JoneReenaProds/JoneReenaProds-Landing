// Obtenemos los elementos
const modal = document.getElementById("contact-modal");
const span = document.getElementsByClassName("close-btn")[0];

// Botones que abren el modal
const btnHeader = document.getElementById("btn-contact");     // El botón grande del inicio
const btnNav = document.getElementById("nav-btn-contact");    // El nuevo botón del menú

// Función para abrir
function openModal() {
  modal.style.display = "block";
}

// Asignamos la función a los dos botones
if (btnHeader) btnHeader.onclick = openModal;
if (btnNav) btnNav.onclick = openModal;

// Cuando se hace clic en la X, cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Si se hace clic fuera del cuadro del modal, también se cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/* --- 1. POPUP DE CONTACTO --- */
const contactModal = document.getElementById("contact-modal");
const contactBtnHeader = document.getElementById("btn-contact");
const contactBtnNav = document.getElementById("nav-btn-contact");
const closeContact = document.getElementsByClassName("close-btn")[0];

function openContact() { contactModal.style.display = "block"; }
function closeContactFunc() { contactModal.style.display = "none"; }

if(contactBtnHeader) contactBtnHeader.onclick = openContact;
if(contactBtnNav) contactBtnNav.onclick = openContact;
if(closeContact) closeContact.onclick = closeContactFunc;


/* --- 2. POPUP DE PROYECTOS (ACTUALIZADO CON YOUTUBE) --- */
const projectModal = document.getElementById("project-modal");
const closeProject = document.getElementsByClassName("close-project-btn")[0];
const modalArtist = document.getElementById("modal-artist-name");
const modalTitle = document.getElementById("modal-project-title");
const modalLinks = document.getElementById("modal-links-container");

// Seleccionamos todas las info-cards
const cards = document.querySelectorAll('.card-info');

cards.forEach(card => {
    card.onclick = function() {
        // 1. Leemos los datos guardados en el HTML
        const artist = this.getAttribute('data-artist');
        const title = this.getAttribute('data-title');
        
        // Links
        const ig = this.getAttribute('data-ig');
        const spotify = this.getAttribute('data-spotify');
        const youtube = this.getAttribute('data-youtube'); // <--- NUEVO
        const web = this.getAttribute('data-web');

        // 2. Ponemos los textos
        modalArtist.innerText = artist || "Artista";
        modalTitle.innerText = title || "Detalles del proyecto";

        // 3. Creamos los botones dinámicamente
        modalLinks.innerHTML = ""; // Limpiar lo anterior

        if(ig && ig !== "#") {
            modalLinks.innerHTML += `<a href="${ig}" target="_blank" class="modal-btn">📸 Instagram</a>`;
        }
        if(spotify && spotify !== "#") {
            modalLinks.innerHTML += `<a href="${spotify}" target="_blank" class="modal-btn">🎵 Spotify</a>`;
        }
        if(youtube && youtube !== "#") {
            // Botón nuevo de YouTube
            modalLinks.innerHTML += `<a href="${youtube}" target="_blank" class="modal-btn">📺 Ver en YouTube</a>`;
        }
        if(web && web !== "#") {
            modalLinks.innerHTML += `<a href="${web}" target="_blank" class="modal-btn">🌍 Website</a>`;
        }

        // Si no hay links válidos
        if(modalLinks.innerHTML === "") {
            modalLinks.innerHTML = "<p style='color:#666;'>No hay enlaces disponibles por ahora.</p>";
        }

        // 4. Mostramos el modal
        projectModal.style.display = "block";
    }
});

// Cerrar popup de proyecto
if(closeProject) {
    closeProject.onclick = function() {
        projectModal.style.display = "none";
    }
}

/* --- CERRAR AL CLICKEAR AFUERA --- */
window.onclick = function(event) {
    if (event.target == contactModal) { contactModal.style.display = "none"; }
    if (event.target == projectModal) { projectModal.style.display = "none"; }
}