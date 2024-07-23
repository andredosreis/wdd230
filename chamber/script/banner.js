document.addEventListener('DOMContentLoaded', function() {
    const banner = document.querySelector('#banner');
    const bannerClose = document.querySelector('#close-banner');

    // Mostrar o banner apenas nas segundas, terças e quartas-feiras
    var dayOfWeek = new Date().getDay();
    if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3) {
        banner.style.display = "flex"; // Usar flex para alinhar o conteúdo
    } else {
        banner.style.display = "none";
    }

    // Adicionar funcionalidade ao botão de fechar
    bannerClose.addEventListener('click', function() {
        banner.style.display = "none";
    });
});