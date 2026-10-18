/* LW Logistique — interactions: language toggle, mobile nav, reveal, quote form */

(function () {
  'use strict';

  /* ---------- i18n ---------- */
  var I18N = {
    en: {},
    fr: {
      'meta.title': 'LW Logistique — Transport international clé en main',
      'meta.desc': 'Fret routier, maritime et aérien à travers l’Amérique du Nord, coordonné de bout en bout par une seule équipe. Basés au Canada, fondés en 2025.',
      'a11y.skip': 'Aller au contenu',
      'a11y.menu': 'Menu',
      'nav.services': 'Services',
      'nav.process': 'Notre processus',
      'nav.about': 'À propos',
      'nav.faq': 'FAQ',
      'nav.contact': 'Contact',
      'cta.quote': 'Demander une soumission',
      'cta.services': 'Découvrir nos services',
      'hero.kicker': 'Partenaire logistique clé en main',
      'hero.title': 'Transport international, géré de bout en bout.',
      'hero.sub': 'Envois routiers, maritimes et aériens à travers l’Amérique du Nord — planifiés, documentés et suivis par une seule équipe.',
      'hero.note': 'Canada · États-Unis · Local, interprovincial et transfrontalier',
      'coverage.ca': 'Tout le Canada',
      'coverage.us': 'États-Unis',
      'coverage.cross': 'Transfrontalier',
      'coverage.tracking': 'Suivi en temps réel',
      'services.kicker': 'Services',
      'services.title': 'Le bon mode pour chaque envoi',
      'services.lede': 'Une gamme complète de solutions de transport — avec des équipements Drybox, Flat-Bed et services spécialisés.',
      'services.road.title': 'Transport routier',
      'services.road.text': 'Livraison flexible et rapide partout en Amérique du Nord — idéale pour vos envois locaux ou transfrontaliers.',
      'services.ocean.title': 'Fret maritime',
      'services.ocean.text': 'Gestion de conteneurs complets (FCL) ou partiels (LCL) — une solution économique pour vos envois internationaux.',
      'services.air.title': 'Fret aérien',
      'services.air.text': 'Rapidité et efficacité pour vos envois urgents — nous sélectionnons les meilleures routes et transporteurs.',
      'services.turnkey.title': 'Logistique clé en main (4PL)',
      'services.turnkey.text': 'De la documentation au suivi en temps réel, nous coordonnons chaque étape — planification, communication et transporteurs — pour vous.',
      'process.kicker': 'Notre processus',
      'process.title': 'Une seule équipe, de la soumission à la livraison',
      'process.s1.title': 'Parlez-nous de votre envoi',
      'process.s1.text': 'Origine, destination, cargaison et échéancier — quelques détails suffisent pour commencer.',
      'process.s2.title': 'Nous planifions et soumissionnons',
      'process.s2.text': 'Nous identifions le meilleur mode, la meilleure route et les meilleurs transporteurs selon vos besoins et votre budget.',
      'process.s3.title': 'Nous coordonnons tout',
      'process.s3.text': 'Réservation, documentation et chaque transfert entre transporteurs — gérés par notre équipe.',
      'process.s4.title': 'Vous suivez en temps réel',
      'process.s4.text': 'Statuts en direct à chaque étape, avec une équipe joignable qui répond.',
      'about.kicker': 'À propos',
      'about.title': 'Une façon plus simple d’expédier à l’international',
      'about.p1': 'Fondée en 2025, LW Logistique est née d’une idée simple : rendre le transport international plus simple, plus transparent et plus humain.',
      'about.p2': 'Nous accompagnons les PME, les professionnels indépendants et les grandes entreprises — chaque client reçoit le même niveau de service, peu importe la taille de son entreprise.',
      'about.f1.role': 'Président et cofondateur',
      'about.f1.bio': 'Plus de huit ans d’expérience en transport et logistique — un expert de terrain attaché à un service rigoureux et humain.',
      'about.f2.role': 'Cofondateur',
      'about.f2.bio': 'Diplômé en administration des affaires de l’Université de Toronto — axé sur le service à la clientèle, la stratégie et des relations durables.',
      'faq.kicker': 'FAQ',
      'faq.title': 'Questions fréquentes',
      'faq.q1': 'Quels territoires couvrez-vous ?',
      'faq.a1': 'Tout le Canada et les États-Unis — local, interprovincial et transfrontalier. Qu’il s’agisse d’un simple trajet ou d’une route complexe, nous identifions la meilleure solution pour livrer vos marchandises rapidement et en sécurité.',
      'faq.q2': 'Quelles solutions de transport offrez-vous ?',
      'faq.a2': 'Transport routier, maritime et aérien, ainsi que la logistique clé en main 4PL. Nos équipements incluent Drybox, Flat-Bed et services spécialisés.',
      'faq.q3': 'Offrez-vous un suivi en temps réel ?',
      'faq.a3': 'Oui. Nous offrons un suivi en temps réel de vos envois, et notre équipe reste disponible à chaque étape.',
      'faq.q4': 'Avec quels types de clients travaillez-vous ?',
      'faq.a4': 'PME, professionnels indépendants et grandes entreprises — chaque client reçoit le même niveau de service élevé, quelle que soit la taille de son entreprise.',
      'faq.q5': 'Quel est votre temps de réponse ?',
      'faq.a5': 'Nous répondons généralement en moins d’une heure pendant les heures ouvrables, et le plus rapidement possible en dehors.',
      'contact.kicker': 'Contact',
      'contact.title': 'Demandez une soumission',
      'contact.lede': 'Décrivez-nous votre envoi et nous reviendrons vers vous avec un plan. Le formulaire prépare un courriel prérempli dans votre application — rien n’est envoyé sans vous.',
      'contact.direct': 'Préférez nous joindre directement ?',
      'contact.yzaik': '(Yzaik, Président)',
      'contact.fallback': 'Nous répondons généralement en moins d’une heure pendant les heures ouvrables.',
      'form.name': 'Nom',
      'form.name.ph': 'Votre nom',
      'form.company': 'Entreprise',
      'form.company.ph': 'Nom de l’entreprise (facultatif)',
      'form.email': 'Courriel',
      'form.email.ph': 'vous@entreprise.com',
      'form.origin': 'Origine',
      'form.origin.ph': 'Ville de départ',
      'form.destination': 'Destination',
      'form.destination.ph': 'Ville d’arrivée',
      'form.mode': 'Mode de transport',
      'form.mode.any': 'Je ne sais pas — conseillez-moi',
      'form.mode.road': 'Routier',
      'form.mode.ocean': 'Maritime (FCL / LCL)',
      'form.mode.air': 'Aérien',
      'form.details': 'Détails de l’envoi',
      'form.details.ph': 'Cargaison, dimensions, poids, échéancier…',
      'form.hint': 'Ceci ouvre un courriel prérempli dans votre application — appuyez sur envoyer quand il vous convient. Aucune donnée n’est conservée sur ce site.',
      'form.submit': 'Préparer le courriel de soumission',
      'form.error.required': 'Veuillez remplir votre nom, votre courriel, l’origine, la destination et les détails de l’envoi.',
      'form.error.email': 'Veuillez entrer une adresse courriel valide.',
      'form.status': 'Votre application de courriel devrait s’ouvrir avec un message prérempli. Sinon, écrivez-nous directement à info@lwlogistique.com.',
      'footer.brand': 'Logistique',
    },
  };

  var LANG = 'en';

  function snapshotEnglish() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      I18N.en[el.getAttribute('data-i18n')] = el.textContent;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      I18N.en[el.getAttribute('data-i18n-ph')] = el.getAttribute('placeholder');
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      I18N.en[el.getAttribute('data-i18n-aria')] = el.getAttribute('aria-label');
    });
  }

  function applyLang(lang) {
    LANG = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (I18N[lang][key] !== undefined) el.textContent = I18N[lang][key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (I18N[lang][key] !== undefined) el.setAttribute('placeholder', I18N[lang][key]);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (I18N[lang][key] !== undefined) el.setAttribute('aria-label', I18N[lang][key]);
    });
    document.querySelectorAll('.lang-toggle__btn').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });
  }

  snapshotEnglish();
  document.querySelectorAll('.lang-toggle__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.dataset.lang);
    });
  });

  /* ---------- Mobile nav ---------- */
  var menuBtn = document.querySelector('.menu-btn');
  var mobileNav = document.getElementById('mobile-nav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      var open = mobileNav.dataset.open === 'true';
      mobileNav.dataset.open = String(!open);
      menuBtn.setAttribute('aria-expanded', String(!open));
    });
    mobileNav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        mobileNav.dataset.open = 'false';
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.dataset.visible = 'true';
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.dataset.visible = 'true'; });
  }

  /* ---------- Quote form → mailto ---------- */
  var form = document.getElementById('quote-form');
  var errBox = document.getElementById('form-error');
  var statusBox = document.getElementById('form-status');

  function t(key) {
    return I18N[LANG][key] || I18N.en[key] || '';
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      errBox.dataset.visible = 'false';
      statusBox.dataset.visible = 'false';

      var name = form.name.value.trim();
      var company = form.company.value.trim();
      var email = form.email.value.trim();
      var origin = form.origin.value.trim();
      var destination = form.destination.value.trim();
      var mode = form.mode.value;
      var details = form.details.value.trim();

      var missing = !name || !email || !origin || !destination || !details;
      if (missing) {
        errBox.textContent = t('form.error.required');
        errBox.dataset.visible = 'true';
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errBox.textContent = t('form.error.email');
        errBox.dataset.visible = 'true';
        return;
      }

      var subject =
        LANG === 'fr'
          ? 'Demande de soumission — ' + origin + ' → ' + destination
          : 'Quote request — ' + origin + ' → ' + destination;

      var lines = [
        LANG === 'fr' ? 'Nom : ' + name : 'Name: ' + name,
      ];
      if (company) lines.push(LANG === 'fr' ? 'Entreprise : ' + company : 'Company: ' + company);
      lines.push(LANG === 'fr' ? 'Courriel : ' + email : 'Email: ' + email);
      lines.push(LANG === 'fr' ? 'Origine : ' + origin : 'Origin: ' + origin);
      lines.push(LANG === 'fr' ? 'Destination : ' + destination : 'Destination: ' + destination);
      if (mode) {
        var modeLabels = { road: 'road / routier', ocean: 'ocean / maritime', air: 'air / aérien' };
        lines.push((LANG === 'fr' ? 'Mode : ' : 'Mode: ') + (modeLabels[mode] || mode));
      }
      lines.push('');
      lines.push(LANG === 'fr' ? 'Détails :' : 'Details:');
      lines.push(details);

      var mailto =
        'mailto:info@lwlogistique.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(lines.join('\n'));

      statusBox.textContent = t('form.status');
      statusBox.dataset.visible = 'true';
      window.location.href = mailto;
    });
  }
})();
