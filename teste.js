const container = document.getElementById('InicioContainerPrincipal');

container.style.width = '100%'
container.style.height = '100%'
container.style.left = '0px'
container.style.top = '0px'
container.style.minHeight = 'unset'
container.style.overflow = 'auto'
container.style.setProperty('position', 'unset', 'important')
container.style.setProperty('padding', '0', 'important')

container.innerHTML = `<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SintecPriori ERP – Gestão completa, integrada e inteligente</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  <link rel="icon" type="image/png" sizes="16x16" href="./favicons/favicon-16x16.png">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="theme-color" content="#ffffff">

  <style>
    /* --- CSS Variables --- */
    :root {
      --blue-dark: #0d2e5a;
      --blue-mid: #1256a8;
      --blue-light: #2a8fd4;
      --blue-btn: #1a6fc4;
      --blue-accent: #1e7fc8;
      --teal: #1a9fcc;
      --gray-bg: #f0f2f5;
      --gray-text: #3a3d4a;
      --gray-soft: #6b7280;
      --white: #ffffff;
      --border: #d1d9e6;
      --font: 'Nunito', sans-serif;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: var(--font);
      background: var(--gray-bg);
      color: var(--gray-text);
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* ---------------------------------------
     HEADER
  --------------------------------------- */
    header {
      background: var(--white);
      border-bottom: 1px solid var(--border);
      padding: 0 2rem;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      position: relative;
      z-index: 10;
      box-shadow: 0 1px 6px rgba(0, 0, 0, .06);
      position: fixed;
      width: 100%;
    }

    /* Left social bar */
    .header-left {
      display: flex;
      align-items: center;
      gap: 1.4rem;
      flex-shrink: 0;
    }

    .header-left a {
      display: flex;
      align-items: center;
      gap: .42rem;
      color: var(--gray-soft);
      font-size: 15px;
      font-weight: 600;
      text-decoration: none;
      transition: color .2s;
    }

    .header-left a:hover {
      color: var(--blue-mid);
    }

    .header-left .sep {
      width: 1px;
      height: 22px;
      background: var(--border);
    }

    /* Right login area */
    .header-right {
      display: flex;
      align-items: center;
      gap: .7rem;
      flex-shrink: 0;
    }

    .input-wrap {
      position: relative;
      display: flex;
      align-items: center;
    }

    .input-wrap i {
      position: absolute;
      left: .75rem;
      color: #9ca3af;
      font-size: .82rem;
    }

    .header-right input {
      height: 38px;
      padding: 0 2rem 0 2.1rem;
      border: 1.5px solid var(--border);
      border-radius: 8px;
      font-family: var(--font);
      font-size: .82rem;
      color: var(--gray-text);
      background: var(--gray-bg);
      outline: none;
      width: 160px;
      transition: border-color .2s, box-shadow .2s;
    }

    .header-right input:focus {
      border-color: var(--blue-light);
      box-shadow: 0 0 0 3px rgba(42, 143, 212, .15);
    }

    .header-right input::placeholder {
      color: #9ca3af;
    }

    /* eye icon on password */
    .eye-btn {
      position: absolute;
      right: .6rem;
      background: none;
      border: none;
      cursor: pointer;
      color: #9ca3af;
      font-size: .8rem;
      padding: 0;
      line-height: 1;
    }

    .btn-entrar {
      display: inline-flex;
      align-items: center;
      justify-content: center;

      height: 38px;
      padding: 0 1.5rem;

      background: linear-gradient(135deg, var(--blue-mid), var(--blue-btn));
      color: #fff !important;

      border: none;
      border-radius: 8px;

      font-family: var(--font);
      font-size: .85rem;
      font-weight: 700;

      cursor: pointer;
      letter-spacing: .4px;

      transition: opacity .2s, transform .15s;

      white-space: nowrap;
      text-decoration: none !important;
    }


    .btn-entrar:hover {
      opacity: .9;
      transform: translateY(-1px);
    }

    .forgot-wrap {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;
    }

    /* hide button label on very small screens — show later */
    .forgot-wrap a {
      font-size: .72rem;
      color: var(--blue-accent);
      text-decoration: underline;
      white-space: nowrap;
    }

    /* ---------------------------------------
     MAIN HERO SECTION
  --------------------------------------- */
    main {
      position: relative;
      overflow: hidden;
      min-height: calc(100vh - 64px);
      padding: 3rem 4rem 6rem;
      display: flex;
      align-items: center;
    }

    /* dotted background pattern (subtle) */
    main::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(circle, #c0cfe0 1px, transparent 1px);
      background-size: 22px 22px;
      opacity: .35;
      pointer-events: none;
    }

    .hero {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: 1fr 1.15fr;
      gap: 4rem;
      width: 100%;
      max-width: 1260px;
      margin: 0 auto;
      align-items: center;
    }

    /* -- LEFT COLUMN -- */
    .hero-left {
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
    }

    /* Logo */
    .logo-block {
      display: flex;
      flex-direction: column;
      gap: .15rem;
      width: 300px;
      justify-content: center;
    }

    .logo-icon {
      display: flex;
      align-items: flex-end;
      gap: 0;
      margin-bottom: .3rem;
    }

    .logo-img {
      width: 300px;
      height: auto;
    }

    .logo-name {
      display: flex;
      align-items: baseline;
      gap: 0;
      line-height: 1;
      width: 300px;
      justify-content: center;
    }


    .logo-sintec {
      font-size: 2.6rem;
      font-weight: 900;
      color: var(--blue-dark);
      letter-spacing: -1px;
    }

    .logo-priori {
      font-size: 2.6rem;
      font-weight: 900;
      color: var(--blue-light);
      letter-spacing: -1px;
    }

    .logo-erp-row {
      display: flex;
      align-items: center;
      gap: .5rem;
      margin-top: .15rem;
      width: 300px;
      justify-content: center;
    }

    .logo-erp-line {
      width: 50%;
      height: 2px;
      background: linear-gradient(to right, var(--blue-dark), transparent);
      max-width: 80px;
    }

    .logo-erp-text {
      font-size: 1.05rem;
      font-weight: 800;
      color: var(--blue-dark);
      letter-spacing: 4px;
    }

    .logo-erp-line-right {
      width: 50%;
      height: 2px;
      background: linear-gradient(to left, var(--blue-dark), transparent);
      max-width: 80px;
    }

    /* Headline */
    .headline {
      font-size: 1.65rem;
      font-weight: 800;
      color: var(--blue-dark);
      line-height: 1.3;
    }

    .headline span {
      color: var(--blue-light);
    }

    /* Checklist */
    .checklist {
      display: flex;
      flex-direction: column;
      gap: .65rem;
    }

    .check-item {
      display: flex;
      align-items: center;
      gap: .65rem;
      font-size: 1rem;
      font-weight: 700;
      color: var(--blue-dark);
    }

    .check-item i {
      color: var(--blue-light);
      font-size: 1.1rem;
      flex-shrink: 0;
    }

    /* -- RIGHT COLUMN -- */
    .hero-right {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .modules-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      /* two rows: row 1 has 6, row 2 has 5 — handled via grid-column span or auto */
      gap: 0;
      border: 1.5px solid var(--border);
      border-radius: 14px;
      overflow: hidden;
      background: var(--white);
      box-shadow: 0 4px 24px rgba(18, 86, 168, .09);
    }

    /* Row 1: 6 items, row 2: 5 items — we want row 2 centered.
     Use a wrapper per row */
    .modules-row {
      display: contents;
      /* flat into grid */
    }

    .module-cell {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: .55rem;
      padding: 1.2rem .5rem;
      border-right: 1.5px solid var(--border);
      border-bottom: 1.5px solid var(--border);
      cursor: pointer;
      transition: background .18s;
      text-align: center;
    }

    .module-cell:hover {
      background: #eaf4fd;
    }

    .module-cell:nth-child(6) {
      border-right: none;
    }

    /* Center the 5-item second row — add empty cell at end */
    .module-cell.phantom {
      visibility: hidden;
      pointer-events: none;
      border-right: none;
      border-bottom: none;
    }

    .module-cell i {
      font-size: 1.65rem;
      color: var(--blue-mid);
      line-height: 1;
    }

    .module-cell span {
      font-size: .68rem;
      font-weight: 800;
      color: var(--blue-dark);
      letter-spacing: .5px;
      text-transform: uppercase;
      line-height: 1.3;
    }

    /* ---------------------------------------
     CURVED STRIPES — bottom-right
  --------------------------------------- */
    .stripes-svg {
      position: fixed;
      bottom: 0px;
      right: 0;
      width: 70vw;
      min-width: 260px;
      pointer-events: none;
      z-index: 0;
    }

    /* ---------------------------------------
     FOOTER BRAND — bottom right
  --------------------------------------- */
    .brand-footer {
      position: fixed;
      bottom: 1.8rem;
      right: 2.5rem;
      z-index: 5;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: .1rem;
    }

    .brand-footer .brand-logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: .1rem;
      width: 100%;
    }

    .brand-footer .brand-logo img {
      width: 50px;
      height: auto;
    }

    .brand-footer .brand-logo-text {
      display: flex;
      flex-direction: column;
      line-height: 1;
      text-align: center;
    }

    .brand-footer .brand-logo-text i {
      position: absolute;
      font-size: 0.8rem;
    }

    .brand-footer .brand-logo-text span:first-child {
      font-size: .75rem;
      font-weight: 900;
      color: var(--blue-dark);
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    .brand-footer .brand-logo-text span:last-child {
      font-size: .6rem;
      font-weight: 700;
      color: var(--blue-mid);
      letter-spacing: 3px;
      text-transform: uppercase;
      text-align: center;
    }

    .brand-footer .brand-site {
      font-size: .7rem;
      color: var(--gray-soft);
      font-weight: 600;
    }

    .brand-footer .brand-phone {
      font-size: 1rem;
      font-weight: 900;
      color: var(--blue-dark);
      letter-spacing: .5px;
    }

    /* ---------------------------------------
     RESPONSIVE — TABLET (~768px)
  --------------------------------------- */
    @media (max-width: 1024px) {
      main {
        padding: 5rem 2rem 7rem;
      }

      .hero {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }

      .modules-grid {
        grid-template-columns: repeat(3, 1fr);
      }

      .headline {
        text-align: center;
      }

      .logo-block {
        display: flex;
        flex-direction: column;
        gap: .15rem;
        align-items: center;
        align-self: center;
      }
    }

    .stripes-svg {
      width: 60vw;
    }

    .brand-footer {
      bottom: 1rem;
      right: 1.2rem;
    }

    @media (max-width: 870px) {
      header {
        padding: .8rem 1rem;
        gap: .6rem;
      }

      .header-left {
        gap: .8rem;
      }

      .header-left a span {
        display: none;
      }

      /* hide text, show icons */

      .header-right {
        flex-wrap: wrap;
        gap: .5rem;
      }

      .header-right input {
        width: 130px;
      }

      .forgot-wrap {
        flex-direction: row;
        align-items: center;
        gap: .5rem;
      }
    }

    @media (max-width: 580px) {
      main {
        padding: 5rem 1.2rem 7rem;
      }

      .logo-sintec,
      .logo-priori {
        font-size: 2rem;
      }

      .headline {
        font-size: 1.3rem;
      }

      .modules-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      /* Reset all borders for 2-col */
      .module-cell {
        border-right: 1.5px solid var(--border);
        border-bottom: 1.5px solid var(--border);
      }

      .module-cell:nth-child(even) {
        border-right: none;
      }

      .module-cell.phantom {
        display: none;
      }

      .stripes-svg {
        width: 85vw;
      }

      .brand-footer {
        bottom: .6rem;
        right: .8rem;
      }

      .brand-footer .brand-phone {
        font-size: .85rem;
      }

      .header-right {
        justify-content: space-between;
      }

      .header-right input {
        width: calc(50% - 2rem);
      }
    }
  </style>
</head>

<body>

  <!-- ------------------------------------
     HEADER
------------------------------------ -->
  <header>
    <!-- Left: social links -->
    <div class="header-left">
      <a href="https://www.facebook.com/sintec.s.pr/" target="_blank">
        <i class="fa-brands fa-facebook"></i>
        <span>Sintec Sistemas</span>
      </a>
      <div class="sep"></div>
      <a href="https://www.instagram.com/sintec_sistemas?igsh=MXZpcmJxbHE5cjgwNg==" target="_blank">
        <i class="fa-brands fa-instagram"></i>
        <span>@sintec_sistemas</span>
      </a>
      <div class="sep"></div>
      <a href="mailto:Suporte@sintecsistemas.com.br">
        <i class="fa-solid fa-envelope"></i>
        <span>Suporte@sintecsistemas.com.br</span>
      </a>
      <div class="sep"></div>
      <a href="https://wa.me/554130573950" target="_blank">
        <i class="fa-brands fa-whatsapp"></i>
        <span>WhatsApp</span>
      </a>
    </div>

    <div class="header-right">
      <!-- <div class="input-wrap">
        <i class="fa-regular fa-user"></i>
        <input type="text" placeholder="Usuário" />
      </div>

      <div class="input-wrap">
        <i class="fa-solid fa-lock"></i>
        <input type="password" id="pwdInput" placeholder="Senha" />
        <button class="eye-btn" onclick="togglePwd()" title="Mostrar senha">
          <i class="fa-regular fa-eye" id="eyeIcon"></i>
        </button>
      </div> -->

      <div class="forgot-wrap">
        <div class="btn-entrar" id="btnEntrar" >
          Entrar
        </div>
      </div>
    </div>
  </header>

  <!-- ------------------------------------
     MAIN HERO
------------------------------------ -->
  <main>
    <div class="hero">

      <!-- -- LEFT -- -->
      <div class="hero-left">

        <!-- Logo -->
        <div class="logo-block">
          <img class="logo-img" src="/assets/login/logo.png" alt="logo sintec">

          <div class="logo-name">
            <span class="logo-sintec">Sintec</span><span class="logo-priori">Priori</span>
          </div>

          <div class="logo-erp-row">
            <div class="logo-erp-line"></div>
            <span class="logo-erp-text">ERP</span>
            <div class="logo-erp-line-right"></div>
          </div>
        </div>

        <!-- Headline -->
        <p class="headline">
          Gestão completa, integrada<br />
          e inteligente para o <span>seu negócio.</span>
        </p>

        <!-- Checklist -->
        <ul class="checklist" role="list">
          <li class="check-item">
            <i class="fa-solid fa-circle-check"></i>
            Mais controle
          </li>
          <li class="check-item">
            <i class="fa-solid fa-circle-check"></i>
            Mais eficiência
          </li>
          <li class="check-item">
            <i class="fa-solid fa-circle-check"></i>
            Melhores resultados
          </li>
        </ul>
      </div>

      <!-- -- RIGHT: Modules Grid -- -->
      <div class="hero-right">
        <div class="modules-grid" role="list">

          <!-- Row 1: 6 items -->
          <div class="module-cell" role="listitem">
            <i class="fa-solid fa-chart-line"></i>
            <span>Financeiro</span>
          </div>
          <div class="module-cell" role="listitem">
            <i class="fa-solid fa-cubes"></i>
            <span>Estoque</span>
          </div>
          <div class="module-cell" role="listitem">
            <i class="fa-solid fa-cart-shopping"></i>
            <span>Compras</span>
          </div>
          <div class="module-cell" role="listitem">
            <i class="fa-solid fa-chart-bar"></i>
            <span>Vendas</span>
          </div>
          <div class="module-cell" role="listitem">
            <i class="fa-solid fa-money-bill-1-wave"></i>
            <span>Força de<br />Vendas</span>
          </div>
          <div class="module-cell" role="listitem">
            <i class="fa-solid fa-headset"></i>
            <span>Atendimento<br />ao Cliente</span>
          </div>

          <!-- Row 2: 5 items + 1 phantom for balance -->
          <div class="module-cell" role="listitem">
            <i class="fa-solid fa-file-lines"></i>
            <span>Contábil</span>
          </div>
          <div class="module-cell" role="listitem">
            <i class="fa-solid fa-file-invoice-dollar"></i>
            <span>Fiscal</span>
          </div>
          <div class="module-cell" role="listitem">
            <i class="fa-solid fa-file-circle-check"></i>
            <span>Fiscal<br />Gerencial</span>
          </div>
          <div class="module-cell" role="listitem">
            <i class="fa-solid fa-chart-column"></i>
            <span>Gerencial</span>
          </div>
          <div class="module-cell" role="listitem">
            <i class="fa-solid fa-cloud"></i>
            <span>Cloud</span>
          </div>

          <div class="module-cell" role="listitem">
            <i class="fa-solid fa-mobile-screen-button"></i>
            <span>Mobile</span>
          </div>

        </div>
      </div>

    </div><!-- .hero -->
  </main>


  <svg class="stripes-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800">

    <path d="M 100 800
           C 500 790, 950 600, 1440 100
           L 1440 300
           C 1050 650, 650 790, 300 800
           Z" fill="#2C3946" />

    <path d="M 330 800
           C 680 790, 1080 660, 1440 330
           L 1440 550
           C 1120 720, 750 800, 550 800
           Z" fill="#00609C" />

  </svg>



  <!-- ------------------------------------
     BRAND FOOTER (bottom-right overlay)
------------------------------------ -->
  <div class="brand-footer">
    <div class="brand-logo">
      <!-- Mini stripe logo -->
      <img class="brand-logo" src="/assets/login/logo.png" alt="logo sintec">
      <div class="brand-logo-text">
        <span>SINTEC <i>&reg;</i></span>
        <span>SISTEMAS</span>
      </div>
    </div>
    <span class="brand-site">sintecsistemas.com.br</span>
    <span class="brand-phone">41 3057-3950</span>
  </div>

</body>

</html>`



document.getElementById('btnEntrar').addEventListener('click', (e) => {
  e.preventDefault();
  ebfFlowExecute('Template - Login - Ativar Aba Cadastro', []);
});