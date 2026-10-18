/* LW Logistique — interactions: language toggle, mobile nav, reveal, quote form */

(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* ---------- i18n ---------- */
  var I18N = {
    en: {
      'form.error.required': 'Please fill in your name, email, origin, destination and shipment details.',
      'form.error.email': 'Please enter a valid email address.',
      'form.status': 'Your email app should have opened with a pre-filled message. If not, write to us directly at info@lwlogistique.com.',
    },
    fr: {
      'meta.title': 'LW Logistique — Transport international clé en main',
      'meta.desc': 'Transport routier Flatbed et Drybox clé en main au Canada et aux États-Unis — planifié, documenté et suivi en temps réel par une seule équipe. Fondé en 2025.',
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
      'hero.title': 'Transport international, <em>géré de bout en bout.</em>',
      'hero.sub': 'Envois Flatbed et Drybox à travers l’Amérique du Nord — planifiés, documentés et suivis par une seule équipe.',
      'hero.note': 'Canada · États-Unis · Local, interprovincial et transfrontalier',
      'coverage.ca': 'Tout le Canada',
      'coverage.us': 'États-Unis',
      'coverage.cross': 'Transfrontalier',
      'coverage.tracking': 'Suivi en temps réel',
      'services.kicker': 'Services',
      'services.title': 'Le bon équipement pour chaque envoi',
      'services.lede': 'Transport routier à travers l’Amérique du Nord avec équipements Flat-Bed et Drybox — coordonné de bout en bout.',
      'services.road.title': 'Transport routier',
      'services.road.text': 'Livraison Flat-Bed et Drybox partout en Amérique du Nord — flexible, rapide, locale ou transfrontalière.',
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
      'about.f1.role': 'Président et fondateur',
      'about.f1.bio': 'Plus de huit ans d’expérience en transport et logistique — un expert de terrain attaché à un service rigoureux et humain.',
      'faq.kicker': 'FAQ',
      'faq.title': 'Questions fréquentes',
      'faq.q1': 'Quels territoires couvrez-vous ?',
      'faq.a1': 'Tout le Canada et les États-Unis — local, interprovincial et transfrontalier. Qu’il s’agisse d’un simple trajet ou d’une route complexe, nous identifions la meilleure solution pour livrer vos marchandises rapidement et en sécurité.',
      'faq.q2': 'Quelles solutions de transport offrez-vous ?',
      'faq.a2': 'Transport routier avec équipements Flat-Bed et Drybox, ainsi que la logistique clé en main 4PL.',
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
      'form.mode': 'Équipement',
      'form.mode.any': 'Je ne sais pas — conseillez-moi',
      'form.mode.flatbed': 'Flat-Bed',
      'form.mode.drybox': 'Drybox',
      'form.details': 'Détails de l’envoi',
      'form.details.ph': 'Cargaison, dimensions, poids, échéancier…',
      'form.hint': 'Ceci ouvre un courriel prérempli dans votre application — appuyez sur envoyer quand il vous convient. Aucune donnée n’est conservée sur ce site.',
      'form.submit': 'Préparer le courriel de soumission',
      'form.error.required': 'Veuillez remplir votre nom, votre courriel, l’origine, la destination et les détails de l’envoi.',
      'form.error.email': 'Veuillez entrer une adresse courriel valide.',
      'form.status': 'Votre application de courriel devrait s’ouvrir avec un message prérempli. Sinon, écrivez-nous directement à info@lwlogistique.com.',
      'footer.brand': 'Logistique',
      'equip.kicker': 'Équipements',
      'equip.title': 'Flatbed & Drybox, en détail',
      'equip.lede': 'Deux options complémentaires — nous choisissons celle qui convient à votre cargaison.',
      'equip.fb.title': 'Flat-Bed',
      'equip.fb.text': 'Un plateau ouvert pour les charges qui n’entrent pas dans une boîte — chargement latéral ou par le dessus, arrimage au châssis.',
      'equip.fb.f1': 'Matériaux de construction — bois d’œuvre, acier, gypsum',
      'equip.fb.f2': 'Machinerie et équipements lourds',
      'equip.fb.f3': 'Manutention de charges hors normes',
      'equip.fb.f4': 'Arrimage professionnel et bâches',
      'equip.db.title': 'Drybox',
      'equip.db.text': 'Une remorque scellée pour les marchandises qui doivent arriver exactement comme elles sont parties — protégées de la route et des intempéries.',
      'equip.db.f1': 'Marchandises sur palettes et en caisses',
      'equip.db.f2': 'Protection complète contre les intempéries',
      'equip.db.f3': 'Sécurité de remorque scellée',
      'equip.db.f4': 'Livraison locale et transfrontalière',
      'values.kicker': 'Notre promesse',
      'values.title': 'Simplicité. Transparence. Efficacité.',
      'values.v1.title': 'Simplicité',
      'values.v1.text': 'Un seul interlocuteur pour tout votre envoi — planification, documentation et transporteurs gérés pour vous.',
      'values.v2.title': 'Transparence',
      'values.v2.text': 'Communication claire et mises à jour en temps réel — vous savez toujours où se trouve votre marchandise.',
      'values.v3.title': 'Efficacité',
      'values.v3.text': 'Le bon équipement, la bonne route — des livraisons qui arrivent à l’heure, à chaque fois.',
      'stat.exp': 'années d’expérience',
      'stat.countries': 'pays desservis',
      'stat.founded': 'année de fondation',
      'ctaBand.title': 'Prêt à expédier ?',
      'ctaBand.sub': 'Parlez-nous de votre envoi — nous reviendrons avec un plan et une soumission.',
    },
  };

  var LANG = 'en';

  function snapshotEnglish() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (el.tagName === 'META') {
        I18N.en[el.getAttribute('data-i18n')] = el.getAttribute('content');
      } else {
        I18N.en[el.getAttribute('data-i18n')] = el.textContent;
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      I18N.en[el.getAttribute('data-i18n-html')] = el.innerHTML;
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
      if (I18N[lang][key] === undefined) return;
      if (el.tagName === 'META') {
        el.setAttribute('content', I18N[lang][key]);
      } else {
        el.textContent = I18N[lang][key];
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (I18N[lang][key] !== undefined) el.innerHTML = I18N[lang][key];
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

  /* ---------- Scroll progress bar ---------- */
  var progress = document.createElement('div');
  progress.className = 'progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progress);
  var progressRaf = null;
  window.addEventListener(
    'scroll',
    function () {
      if (progressRaf) return;
      progressRaf = requestAnimationFrame(function () {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
        progressRaf = null;
      });
    },
    { passive: true }
  );

  /* ---------- Staggered reveals ---------- */
  document.querySelectorAll('.equip__grid, .values__grid, .process__grid, .services__grid').forEach(function (group) {
    Array.from(group.children).forEach(function (child, i) {
      child.style.transitionDelay = Math.min(i * 110, 440) + 'ms';
    });
  });

  /* ---------- Animated counters ---------- */
  function animateCount(el) {
    var target = parseInt(el.dataset.count, 10);
    if (isNaN(target)) return;
    var dur = 1400;
    var start = null;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      el.textContent = String(target);
      return;
    }
    function frame(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    var cio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* ---------- Hero parallax ---------- */
  var heroImg = document.querySelector('.hero__img img');
  if (heroImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var parallaxRaf = null;
    window.addEventListener(
      'scroll',
      function () {
        if (parallaxRaf) return;
        parallaxRaf = requestAnimationFrame(function () {
          var y = window.scrollY;
          if (y < window.innerHeight * 1.2) {
            heroImg.style.transform = 'translateY(' + y * 0.22 + 'px) scale(1.06)';
          }
          parallaxRaf = null;
        });
      },
      { passive: true }
    );
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
        var modeLabels = { flatbed: 'Flat-Bed', drybox: 'Drybox' };
        lines.push((LANG === 'fr' ? 'Équipement : ' : 'Equipment: ') + (modeLabels[mode] || mode));
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
