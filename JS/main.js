// Gestion du thème sombre/clair
let btn = document.getElementById("theme");
let i = document.querySelector("#theme i");
// Vérifier si un thème est déjà enregistré dans le localStorage
if(localStorage.getItem("theme") === "dark-theme") {
    // Appliquer le thème sombre
    document.body.classList.add("dark-theme");
    i.classList.remove("bi-moon-stars");
    i.classList.add("bi-sun");
}
if(btn){
    btn.addEventListener("click", function() {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            // Enregistrer le thème sombre dans le localStorage
            localStorage.setItem("theme", "dark-theme");
            i.classList.remove("bi-moon-stars");
            i.classList.add("bi-sun");
        } else {
            // Enregistrer le thème clair dans le localStorage
            localStorage.setItem("theme", "light");
            i.classList.remove("bi-sun");
            i.classList.add("bi-moon-stars");
        }
    });
}
// Navbar dynamique au scroll
let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function() {
    if(window.scrollY > 50) {
        // Réduire la taille de la navbar et changer sa couleur de fond lorsque l'utilisateur fait défiler la page vers le bas
        navbar.classList.add("shrink");
        navbar.style.backgroundColor = "transparent";
    } else {
        // Restaurer la taille et la couleur de fond de la navbar lorsque l'utilisateur est en haut de la page
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
        // Définir la position de défilement à 0 pour revenir en haut de la page
        top: 0,
        behavior: "smooth"
    });
});

// Compteurs animés au scroll
// 2500 entreprises
let cpt_anm = document.getElementById("cpt");
let cible = 2500;
let start = 0;
function animeCpt(){
    let inc = cible / 200; // Vitesse d'animation
    start += inc; // Incrémenter le compteur
    if(start < cible){
        // Afficher le compteur arrondi à l'entier le plus proche
        cpt_anm.textContent = Math.floor(start);
        // Demander au navigateur d'appeler la fonction animeCpt à nouveau pour continuer l'animation
        requestAnimationFrame(animeCpt);
    } 
    else {
        cpt_anm.textContent = cible;
    }
}

if(cpt_anm){
    animeCpt();
}

// 800 entreprises
let counter = document.getElementById("cpt2");
let target = 800;
let count = 0;
function animeCpt1(){
    let inc = target / 200;
    count += inc;
    if(count < target){
        counter.textContent = Math.floor(count);
        requestAnimationFrame(animeCpt1);
    }
    else{
        counter.textContent = target;
    }
}

if(counter){
    animeCpt1();
}

let counter1 = document.getElementById("cpt3");
let target1 = 1200;
let count1 = 0;
function animeCpt2(){
    let inc = target1 / 200;
    count1 += inc;
    if(count1 < target1){
        counter1.textContent = Math.floor(count1);
        requestAnimationFrame(animeCpt2);
    }
    else{
        counter1.textContent = target1;
    }
}

if(counter1){
    animeCpt2();
}

// Compteurs animés : Chiffres clés
let section = document.querySelector("#chiffres_cle")
let cle1 = document.getElementById("cpt_cle1");
let cle2 = document.getElementById("cpt_cle2");
let cle3 = document.getElementById("cpt_cle3");
function cleCpt(element, cible){
    let debut = 0;
    let inc = cible / 200;
    function update(){
        debut += inc;
        if(debut < cible){
            element.textContent = Math.floor(debut);
            requestAnimationFrame(update);
        }
        else{
            element.textContent = cible;
        }
    }
    update();
}

// IntersectionObserver
let obs = new IntersectionObserver((entries,observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            // Déclenche une fois
            if(cle1){
                cleCpt(cle1, 95000);
            }
            if(cle2){
                cleCpt(cle2, 10000);
            }
            if(cle3){
                cleCpt(cle3, 15000);
            }

            observer.unobserve(entry.target);
        }
    });
},  {
        threshold : 0.4 // Déclenche quand 40% est visible
    });
if(section){
    obs.observe(section);
}

// Fade-in
let fade_in = document.querySelectorAll(".fade_in");
// Créer un IntersectionObserver pour détecter quand les sections sont visibles
let observer = new IntersectionObserver((entries) => {
    // Pour chaque élément observé, vérifier s'il est visible
    entries.forEach((entry) => {
        // Vérifie si la section est visible
        if(entry.isIntersecting){
            // Ajouter la classe "show" pour déclencher l'animation
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2 // Déclenche quand 20% visible
});
// Observe chaque section
fade_in.forEach((section) => {
    // Observer chaque section pour détecter quand elle devient visible
    observer.observe(section);
});

// Filtrage par catégories
let cat = document.getElementById("cat");
let freelance = document.getElementById("freelance");
if(cat && freelance){
    // Ajouter un écouteur d'événement pour le changement de catégorie
    cat.addEventListener("change", function (){
        // Supprimer toutes les classes de catégorie existantes du conteneur freelance
        freelance.classList.remove("web","marketing","cloud","redaction","data_ia","design");
        let val = cat.value;
        if(val !== "default"){
            freelance.classList.add(val);
        }
    });
}
// Validation du formulaire de contact
let form = document.querySelector("form");
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let mail = document.getElementById("mail");
let sujet = document.getElementById("sujet");
let text = document.getElementById("text");
let regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let success = document.querySelector(".success");

if(form){
    form.addEventListener("submit", function(e){
        // Empêcher l'envoi du formulaire par défaut pour effectuer la validation
        e.preventDefault();
        let valid = true;
        document.querySelectorAll(".error").forEach(el => el.textContent = "");
        // Réinitialiser le message de succès avant de valider le formulaire
        success.textContent = "";
        // Vérifier si les champs sont vides et afficher les messages d'erreur appropriés
        if(nom.value === ""){
            // Afficher le message d'erreur pour le champ nom
            nom.nextElementSibling.textContent = "Le nom est obligatoire"
            valid = false;
        }
        // Vérifier si le champ prénom est vide et afficher le message d'erreur approprié
        if(prenom.value === ""){
            // Afficher le message d'erreur pour le champ prénom
            prenom.nextElementSibling.textContent = "Le prénom est obligatoire"
            valid = false;
        }
        // Vérifier si le champ mail est vide ou invalide et afficher le message d'erreur approprié
        if(mail.value === ""){
            mail.nextElementSibling.textContent = "Le mail est obligatoire"
            valid = false;
        }
        // Vérifier si le champ mail est invalide en utilisant une expression régulière et afficher le message d'erreur approprié
        else if(!regexMail.test(mail.value)){
            mail.nextElementSibling.textContent = "Mail invalide"
            valid = false;
        }
        // Vérifier si le champ sujet est vide et afficher le message d'erreur approprié
        if(sujet.value === "default"){
            sujet.nextElementSibling.textContent = "Le choix du sujet est obligatoire"
            valid = false;
        }
        // Vérifier si le champ message est vide et afficher le message d'erreur approprié
        if(text.value === ""){
            text.nextElementSibling.textContent = "Le message est obligatoire"
            valid = false;
        }
        // Si le formulaire est valide, afficher un message de succès et réinitialiser le formulaire
        if(valid){
            success.textContent = "Formulaire envoyé avec succès"
            form.reset();
        }
    });
}