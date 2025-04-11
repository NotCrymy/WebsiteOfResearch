document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
      if (window.location.href.includes(link.getAttribute("href"))) {
        link.style.fontWeight = "bold";
        link.style.textDecoration = "underline";
      }
    });
  });
  