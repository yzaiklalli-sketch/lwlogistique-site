# LW Logistique — Site web officiel

Site web bilingue (français / anglais) de LW Logistique, en une seule page moderne aux couleurs de votre marque : vert forêt profond, lime électrique, typographie condensée et monogramme LW officiel.

- **Bilingue** : bouton EN / FR dans l'en-tête, tout le contenu est traduit
- **Onze sections** : accueil, bandeau défilant, services, équipements (Flatbed & Drybox), processus, valeurs, à propos, statistiques animées, FAQ, appel à l'action, formulaire de soumission
- **Formulaire sans base de données** : le formulaire de soumission prépare un courriel prérempli à info@lwlogistique.com dans l'application de courriel du visiteur — rien n'est stocké, aucun serveur requis
- **Animations** : révélations au défilement, compteurs animés, ligne de route animée, bandeau défilant, parallaxe
- **Optimisé** : balises meta et Open Graph bilingues, données structurées Schema.org (SEO), favicon, mobile d'abord

---

## Contenu du projet

```
lw-logistics-site/
├── index.html      La page du site (toutes les sections)
├── base.css        Styles de base (accessibilité, reset)
├── style.css       Couleurs de marque, mise en page, animations
├── app.js          Bilingue (dictionnaire FR), formulaire, animations
└── assets/
    ├── logo-mark.png       Monogramme LW vert (fond clair)
    ├── logo-mark-lime.png  Monogramme LW lime (fond sombre — utilisé dans l'en-tête et le pied de page)
    ├── favicon.png         Icône d'onglet
    ├── hero.png            Photo du port (accueil)
    ├── road.png            Camion sur l'autoroute (services)
    ├── coordination.png    Carte et boussole (4PL)
    ├── flatbed.png         Chargement Flatbed (équipements)
    ├── drybox.png          Remorque Drybox sur l'autoroute (équipements)
    └── loading.png         Chargement au quai (à propos)
```

Aucun serveur, aucune base de données, aucun logiciel à installer : le site est entièrement statique et fonctionne chez n'importe quel hébergeur.

---

## Comment l'ajouter à votre projet / le mettre en ligne

### Option 1 — Remplacer votre site actuel (lwlogistique.ca)

Votre site actuel fonctionne sous WordPress (Elementor). Pour le remplacer par celui-ci :

1. **Sauvegardez l'ancien site** — dans cPanel, utilisez « Sauvegarde complète » ou copiez le dossier `public_html` sur votre ordinateur.
2. **Ouvrez le gestionnaire de fichiers** de votre hébergeur (cPanel → Gestionnaire de fichiers, ou FTP avec FileZilla).
3. **Supprimez ou déplacez** les fichiers WordPress existants de `public_html` (index.php, wp-config.php, le dossier wp-content, etc.).
4. **Téléversez tous les fichiers du dossier `lw-logistics-site`** directement dans `public_html` : index.html, base.css, style.css, app.js et le dossier assets complet.
5. Vérifiez que `https://lwlogistique.ca` affiche le nouveau site. Si vous voyez encore l'ancien, videz la cache de votre navigateur.

### Option 2 — Le tester d'abord sur un sous-domaine

1. Dans cPanel, créez un sous-domaine (ex. `nouveau.lwlogistique.ca`).
2. Téléversez les fichiers dans son dossier.
3. Une fois satisfait, déplacez-les dans `public_html` principal.

### Option 3 — Netlify, Vercel ou Cloudflare Pages (gratuit)

1. Créez un compte sur netlify.com (ou vercel.com).
2. Glissez-déposez le dossier `lw-logistics-site` sur la page d'accueil de Netlify.
3. Le site est en ligne en quelques secondes sur une adresse gratuite, que vous pouvez relier à votre domaine.

---

## Comment modifier le contenu

| Quoi modifier | Où |
|---|---|
| Textes anglais | `index.html` (attributs data-i18n) |
| Traductions françaises | `app.js` (dictionnaire `I18N.fr`) |
| Couleurs de marque | `style.css` (variables `--color-*` en haut du fichier) |
| Photos | Remplacez les fichiers dans `assets/` (gardez les mêmes noms) |
| Téléphone / courriel | `index.html` (sections contact et pied de page) + courriel du formulaire dans `app.js` |

### Changer l'adresse courriel du formulaire

Dans `app.js`, cherchez `info@lwlogistique.com` dans la fonction du formulaire et remplacez par votre adresse.

### Modifier le texte de la page d'accueil

Chaque texte visible possède une clé `data-i18n="..."` dans `index.html` (version anglaise) et la même clé dans le dictionnaire français de `app.js`. Modifiez les deux pour garder la traduction synchronisée.

---

## Bon à savoir

- **Le formulaire** n'envoie rien par lui-même : il ouvre le courriel du visiteur avec un message prérempli. C'est volontaire — aucune donnée n'est stockée et aucun serveur n'est nécessaire. Pour un vrai envoi automatique, il faudrait un service comme Formspree ou Netlify Forms.
- **Référencement** : le titre et la description de la page changent avec la langue choisie, et les données structurées Schema.org (MovingCompany) aident Google à comprendre l'entreprise.
- **Mises à jour faciles** : tout le contenu est dans les trois fichiers HTML/CSS/JS — aucune dépendance à maintenir.
