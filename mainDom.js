        // Função para monitorar o scroll
        window.addEventListener('scroll', () => {
        // Altura total do documento
        const scrollHeight = document.documentElement.scrollHeight;
        
        // Altura do viewport (área visível)
        const clientHeight = document.documentElement.clientHeight;
        
        // Posição atual do scroll
        const scrollAtual = window.scrollY || window.pageYOffset;
        
        // Valor total do scroll possível
        const scrollTotal = scrollHeight - clientHeight;
        
        const porcentagem = (scrollAtual / scrollTotal) * 100;

        console.log(`Scroll total: ${scrollTotal}px`);
        console.log(`Posição atual: ${scrollAtual}px`);
        console.log(`Progresso: ${porcentagem.toFixed(2)}%`);

            let mainHeader = document.getElementById('mainHeader0');
            mainHeader.style.marginTop = (-scrollAtual/4)-21 + "px";
        });