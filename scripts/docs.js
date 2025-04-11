document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("docs-list");
  
    fetch("assets/docs.json")
      .then((res) => res.json())
      .then((docs) => {
        docs.forEach((doc) => {
          const li = document.createElement("li");
          li.className = "list-group-item";
          li.innerHTML = `<a href="assets/pdfs/${doc.file}" target="_blank">${doc.name}</a>`;
          container.appendChild(li);
        });
      })
      .catch((err) => {
        console.error("Erreur de chargement des fichiers :", err);
        container.innerHTML = `<li class="list-group-item text-danger">Erreur de chargement des fichiers</li>`;
      });
  });
  