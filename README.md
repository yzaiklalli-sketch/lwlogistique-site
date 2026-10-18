# Site LW Logistique

Site bilingue de LW Logistique consacré au transport routier Flatbed et Drybox au Canada et aux États-Unis.

## Projet de production

- **Domaine :** https://lwlogistique.ca/
- **Projet Netlify existant :** `verdant-sprite-d1b9ca`
- **Adresse Netlify :** https://verdant-sprite-d1b9ca.netlify.app/
- **Courriel de réception souhaité :** info@lwlogistique.com
- **Formulaire :** `soumission-lw`

Ne pas créer un nouveau site Netlify, déplacer le domaine ou remplacer la configuration DNS pour relier ce dépôt. Ne pas modifier les projets CRM.

## Fichiers

- `index.html` : page principale et formulaire détectable par Netlify.
- `app.js` : navigation, langues, animations et transmission du formulaire.
- `base.css`, `style.css` : styles.
- `merci.html` : page de retour après un envoi HTML sans JavaScript.
- `assets/` : logo et images du site.
- `netlify.toml` : publication du dossier racine, sans commande de compilation.
- `GUIDE-INSTALLATION.md` : installation, activation du formulaire et recette.

## Lier le dépôt au projet existant

Dans le projet Netlify `verdant-sprite-d1b9ca`, ouvrir **Project configuration > Developer settings > Continuous deployment > Repository**, choisir **Link repository**, puis GitHub et ce dépôt. Choisir la branche de production `master`. Le fichier `netlify.toml` fixe le répertoire publié à `.` ; aucune commande de compilation n’est requise ([liaison d’un dépôt existant](https://docs.netlify.com/build/git-workflows/repo-permissions-linking/)).

Ne pas basculer vers « Add new project » ou importer ce dépôt dans un nouveau projet : le domaine, le certificat et les notifications sont déjà configurés dans le projet existant.

Netlify doit être autorisé séparément à lire ce dépôt privé. La connexion GitHub à Computer ne donne pas automatiquement cet accès à Netlify. Après liaison, les mises à jour envoyées sur la branche de production déclenchent les déploiements selon la configuration du projet ([documentation Netlify](https://docs.netlify.com/deploy/create-deploys/)).

## Formulaire et notification

Conserver la détection des formulaires activée dans Netlify. Le formulaire HTML s’appelle `soumission-lw` et contient un champ antispam.

La notification vers info@lwlogistique.com est un réglage du projet Netlify, pas un secret ni une variable du site. Un test soumis sur l’adresse Netlify a été reçu et confirmé par le propriétaire le 18 octobre 2026. Après la première publication depuis GitHub, vérifier que le formulaire est toujours détecté et que la notification est toujours en place.

Ne pas envoyer de données personnelles de clients pour une recette. Toute demande test doit être clairement identifiée comme telle.

## Vérifications avant publication

```sh
node --check app.js
```

Vérifier aussi les affichages sur téléphone et ordinateur, le changement de langue, les liens de contact, la présence du formulaire et la conservation des saisies en cas d’échec. Un aperçu non configuré ne doit jamais afficher un faux succès d’envoi.

## Sécurité et périmètre

Ne jamais enregistrer de jetons Netlify, GitHub, mots de passe ou fichiers de certificat privés dans ce dépôt. Les fichiers `.env`, `.netlify/`, `*.pem` et `*.key` sont ignorés.

Ce dépôt sert au site web. Il n’active aucune campagne Google Ads et ne modifie pas la fiche Google Business Profile.
