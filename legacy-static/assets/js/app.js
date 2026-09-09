/* ============================================================
   QeeL Tech — app.js
   ============================================================ */
(function () {
  "use strict";

  var WA_NUMBER = "5545991254300";
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function waLink(text) {
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text || "Olá! Vim pelo site da QeeL Tech.");
  }

  /* ---------- icons (lucide-style) ---------- */
  var I = {
    mobile: '<path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M11 18h2"/>',
    wordpress: '<circle cx="12" cy="12" r="9"/><path d="M3.5 9h17M7 3.5 12 21M17 3.5 12 21M4 15h16"/>',
    plugin: '<path d="M14 7h3a2 2 0 0 1 2 2v3M10 7H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3"/><path d="M12 2v5M9 4.5 12 7l3-2.5M19 12h3M17 10.5 22 12l-5 1.5"/>',
    system: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4M8 8l-2 2 2 2M14 8l2 2-2 2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
    seo: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/><path d="M8 11h1.5l1 2 1.5-4 1 2H14"/>',
    cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.4 12.3a1.5 1.5 0 0 0 1.5 1.2h8.2a1.5 1.5 0 0 0 1.5-1.2L21 7H6"/>',
    menu: '<path d="M4 5h16M4 12h16M4 19h10"/><rect x="14" y="15" width="7" height="7" rx="1"/>',
    delivery: '<circle cx="6" cy="18" r="2.5"/><circle cx="17" cy="18" r="2.5"/><path d="M6 15.5V9h6l3 4h2.5L20 15v3M9 18h5M12 9V6h4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    finance: '<rect x="2" y="6" width="20" height="13" rx="2"/><circle cx="12" cy="12.5" r="2.5"/><path d="M6 6V4h12v2"/>',
    calendar: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4M8 14h3M8 17h6"/>',
    dashboard: '<rect x="3" y="3" width="8" height="9" rx="1"/><rect x="13" y="3" width="8" height="5" rx="1"/><rect x="13" y="12" width="8" height="9" rx="1"/><rect x="3" y="16" width="8" height="5" rx="1"/>',
    quote: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h5M8 9h2"/>',
    ticket: '<path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 2 2 0 0 0 0-4Z"/><path d="M13 6v2M13 11v2M13 16v2"/>',
    totem: '<rect x="6" y="2" width="12" height="16" rx="2"/><path d="M9 22h6M12 18v4M9 6h6M9 9h6"/>',
    parking: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>',
    host: '<path d="M4 21V10l8-6 8 6v11"/><path d="M9 21v-6h6v6M15 8h.01"/>',
    link: '<path d="M9 15 15 9"/><path d="M10.5 6.5 12 5a4 4 0 0 1 6 6l-1.5 1.5M13.5 17.5 12 19a4 4 0 0 1-6-6l1.5-1.5"/>',
    checklist: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="m8 8 1.5 1.5L12 7M8 14l1.5 1.5L12 13M15 8h2M15 14h2"/>',
    admin: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
    car: '<path d="M5 13 6.5 8h11L19 13M3 17h18v-4H3v4Z"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/><path d="M3 17v2M21 17v2"/>',
    catalog: '<path d="M4 4h7v16H4zM13 4h7v16h-7z"/><path d="M6.5 8h2M15.5 8h2M6.5 11h2M15.5 11h2"/>',
    realestate: '<path d="M3 21V9l9-6 9 6v12"/><path d="M9 21v-8h6v8M3 21h18"/>',
    signage: '<rect x="2" y="4" width="20" height="12" rx="2"/><path d="M12 16v4M8 20h8M6 8h6M6 11h9"/>',
    crm: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.5A5 5 0 0 1 21 20"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>'
  };

  function svg(name, extra) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"' + (extra || '') + '>' + (I[name] || '') + '</svg>';
  }

  /* ---------- wire all WhatsApp links ---------- */
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    el.setAttribute("href", waLink(el.getAttribute("data-wa")));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  /* ---------- year ---------- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- header scroll ---------- */
  var header = document.getElementById("header");
  function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 20); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- mobile menu ---------- */
  var mobileMenu = document.getElementById("mobileMenu");
  var mt = document.getElementById("menuToggle");
  var mc = document.getElementById("menuClose");
  function closeMenu() { if (mobileMenu) mobileMenu.classList.remove("open"); document.body.style.overflow = ""; }
  if (mt) mt.addEventListener("click", function () { mobileMenu.classList.add("open"); document.body.style.overflow = "hidden"; });
  if (mc) mc.addEventListener("click", closeMenu);
  if (mobileMenu) mobileMenu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });

  /* ---------- hero rotator ---------- */
  (function () {
    var el = document.getElementById("rotator");
    if (!el) return;
    var words = ["aplicativos", "sites", "sistemas web", "lojas virtuais", "plugins", "experiências"];
    var wi = 0, ci = 0, deleting = false;
    function tick() {
      var word = words[wi];
      if (!deleting) {
        ci++;
        if (ci > word.length) { deleting = true; el.textContent = word; setTimeout(tick, 1500); return; }
      } else {
        ci--;
        if (ci < 0) { deleting = false; wi = (wi + 1) % words.length; ci = 0; setTimeout(tick, 220); return; }
      }
      el.textContent = word.substring(0, ci);
      setTimeout(tick, deleting ? 55 : 95);
    }
    if (prefersReduced) { el.textContent = words[0]; } else { tick(); }
  })();

  /* ---------- counters ---------- */
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    if (prefersReduced) { el.textContent = target + "+"; return; }
    var start = 0, dur = 1400, t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + "+";
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- reveal + counters via observer ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        if (e.target.dataset && e.target.dataset.count) animateCount(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.16 });
  document.querySelectorAll(".reveal, [data-count]").forEach(function (el) { io.observe(el); });

  /* ---------- clientes marquee ---------- */
  (function () {
    var track = document.getElementById("clientTrack");
    if (!track) return;
    var clients = ["Bella Massa", "AutoPrime", "Studio Vida", "Rota Delivery", "Clínica Sorriso",
      "Imob Central", "TicketPro", "MegaPark", "FoodExpress", "Barbearia Rei", "Óptica Visão", "Mercado Bom"];
    var html = "";
    clients.forEach(function (c) { html += '<span class="client-chip"><span class="dot"></span>' + c + '</span>'; });
    track.innerHTML = html + html; // duplicate for seamless loop
  })();

  /* ---------- serviços ---------- */
  (function () {
    var grid = document.getElementById("servicesGrid");
    if (!grid) return;
    var services = [
      { ic: "mobile", t: "Aplicativos Mobile", d: "Apps Android e iOS rápidos e intuitivos, do MVP à publicação nas lojas.", wa: "Quero desenvolver um aplicativo mobile com a QeeL Tech." },
      { ic: "wordpress", t: "Sites WordPress", d: "Sites institucionais e blogs profissionais, gerenciáveis e otimizados.", wa: "Quero um site WordPress com a QeeL Tech." },
      { ic: "plugin", t: "Criação de Plugins", d: "Plugins sob medida para estender e automatizar o seu WordPress.", wa: "Preciso de um plugin personalizado. Podemos falar?" },
      { ic: "system", t: "Sistemas Web", d: "Plataformas e sistemas sob medida para digitalizar a sua operação.", wa: "Quero desenvolver um sistema web com a QeeL Tech." },
      { ic: "mail", t: "E-mail Profissional", d: "E-mails com o seu domínio: mais credibilidade e entregabilidade.", wa: "Quero configurar e-mail profissional com a QeeL Tech." },
      { ic: "server", t: "Suporte ao Servidor", d: "Configuração, monitoramento e suporte da sua hospedagem sem dor de cabeça.", wa: "Preciso de suporte ao meu servidor de hospedagem." },
      { ic: "seo", t: "SEO", d: "Otimização para o Google: mais visibilidade e clientes chegando até você.", wa: "Quero melhorar meu SEO com a QeeL Tech." }
    ];
    var html = "";
    services.forEach(function (s, i) {
      html += '<article class="card reveal' + (i % 3 === 1 ? ' d1' : i % 3 === 2 ? ' d2' : '') + '">' +
        '<div class="ico">' + svg(s.ic) + '</div>' +
        '<h3>' + s.t + '</h3><p>' + s.d + '</p>' +
        '<a class="card-link" target="_blank" rel="noopener" href="' + waLink(s.wa) + '">Contratar ' + svg("arrow", ' style="width:16px;height:16px"') + '</a>' +
        '</article>';
    });
    grid.innerHTML = html;
    grid.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  })();

  /* ---------- produtos slider ---------- */
  (function () {
    var track = document.getElementById("productTrack");
    if (!track) return;
    var products = [
      { ic: "cart", tag: "E-commerce", t: "Loja Virtual", d: "Sua loja online completa, com pagamentos, estoque e frete integrados." },
      { ic: "menu", tag: "Food", t: "Cardápio Digital", d: "Cardápio online com QR Code, fotos e atualização em tempo real." },
      { ic: "delivery", tag: "Food", t: "Sistema de Delivery", d: "Receba pedidos direto, sem taxas abusivas de marketplace." },
      { ic: "clock", tag: "Gestão", t: "Controle de Horários", d: "Registro de ponto e jornada dos funcionários de forma simples e segura." },
      { ic: "finance", tag: "Gestão", t: "Sistema Financeiro", d: "Fluxo de caixa, contas a pagar e receber e relatórios num só lugar." },
      { ic: "calendar", tag: "Agenda", t: "Agendamento Online", d: "Clientes agendam sozinhos 24h por dia, com lembretes automáticos." },
      { ic: "dashboard", tag: "Gestão", t: "Dashboard Operacional", d: "Todos os indicadores do seu negócio em um painel visual e em tempo real." },
      { ic: "quote", tag: "Vendas", t: "Sistema de Orçamento", d: "Crie e envie orçamentos profissionais em minutos, com aprovação online." },
      { ic: "ticket", tag: "Eventos", t: "Portal de Ingressos", d: "Venda ingressos online com check-in por QR Code no dia do evento." },
      { ic: "totem", tag: "Autoatendimento", t: "Totem de Autoatendimento", d: "Reduza filas com pedidos e pagamentos feitos pelo próprio cliente." },
      { ic: "parking", tag: "Gestão", t: "Sistema de Estacionamento", d: "Controle de entrada, saída, tarifas e mensalistas automatizado." },
      { ic: "host", tag: "Hospitalidade", t: "Sistema do Anfitrião", d: "Gestão de reservas, hóspedes e check-in para pousadas e locações." },
      { ic: "link", tag: "Marketing", t: "Link na Bio", d: "Uma página só sua reunindo todos os seus links e canais de venda." },
      { ic: "checklist", tag: "Operação", t: "Sistema de Checklist", d: "Padronize rotinas e tarefas da equipe com checklists digitais." },
      { ic: "admin", tag: "WordPress", t: "Plugin de Painel Admin", d: "Personalize o painel do WordPress com a identidade e as funções do cliente." },
      { ic: "car", tag: "Automotivo", t: "Loja de Veículos", d: "Vitrine online de veículos com filtros, fotos e propostas pelo site." },
      { ic: "catalog", tag: "Vendas", t: "Catálogo Digital", d: "Catálogo de produtos elegante e sempre atualizado para compartilhar." },
      { ic: "realestate", tag: "Imobiliária", t: "Sistema para Imobiliárias", d: "Site e sistema de imóveis com busca avançada e gestão de leads." },
      { ic: "signage", tag: "Mídia", t: "Sinalização Digital", d: "Gerencie telas e painéis de conteúdo remotamente (digital signage)." },
      { ic: "crm", tag: "Vendas", t: "CRM", d: "Organize contatos, funil de vendas e relacionamento com clientes." }
    ];

    var total = products.length;
    var html = "";
    products.forEach(function (p, i) {
      var wa = "Tenho interesse no produto \"" + p.t + "\" da QeeL Tech. Podemos conversar?";
      html += '<div class="product-slide" role="group" aria-roledescription="slide" aria-label="' + (i + 1) + ' de ' + total + '">' +
        '<div class="product-card">' +
          '<div class="product-visual"><span class="pv-tag">' + p.tag + '</span><div class="pv-icon">' + svg(p.ic, ' stroke-width="1.4"') + '</div></div>' +
          '<div class="product-info">' +
            '<div class="pcount">Produto ' + (i + 1 < 10 ? '0' : '') + (i + 1) + ' / ' + total + '</div>' +
            '<h3>' + p.t + '</h3><p>' + p.d + '</p>' +
            '<div class="actions">' +
              '<a class="btn btn-primary btn-sm" target="_blank" rel="noopener" href="' + waLink(wa) + '">Contratar ' + svg("arrow", ' style="width:16px;height:16px"') + '</a>' +
              '<a class="btn btn-ghost btn-sm" href="#contato">Saber mais</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    });
    track.innerHTML = html;

    var current = 0;
    var countEl = document.getElementById("sliderCount");
    var dotsWrap = document.getElementById("sliderDots");
    var dHtml = "";
    for (var d = 0; d < total; d++) dHtml += '<button class="dot-btn" role="tab" aria-label="Ir ao produto ' + (d + 1) + '"></button>';
    dotsWrap.innerHTML = dHtml;
    var dots = dotsWrap.querySelectorAll(".dot-btn");

    function pad(n) { return (n < 10 ? "0" : "") + n; }
    function go(n) {
      current = (n + total) % total;
      track.style.transform = "translateX(" + (-current * 100) + "%)";
      if (countEl) countEl.textContent = pad(current + 1) + " / " + pad(total);
      dots.forEach(function (dt, idx) { dt.classList.toggle("active", idx === current); });
    }
    dots.forEach(function (dt, idx) { dt.addEventListener("click", function () { go(idx); }); });
    document.getElementById("prevBtn").addEventListener("click", function () { go(current - 1); });
    document.getElementById("nextBtn").addEventListener("click", function () { go(current + 1); });

    // keyboard
    document.querySelector(".slider").addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") go(current - 1);
      if (e.key === "ArrowRight") go(current + 1);
    });

    // touch / drag swipe
    var startX = 0, dragging = false;
    var vp = document.querySelector(".slider-viewport");
    vp.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; dragging = true; }, { passive: true });
    vp.addEventListener("touchend", function (e) {
      if (!dragging) return; dragging = false;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 45) go(current + (dx < 0 ? 1 : -1));
    });

    go(0);
  })();

  /* ---------- contact form -> WhatsApp ---------- */
  (function () {
    var form = document.getElementById("contactForm");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nome = form.nome.value.trim();
      var tel = form.telefone.value.trim();
      var email = form.email.value.trim();
      var assunto = form.assunto.value;
      var msg = form.mensagem.value.trim();
      if (!nome || !tel) {
        (!nome ? form.nome : form.telefone).focus();
        return;
      }
      var text = "Olá, QeeL Tech! 👋\n\n" +
        "*Nome:* " + nome + "\n" +
        "*Telefone:* " + tel + "\n" +
        (email ? "*E-mail:* " + email + "\n" : "") +
        "*Interesse:* " + assunto + "\n" +
        (msg ? "*Mensagem:* " + msg : "");
      window.open(waLink(text), "_blank", "noopener");
    });
  })();

  /* ---------- hero interactive canvas ---------- */
  (function () {
    var canvas = document.getElementById("hero-canvas");
    if (!canvas || prefersReduced) return;
    var ctx = canvas.getContext("2d");
    var w, h, dpr, points = [], mouse = { x: -999, y: -999 };
    var COLORS = ["139,92,246", "168,85,247", "217,70,239"];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.min(90, Math.floor((w * h) / 14000));
      points = [];
      for (var i = 0; i < count; i++) {
        points.push({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.8 + 0.8,
          c: COLORS[(Math.random() * COLORS.length) | 0]
        });
      }
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < points.length; i++) {
        var p = points[i];
        // mouse attraction
        var dxm = mouse.x - p.x, dym = mouse.y - p.y;
        var dm = Math.sqrt(dxm * dxm + dym * dym);
        if (dm < 160) { p.x += dxm / dm * 0.6; p.y += dym / dm * 0.6; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + p.c + ",0.9)";
        ctx.fill();

        for (var j = i + 1; j < points.length; j++) {
          var q = points[j];
          var dx = p.x - q.x, dy = p.y - q.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = "rgba(" + p.c + "," + (0.14 * (1 - dist / 120)) + ")";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
        // link to mouse
        if (dm < 200) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = "rgba(217,70,239," + (0.22 * (1 - dm / 200)) + ")";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      requestAnimationFrame(frame);
    }

    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", function (e) {
      var rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top;
    });
    canvas.addEventListener("pointerleave", function () { mouse.x = -999; mouse.y = -999; });
    resize();
    frame();
  })();

})();
