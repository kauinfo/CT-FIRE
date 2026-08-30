// ==========================================================
// ABAS DE UNIDADE (Piedade / Pina)
// A mesma lógica serve para o quadro de horários e para o mapa,
// por isso ela roda para CADA .section da página, não só uma vez.
// ==========================================================

const sections = document.querySelectorAll('.section');

sections.forEach(function (section) {
  const tabs = section.querySelectorAll('.unit-tab');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      // tira o "active" de todas as abas dessa seção...
      tabs.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });

      // ...e coloca só na aba clicada
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // esconde todos os painéis da seção
      const panels = section.querySelectorAll('.unit-panel');
      panels.forEach(function (panel) {
        panel.classList.remove('active');
      });

      // mostra só o painel que a aba aponta (data-target)
      const targetId = tab.dataset.target;
      const targetPanel = section.querySelector('#' + targetId);
      targetPanel.classList.add('active');
    });
  });
});

// ==========================================================
// BOTÃO "QUADRO DE HORÁRIOS" (abre/fecha)
// ==========================================================

const scheduleToggle = document.getElementById('scheduleToggle');
const scheduleContent = document.getElementById('scheduleContent');

scheduleToggle.addEventListener('click', function () {
  const isOpen = scheduleToggle.getAttribute('aria-expanded') === 'true';

  // inverte o estado: se tava aberto, fecha; se tava fechado, abre
  scheduleToggle.setAttribute('aria-expanded', String(!isOpen));
  scheduleContent.hidden = isOpen;
});