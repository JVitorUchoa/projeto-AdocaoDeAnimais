document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const menuItemsWithSubmenu = document.querySelectorAll('.menu-agrupado'); // Seleciona itens com submenu

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            // Altera o atributo aria-expanded para acessibilidade
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);

            console.log('teste naruto ');
            console.log(mainNav);
            console.log(isExpanded);
            console.log(menuToggle);
            
        });

        // Fechar o menu quando um link é clicado (útil em mobile)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                // Verifique se o link não é um item de categoria (que abre submenu)
                if (!this.closest('.menu-agrupado')) {
                    if (window.innerWidth <= 768 && mainNav.classList.contains('active')) {
                        mainNav.classList.remove('active');
                        menuToggle.setAttribute('aria-expanded', 'false');
                    }
                }
            });
        });

        // Fechar o menu se clicar fora dele em mobile
        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 768 && mainNav.classList.contains('active')) {
                const isClickInsideMenu = mainNav.contains(event.target) || menuToggle.contains(event.target);
                if (!isClickInsideMenu) {
                    mainNav.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }

    // Lógica para abrir/fechar submenu em mobile (click no item pai)
    // Em desktop, o hover já cuida disso.
    menuItemsWithSubmenu.forEach(item => {
        item.addEventListener('click', function(event) {
            // Se estiver em mobile e o menu principal estiver ativo
            if (window.innerWidth <= 768 && mainNav.classList.contains('active')) {
                const submenu = this.querySelector('#submenu');
                if (submenu) {
                    event.preventDefault(); // Impede a navegação do link pai
                    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                }
            }
        });
    });

    // Função para ajustar o menu ao redimensionar a janela
    function handleResize() {
        if (window.innerWidth > 768) {
            // Em desktop, garante que o menu esteja visível
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
            mainNav.style.display = ''; // Remove o display inline definido pelo JS
            menuToggle.setAttribute('aria-expanded', 'false');
            // Garante que submenus estejam ocultos por padrão (hover os ativará)
            document.querySelectorAll('#submenu').forEach(sub => {
                sub.style.display = 'none';
            });
        } else {
            // Em mobile, garante que o menu principal esteja oculto por padrão
            if (!mainNav.classList.contains('active')) {
                mainNav.style.display = 'none';
            }
        }
    }

    // Chama a função no carregamento e ao redimensionar
    handleResize();
    window.addEventListener('resize', handleResize);
});