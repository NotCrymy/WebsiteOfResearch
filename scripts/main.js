document.addEventListener("DOMContentLoaded", () => {
    console.log("Site chargé 🎉");
  
    // Exemple : message de bienvenue automatique sur la page d'accueil
    const welcomeSection = document.querySelector("section");
    if (welcomeSection && window.location.pathname.includes("index.html")) {
      const message = document.createElement("p");
      message.textContent = "Bonne visite sur le site du projet de stage !";
      message.style.fontStyle = "italic";
      welcomeSection.appendChild(message);
    }
  
    // Exemple bonus : highlight du lien actif dans le menu
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
      if (window.location.href.includes(link.getAttribute("href"))) {
        link.style.fontWeight = "bold";
        link.style.textDecoration = "underline";
      }
    });
  });
  