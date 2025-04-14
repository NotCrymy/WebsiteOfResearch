# Website of Research

Ce site web a été réalisé dans le cadre d’un stage de Licence 2 Informatique. Il sert à centraliser tous les éléments liés au projet : documents PDF, projets GitHub, et retours d’expérimentations.

## Objectif

Le but est de rendre le projet **facilement reprenable**,  il permet d’éviter les doublons de recherche, de suivre ce qui a été testé, et de partager le travail proprement.

## Structure

```
WebsiteOfResearch/
├── index.html
├── projets.html
├── docs.html
├── style.css
├── scripts/
│   ├── main.js
│   └── docs.js
├── assets/
│   ├── pdfs/          ← fichiers PDF ici
│   └── docs.json      ← liste des documents à afficher
```

## Mise à jour des documents

1. Ajouter les fichiers PDF dans `assets/pdfs/`
2. Ajouter une entrée dans `assets/docs.json` :

```json
{
  "name": "Nom du document",
  "file": "Nom_du_fichier.pdf",
  "author":"Nom de l'auteur"
}
```

3. Enregistrer, commit, push.

## Déploiement

Le site est hébergé avec **GitHub Pages**. Il se met à jour automatiquement à chaque push sur la branche principale.

## Auteur

Projet réalisé par **NotCrymy** dans le cadre du stage DIGITALIS / CReSTIC - Avril 2025.
