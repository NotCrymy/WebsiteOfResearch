document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("docs-list");

  fetch("assets/docs.json")
    .then((res) => res.json())
    .then((docs) => {
      docs.forEach((doc) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        const link = document.createElement("a");
        link.href = `assets/pdfs/${doc.file}`;
        link.textContent = doc.name;
        link.target = "_blank";

        const badge = document.createElement("span");
        badge.className = "badge bg-secondary";
        badge.textContent = doc.author || "Auteur inconnu";

        li.appendChild(link);
        li.appendChild(badge);
        container.appendChild(li);
      });
    })
    .catch((err) => {
      console.error("Erreur de chargement des fichiers :", err);
      container.innerHTML = `<li class="list-group-item text-danger">Erreur de chargement des fichiers</li>`;
    });
});
