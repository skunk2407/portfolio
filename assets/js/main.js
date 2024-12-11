function openModal(projectId) {
    var modal = document.getElementById(projectId + "Modal");
    modal.style.display = "block";
}

function closeModal(projectId) {
    var modal = document.getElementById(projectId + "Modal");
    modal.style.display = "none";
}

// Fermer le modal si on clique à l'extérieur
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
