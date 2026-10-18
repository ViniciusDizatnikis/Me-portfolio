

// Script para alterar tema claro/escuro
const buttonTheme = document.getElementById('buttonTheme');
const body = document.body;
const monitor = document.getElementById('screen-monitor');


// Função responsável por trocar o fundo do monitor
function toggleBackgroundMonitor() {

  const isDark = body.classList.contains('dark');

  if (isDark) {
    monitor.style.backgroundImage = `url("./assets/img/background/night.webp")`;
  } else {
    monitor.style.backgroundImage = `url("./assets/img/background/day.webp")`;
  }
}


// Preferência do sistema (claro/escuro)
const systemDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = localStorage.getItem('theme');

const startDark = savedTheme ? savedTheme === 'dark' : systemDarkQuery.matches;

body.classList.toggle('dark', startDark);


toggleBackgroundMonitor();


buttonTheme.addEventListener('click', () => {

  body.classList.toggle('dark');

  toggleBackgroundMonitor();

  const isDark = body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});






// Comportamento do Menu Mobile
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});


mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ao clicar fora ele fecha o menu
document.addEventListener('click', event => {
  if (event.target !== hamburger && event.target !== mobileMenu) {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  }
})



// comportamento da navegação
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');


// Cria um observador para detectar quando uma seção aparece na tela
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {

        navLinks.forEach(function (link) {
          link.classList.remove('active');
        });

        // Procura o link que possui o href igual ao ID da seção visível
        const activeLink = document.querySelector(
          '.nav-links a[href="#' + entry.target.id + '"]'
        );

        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  },

  {
    threshold: 0.5
  }
);

sections.forEach(function (section) {
  observer.observe(section);
});








// Seletor Profissional / Acadêmica da seção Formação
const tabsFormacao = document.querySelector('.formacao-tabs');

if (tabsFormacao) {
  const tabButtons = Array.from(tabsFormacao.querySelectorAll('.tab-btn'));

  function ativarTab(button) {
    tabButtons.forEach(btn => {
      const ativo = btn === button;
      const painel = document.getElementById(btn.getAttribute('aria-controls'));

      btn.classList.toggle('active', ativo);
      btn.setAttribute('aria-selected', ativo);
      btn.tabIndex = ativo ? 0 : -1;
      painel.classList.toggle('active', ativo);
      painel.hidden = !ativo;
    });

    tabsFormacao.classList.toggle('academica', button.id === 'tab-academica');
  }

  tabButtons.forEach((btn, i) => {
    btn.addEventListener('click', () => ativarTab(btn));

    // Troca com as setas do teclado
    btn.addEventListener('keydown', e => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const passo = e.key === 'ArrowRight' ? 1 : -1;
      const proximo = tabButtons[(i + passo + tabButtons.length) % tabButtons.length];
      ativarTab(proximo);
      proximo.focus();
    });
  });
}



// Comportamento do formulário

const form = document.getElementById('form-contato');
const modal = document.getElementById('modal');
const btnClose = document.getElementById('btn-modal-close');

// Auxiliares

function validarEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function setErro(inputId, erroId, mostrar) {
  var input = document.getElementById(inputId);
  var msg = document.getElementById(erroId);

  if (mostrar) {
    input.classList.add('error');
    msg.classList.add('show');
  } else {
    input.classList.remove('error');
    msg.classList.remove('show');
  }
}

// Evento de submissão do formulário

form.addEventListener('submit', async function (e) {

  e.preventDefault();

  // Coleta os valores dos campos
  var nome = document.getElementById('nome').value.trim();
  var email = document.getElementById('email').value.trim();
  var mensagem = document.getElementById('mensagem').value.trim();

  var valido = true;

  // Valida nome
  if (nome === '') {
    setErro('nome', 'erro-nome', true);
    valido = false;
  } else {
    setErro('nome', 'erro-nome', false);
  }

  // Valida e-mail
  if (email === '' || !validarEmail(email)) {
    setErro('email', 'erro-email', true);
    valido = false;
  } else {
    setErro('email', 'erro-email', false);
  }

  // Valida mensagem
  if (mensagem === '') {
    setErro('mensagem', 'erro-mensagem', true);
    valido = false;
  } else {
    setErro('mensagem', 'erro-mensagem', false);
  }

  // Se houver algum erro, não envia
  if (!valido) {
    return;
  }

  // Desabilita o botão enquanto envia
  const btnSubmit = form.querySelector('.btn-submit');
  btnSubmit.disabled = true;
  btnSubmit.textContent = 'Enviando...';

  try {

    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Erro ao enviar formulário');
    }

    // Limpa os campos
    form.reset();

    // Mostra o modal
    modal.classList.add('open');

  } catch (error) {

    console.error('Erro ao enviar formulário:', error);

    alert('Não foi possível enviar a mensagem. Tente novamente.');

  } finally {

    // Libera o botão novamente
    btnSubmit.disabled = false;
    btnSubmit.textContent = 'Enviar mensagem';
  }
});

// Fecha modal ao clicar no botão

btnClose.addEventListener('click', e => {
  modal.classList.remove('open');
});

// Fecha modal ao clicar fora da caixa

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('open');
  }
});

// Fecha modal com tecla Escape

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    modal.classList.remove('open');
  }
});