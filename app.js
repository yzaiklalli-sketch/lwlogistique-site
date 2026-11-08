(() => {
  'use strict';
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const english = {
    'skip': 'Skip to content', 'brand.sub': 'TRANSPORT WITH DIRECTION',
    'nav.equipment': 'Equipment', 'nav.approach': 'The LW approach', 'nav.coverage': 'Canada + United States', 'nav.quote': 'Get a quote', 'nav.menu': 'Menu', 'nav.close': 'Close',
    'hero.kicker': 'ROAD TRANSPORT, RETHOUGHT.',
    'hero.title': 'Every cargo.<br><span>One mission.</span>',
    'hero.lede': 'You have the cargo.<br>We have the plan.',
    'hero.description': 'Flatbed and Drybox, across Canada and the United States. One team coordinating your shipment, from the first conversation to delivery.',
    'hero.cta': 'Plan my shipment', 'hero.discover': 'The LW experience', 'hero.fact1.label': 'EQUIPMENT', 'hero.fact2.label': 'AVAILABILITY', 'hero.fact2.value': '24 hours · 7 days a week',
    'video.play': 'Bring it to life', 'ticker.us': 'UNITED STATES',
    'equipment.kicker': '01 / THE RIGHT EQUIPMENT',
    'equipment.title': 'Two solutions.<br>One direction.',
    'equipment.intro': 'The right solution starts with your cargo. We coordinate transport with equipment suited to its dimensions, weight and destination.',
    'equipment.flat.alt': 'Open flatbed trailer with securely strapped steel beams',
    'equipment.flat.type': 'OPEN PLATFORM TRAILER', 'equipment.flat.title': 'More space.<br>More possibilities.',
    'equipment.flat.body': 'For materials, equipment and cargo suited to an open platform. We plan your shipment around the actual characteristics of your freight.',
    'equipment.flat.item1': 'Construction materials', 'equipment.flat.item2': 'Equipment and machinery', 'equipment.flat.item3': 'Flatbed-compatible loads', 'equipment.flat.choose': 'Choose Flatbed',
    'equipment.dry.alt': 'Highway tractor with a closed white dry van trailer, without a refrigeration unit',
    'equipment.dry.type': 'ENCLOSED TRAILER', 'equipment.dry.title': 'Protected.<br>In motion.',
    'equipment.dry.body': 'For freight that needs an enclosed trailer. We arrange transport for your pallets and Drybox-compatible cargo.',
    'equipment.dry.item1': 'Palletized freight', 'equipment.dry.item2': 'Enclosed trailer loading', 'equipment.dry.item3': 'Non-refrigerated road transport', 'equipment.dry.choose': 'Choose Drybox',
    'approach.kicker': '02 / THE LW APPROACH', 'approach.title': 'One contact.<br>All the<br><span>coordination.</span>',
    'approach.intro': 'Your transport does not need to be complicated to be well organized. We keep communication clear and the next steps concrete.',
    'approach.link': 'Let’s discuss your shipment',
    'process.1.title': 'We listen.', 'process.1.body': 'The cargo, the route, the schedule. We start by understanding what you need to move and your requirements.',
    'process.2.title': 'We make a plan.', 'process.2.body': 'Flatbed or Drybox, pickup and delivery. Together, we assess your transport needs and the information to gather.',
    'process.3.title': 'We coordinate the road.', 'process.3.body': 'We connect with carriers. You keep one point of contact for organizing your shipment.',
    'process.4.title': 'We stay in touch.', 'process.4.body': 'Communication continues throughout transport. We help you navigate the next steps and any changes along the way.',
    'journey.kicker': 'THE THREAD OF YOUR TRANSPORT',
    'journey.title': 'From loading<br><span>to delivery.</span>',
    'journey.intro': 'Your cargo moves forward. Our support follows the same route, with one point of contact to coordinate each step.',
    'journey.loading': 'Loading', 'journey.loading.body': 'The right preparation, at the starting point.',
    'journey.transit': 'On the road', 'journey.transit.body': 'Coordination continues, kilometre after kilometre.',
    'journey.delivery': 'Delivery', 'journey.delivery.body': 'One contact through to the destination.',
    'journey.note': 'The LW journey, illustrated. Not real-time shipment tracking.',
    'journey.cta': 'Let’s map your route',
    'coverage.kicker': '03 / BEYOND DISTANCES', 'coverage.title': 'Your next departure<br>starts here.',
    'coverage.intro': 'From Québec to Ontario, or across the border. Select a sample route to start preparing your request.',
    'coverage.options': 'WHICH WAY ARE YOU HEADED?', 'coverage.custom': 'Your own route',
    'coverage.note': 'A few starting points. Your cargo, on the other hand, is unique.',
    'coverage.visual': 'EVERY ROUTE STARTS WITH A PLAN', 'route.origin': 'ORIGIN', 'route.destination': 'DESTINATION',
    'coverage.domestic': 'Interprovincial transport', 'coverage.cta': 'Prepare this shipment',
    'about.kicker': '04 / INDEPENDENT. INVOLVED.',
    'about.title': 'Rooted in Sainte-Sophie.<br>Connected to your route.',
    'about.body': 'Founded in 2026, LW Logistique is a freight brokerage led by Yzaik Lalli, its president and founder. Our approach: a direct relationship, thoughtful planning and practical support.',
    'about.lw': 'LW stands for <strong>Let’s Win Together</strong>. When your shipment succeeds, we succeed with you.',
    'about.role': 'President and founder',
    'about.statement': 'A new company.<br>A clear idea:<br><strong>simplify your transport.</strong>',
    'faq.kicker': 'STRAIGHT ANSWERS.', 'faq.title': 'Before you<br>hit the road.',
    'faq.intro': 'Another question?<br>We are just a call away.',
    'faq.1.q': 'Flatbed or Drybox: how do I choose?',
    'faq.1.a': 'It depends on your freight, its dimensions and loading conditions. Describe your cargo in the request and we will help identify the right equipment.',
    'faq.2.q': 'Do you arrange shipments to the United States?',
    'faq.2.a': 'Yes, we coordinate road transport in Canada and the United States. For cross-border shipments, we review the route, requirements and necessary information with you.',
    'faq.3.q': 'What do I need to request a quote?',
    'faq.3.a': 'Include the origin, destination, type of cargo, dimensions, weight and preferred schedule. Add any known access or loading constraints to help us prepare your request.',
    'faq.4.q': 'Can I reach you outside business hours?',
    'faq.4.a': 'LW Logistique is available 24 hours a day, 7 days a week. For an urgent request, call 450-436-0852 and tell us your schedule.',
    'contact.kicker': 'THE NEXT MISSION IS YOURS.', 'contact.title': 'Let’s get it<br><span>moving.</span>',
    'contact.intro': 'Three steps to tell us about your shipment. Our team will contact you to plan what comes next.',
    'contact.location': 'OUR STARTING POINT', 'contact.available': 'Available 24/7',
    'form.kicker': 'REQUEST A QUOTE', 'form.step1': 'The route', 'form.step2': 'The cargo', 'form.step3': 'Your details',
    'form.route.title': 'Where from? Where to?', 'form.route.description': 'Cities and provinces or states are enough to get started.',
    'form.origin': 'Pickup location', 'form.origin.ph': 'E.g. Montréal, QC', 'form.destination': 'Destination', 'form.destination.ph': 'E.g. Toronto, ON',
    'form.route.help': 'Canada and the United States. Every route is assessed based on your request.',
    'form.cargo.title': 'What are we moving?', 'form.cargo.description': 'A few details make all the difference when planning your transport.',
    'form.mode': 'Preferred equipment', 'form.mode.unsure': 'Let’s determine it together',
    'form.details': 'Your cargo and schedule', 'form.details.ph': 'Type of freight, dimensions, weight, dates and loading requirements…',
    'form.contact.title': 'Let’s connect.', 'form.contact.description': 'Leave your contact details so we can follow up on your request.',
    'form.summary': 'YOUR SHIPMENT', 'form.name': 'Your name', 'form.name.ph': 'First and last name',
    'form.company': 'Company (optional)', 'form.company.ph': 'Your company', 'form.email': 'Your email', 'form.email.ph': 'you@company.com',
    'form.phone': 'Phone (optional)', 'form.phone.ph': 'Your number',
    'form.consent': 'I agree that LW Logistique may use this information to respond to my transport request.',
    'form.privacy': 'Processed by Netlify Forms for LW Logistique. Do not include payment data or sensitive documents. No booking is created automatically.',
    'form.back': 'Back', 'form.next': 'Continue', 'form.submit': 'Send my request', 'form.bottom': 'A first conversation. A clear direction.',
    'footer.statement': 'A sense of direction.<br>A focus on the relationship.', 'footer.cta': 'Your next mission',
    'cta.kicker': 'READY TO SHIP?', 'cta.title': 'Request your quote.', 'cta.note': 'Describe your cargo and your route. Our team replies quickly, from first conversation to delivery.', 'cta.button': 'Request a quote',
    'sticky.call': 'Call', 'sticky.quote': 'Quote',
    'footer.privacy': 'Your information', 'footer.top': 'Back to top',
    'privacy.title': 'Your information.',
    'privacy.body': 'Information from the form is used to review your transport request and contact you. The form is processed by Netlify Forms for LW Logistique. Do not include payment data or sensitive information.',
    'privacy.contact': 'For questions about your request or personal information, email info@lwlogistique.com.'
  };
  const translations = $$('[data-i18n], [data-i18n-ph], [data-i18n-alt]').map(el => ({
    el, key: el.dataset.i18n || el.dataset.i18nPh || el.dataset.i18nAlt,
    attr: el.hasAttribute('data-i18n-ph') ? 'placeholder' : el.hasAttribute('data-i18n-alt') ? 'alt' : null,
    fr: el.hasAttribute('data-i18n-ph') ? el.placeholder : el.hasAttribute('data-i18n-alt') ? el.alt : el.innerHTML
  }));
  let lang = 'fr', step = 0, route = 0, busy = false;
  const form = $('#quote-form'), steps = $$('[data-form-step]'), tabs = $$('[data-equipment]');
  const error = $('#form-error'), status = $('#form-status');
  const pick = (fr, en) => lang === 'fr' ? fr : en;
  const modeName = () => $('#f-mode').value === 'flatbed' ? 'Flatbed' : $('#f-mode').value === 'drybox' ? 'Drybox' : pick('Équipement à préciser', 'Equipment to be confirmed');
  function summary() {
    $('[data-summary-route]').textContent = `${$('#f-origin').value || '…'} → ${$('#f-destination').value || '…'}`;
    $('[data-summary-mode]').textContent = modeName();
  }
  function renderRoute() {
    const routes = [
      ['CA / CA', 'Montréal', 'Toronto', pick('Transport interprovincial', 'Interprovincial transport')],
      ['CA / US', 'Québec', 'Boston', pick('Transport transfrontalier', 'Cross-border transport')],
      ['CA + US', pick('Votre départ', 'Your origin'), pick('Votre destination', 'Your destination'), pick('Un trajet à préparer ensemble', 'A route to plan together')]
    ];
    ['code', 'origin', 'destination', 'territory'].forEach((key, i) => $(`[data-route-${key}]`).textContent = routes[route][i]);
    $$('[data-route]').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.route === route)));
  }
  function videoLabel() {
    const playing = !$('#hero-video').paused;
    $('#video-toggle').setAttribute('aria-pressed', String(playing));
    $('[data-video-label]').textContent = playing ? pick('Mettre en pause', 'Pause motion') : pick('Animer l’image', 'Bring it to life');
    $('.video-symbol').textContent = playing ? 'Ⅱ' : '▷';
  }
  $('#language-toggle').addEventListener('click', () => {
    lang = lang === 'fr' ? 'en' : 'fr';
    document.documentElement.lang = lang;
    translations.forEach(({ el, key, attr, fr }) => {
      const value = lang === 'en' ? english[key] ?? fr : fr;
      if (attr) el.setAttribute(attr, value); else el.innerHTML = value;
    });
    $('#language-toggle').textContent = lang === 'fr' ? 'EN' : 'FR';
    $('#language-toggle').setAttribute('aria-label', pick('Read in English', 'Lire en français'));
    [
      ['.desktop-nav', 'Navigation principale', 'Main navigation'],
      ['.equipment-tabs', 'Choisir un équipement', 'Choose equipment'],
      ['.route-buttons', 'Exemples de trajets', 'Sample routes'],
      ['.step-nav', 'Étapes du formulaire', 'Form steps'],
      ['#mobile-menu', 'Menu principal', 'Main menu'],
      ['.ticker', 'Flatbed, Drybox, Canada et États-Unis', 'Flatbed, Drybox, Canada and United States']
    ].forEach(([selector, fr, en]) => $(selector).setAttribute('aria-label', pick(fr, en)));
    $$('.brand').forEach(el => el.setAttribute('aria-label', pick('LW Logistique, accueil', 'LW Logistique, home')));
    form.elements.language.value = lang;
    document.title = pick('LW Logistique Inc. – Transport | Canada – États-Unis : flatbed, drybox et machinerie', 'LW Logistique Inc. – Transport | Canada – USA freight: flatbed, dry van and machinery');
    summary(); renderRoute(); videoLabel(); renderJourney();
    if (busy) $('[data-submit-label]').textContent = pick('Envoi en cours…', 'Sending…');
  });
  function chooseEquipment(mode, focus = false) {
    $('.equipment-tabs').style.setProperty('--tab-index', mode === 'drybox' ? '1' : '0');
    tabs.forEach(t => {
      const active = t.dataset.equipment === mode;
      t.setAttribute('aria-selected', String(active));
      t.tabIndex = active ? 0 : -1;
      $(`#panel-${t.dataset.equipment}`).hidden = !active;
      if (active && focus) t.focus();
    });
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => chooseEquipment(tab.dataset.equipment));
    tab.addEventListener('keydown', e => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
      e.preventDefault();
      const index = e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      chooseEquipment(tabs[index].dataset.equipment, true);
    });
  });
  const menu = $('#mobile-menu');
  $('#menu-open').addEventListener('click', () => { menu.showModal(); $('#menu-open').setAttribute('aria-expanded', 'true'); });
  const closeMenu = () => menu.close();
  $('#menu-close').addEventListener('click', closeMenu);
  menu.addEventListener('close', () => $('#menu-open').setAttribute('aria-expanded', 'false'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  const privacy = $('#privacy-dialog');
  $('#privacy-open').addEventListener('click', () => privacy.showModal());
  $('#privacy-close').addEventListener('click', () => privacy.close());
  const desktop = matchMedia('(min-width: 961px)');
  desktop.addEventListener('change', e => { if (e.matches && menu.open) menu.close(); });
  function showStep(index, focus = false) {
    step = index;
    $('.step-nav').style.setProperty('--step-index', String(index));
    steps.forEach((s, i) => s.hidden = i !== step);
    $('#form-back').hidden = step === 0;
    $('#form-next').hidden = step === 2;
    $('#form-submit').hidden = step !== 2;
    $('.step-count').textContent = `0${step + 1} / 03`;
    $$('[data-step]').forEach((b, i) => {
      if (i === step) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current');
      b.disabled = busy;
    });
    summary();
    if (focus) {
      const title = steps[step].querySelector('legend');
      title.tabIndex = -1; title.focus({ preventScroll: true });
      $('.quote-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  function validate(index) {
    for (const field of steps[index].querySelectorAll('input, select, textarea')) {
      if (field.required && field.type !== 'checkbox' && !field.value.trim()) {
        field.setCustomValidity(pick('Veuillez remplir ce champ.', 'Please complete this field.'));
      } else field.setCustomValidity('');
      if (!field.checkValidity()) { showStep(index); field.reportValidity(); return false; }
    }
    return true;
  }
  function goTo(index) {
    if (busy) return;
    if (index > step) for (let i = step; i < index; i++) if (!validate(i)) return;
    showStep(index, true);
  }
  form.noValidate = true;
  $('.step-nav').hidden = false;
  showStep(0);
  $('#form-back').addEventListener('click', () => goTo(Math.max(0, step - 1)));
  $('#form-next').addEventListener('click', () => goTo(Math.min(2, step + 1)));
  $$('[data-step]').forEach(b => b.addEventListener('click', () => goTo(+b.dataset.step)));
  form.addEventListener('input', e => { if (e.target.setCustomValidity) e.target.setCustomValidity(''); summary(); });
  form.addEventListener('change', summary);
  function openQuote() { showStep(0); $('#contact').scrollIntoView({ behavior: 'smooth' }); }
  $$('[data-choose-mode]').forEach(b => b.addEventListener('click', () => { $('#f-mode').value = b.dataset.chooseMode; openQuote(); }));
  $$('[data-route]').forEach(b => b.addEventListener('click', () => { route = +b.dataset.route; renderRoute(); }));
  $('#route-quote').addEventListener('click', () => {
    $('#f-origin').value = route === 0 ? 'Montréal, QC' : route === 1 ? 'Québec, QC' : '';
    $('#f-destination').value = route === 0 ? 'Toronto, ON' : route === 1 ? 'Boston, MA' : '';
    openQuote();
  });
  function message(el, text) { el.textContent = text; el.hidden = false; el.focus(); }
  function setBusy(value) {
    busy = value;
    $('#form-submit').disabled = value;
    $('#form-back').disabled = value;
    $$('[data-step]').forEach(b => b.disabled = value);
    form.setAttribute('aria-busy', String(value));
    $('[data-submit-label]').textContent = value ? pick('Envoi en cours…', 'Sending…') : pick('Envoyer ma demande', 'Send my request');
  }
  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (busy) return;
    if (step < 2) { goTo(step + 1); return; }
    for (let i = 0; i < steps.length; i++) if (!validate(i)) return;
    error.hidden = status.hidden = true;
    const allowed = ['lwlogistique.ca', 'www.lwlogistique.ca', 'verdant-sprite-d1b9ca.netlify.app', 'lwlogistique-site.netlify.app'];
    if (!allowed.includes(location.hostname) || form.hasAttribute('data-netlify')) {
      message(error, pick(
        'Cet aperçu ne transmet pas de soumission. Pour une demande réelle : info@lwlogistique.com ou 450-436-0852. Vos renseignements restent dans le formulaire.',
        'This preview does not send quote requests. For a real request: info@lwlogistique.com or 450-436-0852. Your information remains in the form.'
      ));
      return;
    }
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);
    setBusy(true);
    try {
      const response = await fetch('/', {
        method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(), signal: controller.signal
      });
      if (!response.ok) throw new Error('Submission rejected');
      form.reset(); form.elements.language.value = lang; showStep(0);
      message(status, pick(
        'Votre demande a été acceptée par le formulaire. L’équipe LW Logistique pourra en prendre connaissance et vous contacter. Pour une urgence, appelez le 450-436-0852.',
        'Your request was accepted by the form. The LW Logistique team can review it and contact you. For urgent requests, call 450-436-0852.'
      ));
      document.dispatchEvent(new CustomEvent('lw:quote-submitted', { detail: { language: lang } }));
    } catch {
      message(error, pick(
        'L’envoi n’a pas pu être confirmé. Vos renseignements ont été conservés. Réessayez ou contactez info@lwlogistique.com / 450-436-0852.',
        'We could not confirm submission. Your information has been kept. Please retry or contact info@lwlogistique.com / 450-436-0852.'
      ));
    } finally { clearTimeout(timeout); setBusy(false); }
  });
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const journey = $('#parcours');
  const journeyBoard = journey.querySelector('.journey-board');
  const journeyStops = [...journey.querySelectorAll('[data-journey-stop]')];
  const journeyRoads = [...journey.querySelectorAll('.journey-road')].map(svg => {
    const path = svg.querySelector('.journey-road-fill');
    const length = path.getTotalLength();
    return {
      svg, path, length, truck: svg.querySelector('.journey-truck'),
      pins: [...svg.querySelectorAll('[data-journey-pin]')].map(pin => {
        const circle = pin.querySelector('circle');
        const cx = +circle.getAttribute('cx'), cy = +circle.getAttribute('cy');
        // Find the actual position on each curve, not a guessed time fraction.
        let nearest = 0, distance = Infinity;
        for (let i = 0; i <= 200; i++) {
          const p = path.getPointAtLength(length * i / 200);
          const d = Math.hypot(p.x - cx, p.y - cy);
          if (d < distance) { distance = d; nearest = i / 200; }
        }
        return { pin, at: nearest };
      })
    };
  });
  let journeyDisplayed = null, journeyTarget = 0, journeyFrame = 0, journeyLast = 0;
  function paintJourney(value) {
    journey.classList.toggle('is-animated', !reduced.matches);
    journey.dataset.progress = value.toFixed(4);
    journeyRoads.forEach(({ svg, path, length, truck, pins }) => {
      path.style.strokeDashoffset = String(1 - value);
      pins.forEach(({ pin, at }) => pin.classList.toggle('is-reached', value >= at));
      if (getComputedStyle(svg).display === 'none') return;
      journeyStops.forEach((stop, i) => stop.classList.toggle('is-reached', value >= pins[i].at));
      if (reduced.matches) return;
      const at = value * length;
      const point = path.getPointAtLength(at);
      const before = path.getPointAtLength(Math.max(0, at - 1));
      const after = path.getPointAtLength(Math.min(length, at + 1));
      const angle = Math.atan2(after.y - before.y, after.x - before.x) * 180 / Math.PI;
      truck.setAttribute('transform', `translate(${point.x} ${point.y}) rotate(${angle})`);
    });
  }
  function journeyTick(time) {
    const elapsed = Math.min(64, Math.max(1, time - journeyLast));
    journeyLast = time;
    journeyDisplayed += (journeyTarget - journeyDisplayed) * (1 - Math.exp(-elapsed / 95));
    if (Math.abs(journeyTarget - journeyDisplayed) < .0004) {
      journeyDisplayed = journeyTarget;
      journeyFrame = 0;
      paintJourney(journeyDisplayed);
      return;
    }
    paintJourney(journeyDisplayed);
    journeyFrame = requestAnimationFrame(journeyTick);
  }
  function renderJourney() {
    const bounds = journeyBoard.getBoundingClientRect();
    journeyTarget = reduced.matches ? 1 : Math.max(0, Math.min(1, (innerHeight * .9 - bounds.top) / (innerHeight * .55 + bounds.height * .2)));
    if (reduced.matches || journeyDisplayed === null) {
      cancelAnimationFrame(journeyFrame); journeyFrame = 0;
      journeyDisplayed = journeyTarget;
      paintJourney(journeyDisplayed);
    } else if (!journeyFrame) {
      journeyLast = performance.now();
      journeyFrame = requestAnimationFrame(journeyTick);
    }
  }
  reduced.addEventListener('change', renderJourney);
  const stickyCall = $('#sticky-call');
  if (stickyCall && matchMedia('(max-width:720px)').matches) {
    const hero = $('#top'), formSection = $('#contact');
    const updateSticky = () => {
      const past = scrollY > Math.max(hero.offsetHeight * .4, 400);
      const rect = formSection.getBoundingClientRect();
      const formVisible = rect.top < innerHeight && rect.bottom > 0;
      const show = past && !formVisible;
      stickyCall.classList.toggle('is-visible', show);
      document.body.classList.toggle('has-sticky-call', show);
    };
    addEventListener('scroll', updateSticky, { passive:true });
    updateSticky();
  }

  const video = $('#hero-video');
  async function playVideo() {
    video.muted = true;
    if (!video.querySelector('source').src) {
      video.querySelector('source').src = video.querySelector('source').dataset.src; video.load();
    }
    try { await video.play(); video.classList.add('is-ready'); } catch { video.classList.remove('is-ready'); }
    videoLabel();
  }
  $('#video-toggle').addEventListener('click', () => { if (video.paused) playVideo(); else { video.pause(); videoLabel(); } });
  video.addEventListener('playing', () => { video.classList.add('is-ready'); videoLabel(); });
  video.addEventListener('pause', videoLabel);
  video.addEventListener('error', () => { video.classList.remove('is-ready'); videoLabel(); });
  reduced.addEventListener('change', e => { if (e.matches) video.pause(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) video.pause(); });
  // Mobile receives the same muted, inline cinematic opening. Data-saver and
  // reduced-motion preferences always keep the static poster.
  if (!reduced.matches && !navigator.connection?.saveData) playVideo();
  if (!reduced.matches) document.documentElement.classList.add('motion-ready');
  const pointerFine = matchMedia('(hover:hover) and (pointer:fine)');
  $$('.button').forEach(button => {
    button.addEventListener('pointermove', e => {
      if (reduced.matches || !pointerFine.matches) return;
      const box = button.getBoundingClientRect();
      button.style.setProperty('--arrow-x', `${((e.clientX - box.left) / box.width - .5) * 6}px`);
      button.style.setProperty('--arrow-y', `${((e.clientY - box.top) / box.height - .5) * 6}px`);
    });
    button.addEventListener('pointerleave', () => {
      button.style.setProperty('--arrow-x', '0px');
      button.style.setProperty('--arrow-y', '0px');
    });
  });
  if ('IntersectionObserver' in window && !reduced.matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.08, rootMargin: '0px 0px 24px 0px' });
    $$('.reveal').forEach(el => { el.dataset.ready = ''; observer.observe(el); });
    document.documentElement.classList.add('js');
  }
  let queued = false;
  function progress() {
    queued = false;
    const height = document.documentElement.scrollHeight - innerHeight;
    $('.reading-progress').style.transform = `scaleX(${height > 0 ? scrollY / height : 0})`;
    const heroShift = !reduced.matches && desktop.matches ? Math.min(scrollY, $('#top').offsetHeight) * .1 : 0;
    $('.hero-media').style.setProperty('--hero-parallax', `${heroShift}px`);
    renderJourney();
  }
  addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(progress); } }, { passive: true });
  addEventListener('resize', progress); progress();
})();
