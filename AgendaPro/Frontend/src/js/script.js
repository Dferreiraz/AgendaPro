document.addEventListener("DOMContentLoaded", () => {
  // Configuração do FAQ Accordion
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.closest(".faq-item");
      if (faqItem) {
        faqItem.classList.toggle("active");
      }
    });
  });
});

/**
 * Alternar abas da página de Configurações
 * @param {string} tabId - O ID do conteúdo da aba (ex: 'company', 'hours')
 * @param {Event} event - O evento de clique do botão
 */
function switchTab(tabId, event) {
  // 1. Ocultar todos os conteúdos das abas
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });

  // 2. Desativar estilo de todos os botões das abas
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // 3. Ativar a aba correspondente ao ID informado
  const selectedTab = document.getElementById("tab-" + tabId);
  if (selectedTab) {
    selectedTab.classList.add("active");
  }

  // 4. Aplicar classe 'active' no botão clicado
  if (event && event.currentTarget) {
    event.currentTarget.classList.add("active");
  }
}

// Lógica para o botão de Logout
const logoutButtons = document.querySelectorAll(".btn-logout");

logoutButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Apenas limpa a sessão; o HTML cuida do redirecionamento pelo href
    localStorage.clear();
    sessionStorage.clear();
  });
});