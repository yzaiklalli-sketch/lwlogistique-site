# LW Logistique : installation et formulaire de soumission

## Projet à mettre à jour

Mettre à jour uniquement le projet Netlify **verdant-sprite-d1b9ca**, actuellement accessible à https://verdant-sprite-d1b9ca.netlify.app/. Ne pas créer un autre projet et ne pas modifier les projets CRM.

Le domaine prévu pour ce site est **lwlogistique.ca**. Le courriel de réception souhaité est **info@lwlogistique.com**. Ce sont deux domaines distincts : ne pas modifier les DNS du .com pour installer ce formulaire.

## Fonctionnement préparé

- Formulaire HTML `soumission-lw` avec nom, entreprise facultative, courriel, téléphone facultatif, origine, destination, équipement et détails de cargaison.
- Consentement à l’utilisation des renseignements pour répondre à la demande.
- Transmission HTTPS au service Netlify Forms, sans ouverture de l’application de courriel du visiteur.
- Validation côté navigateur, champ antispam et états d’attente, de succès et d’erreur.
- Coordonnées du visiteur envoyées une seule fois dans les champs structurés, sans copie dans un message récapitulatif.
- Conservation des saisies à l’écran en cas d’erreur, sans stockage local dans le navigateur.
- Confirmation de prise en charge par le service, sans prétendre que la notification a atteint la boîte courriel.
- Sur un hébergement non configuré ou dans la prévisualisation Perplexity, l’envoi est bloqué avec les coordonnées de contact, plutôt qu’une fausse confirmation.

La réception effective à info@lwlogistique.com n’est pas établie par le seul code du site. Elle nécessite le réglage des notifications et un test réel.

## Activation dans Netlify

### Détecter le formulaire

Dans le projet **verdant-sprite-d1b9ca**, ouvrir **Forms** et activer **Enable form detection**, puis déployer les fichiers à jour. Cette activation précède le déploiement qui détectera le formulaire ([documentation Netlify](https://docs.netlify.com/manage/forms/setup/)).

En cas de déploiement manuel, décompresser l’archive et déposer le dossier contenant directement `index.html`, `merci.html`, `app.js`, `style.css`, `base.css`, `robots.txt`, `sitemap.xml` et `assets/` dans la zone de mise à jour de l’onglet **Deploys** du projet existant ([déploiement Netlify](https://docs.netlify.com/deploy/create-deploys/)).

Confirmer ensuite que **soumission-lw** apparaît dans la liste des formulaires. Le HTML traité par Netlify ne doit plus contenir l’attribut `data-netlify="true"` sur le formulaire ; sa présence indique que l’activation ou le traitement reste à vérifier ([détection et traitement du formulaire](https://docs.netlify.com/manage/forms/setup/)).

### Régler la notification

Ouvrir **Forms > Submission notifications**, ajouter une notification par courriel pour les demandes vérifiées du formulaire **soumission-lw**, et saisir **info@lwlogistique.com** comme destinataire. Le champ HTML `name="email"` permet de répondre au visiteur. Le sujet préparé dans le HTML est « LW Logistique | Nouvelle demande de soumission » ([notifications Netlify](https://docs.netlify.com/manage/forms/notifications/)).

Le destinataire est un réglage du compte Netlify, pas une variable dans `app.js`. Ne pas exposer de jeton API dans les fichiers publics.

### Tester avant toute publicité

1. Envoyer une demande clairement identifiée « TEST TECHNIQUE : NE PAS TRAITER COMME UNE SOUMISSION ».
2. Confirmer sa présence dans les demandes vérifiées de **soumission-lw** ; vérifier aussi les indésirables dans Netlify si nécessaire.
3. Confirmer la réception dans **info@lwlogistique.com**, y compris le dossier de courrier indésirable.
4. Vérifier que les champs du message sont complets et non dupliqués.
5. Vérifier que « Répondre » vise le courriel du client.
6. Tester une adresse courriel invalide, une demande incomplète et une erreur réseau : aucun succès ne doit être annoncé.
7. Vérifier le fonctionnement en français et en anglais sur téléphone.

Netlify peut classer certaines demandes comme indésirables ; son mécanisme de filtrage et le champ antispam sont documentés ici : https://docs.netlify.com/manage/forms/spam-filters/.

Ne pas activer de dépenses publicitaires sur la seule base d’une confirmation visuelle dans le navigateur. La réception de la notification doit être confirmée.

## Prévisualisation et suivi

Le site est statique. Ses animations, sa traduction et ses liens de contact restent indépendants de Netlify Forms. Le traitement direct des demandes nécessite Netlify.

L’événement navigateur `lw:quote-submitted` est émis uniquement après une réponse HTTP acceptée par le service, sans données personnelles dans son contenu. Aucun identifiant Google Ads ni aucune conversion publicitaire n’a été installé dans cette version.

Un envoi accepté par le service n’est pas une preuve de délivrabilité du courriel ni de qualification commerciale de la demande.
