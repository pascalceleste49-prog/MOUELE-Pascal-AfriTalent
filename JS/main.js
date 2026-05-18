let btn = document.getElementById("theme");
let i = document.querySelector("#theme i");
// Vérifier si un thème est déjà enregistré dans le localStorage
if(localStorage.getItem("theme") === "dark-theme") {
    document.body.classList.add("dark-theme");
    i.classList.remove("bi-moon-stars");
    i.classList.add("bi-sun");
}
btn.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark-theme");
        i.classList.remove("bi-moon-stars");
        i.classList.add("bi-sun");
    } else {
        localStorage.setItem("theme", "light");
        i.classList.remove("bi-sun");
        i.classList.add("bi-moon-stars");
    }
});

// Navbar dynamique au scroll
let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function() {
    if(window.scrollY > 50) {
        navbar.classList.add("shrink");
        navbar.style.backgroundColor = "transparent";
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        navbar.classList.remove("shrink");
    }
});

// Bouton de retour en haut
// Récupérer le conteneur du bouton de retour en haut
let div = document.getElementById("top");
// Créer l'icône de la flèche
let i1 = document.createElement("i");
// Créer le bouton de retour en haut
let topBtn = document.createElement("button");
// Ajouter les classes Bootstrap pour l'icône et le bouton
i1.classList.add("bi", "bi-arrow-up");
topBtn.classList.add("top-btn");
// Ajouter l'icône au bouton et le bouton au conteneur
topBtn.appendChild(i1);
div.appendChild(topBtn);
// Masquer le bouton de retour en haut par défautu début
div.style.display = "none";

window.addEventListener("scroll", function() {
    if(window.scrollY > 50) {
        // Afficher le bouton de retour en haut lorsque l'utilisateur fait défiler la page vers le bas
        div.style.display = "block";
    }else {
        // Masquer le bouton de retour en haut lorsque l'utilisateur est en haut de la page
        div.style.display = "none";
    }
});

div.addEventListener("click", function() {
    // Faire défiler la page vers le haut lorsque le bouton de retour en haut est cliqué
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
