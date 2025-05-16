document.addEventListener('DOMContentLoaded', () => {

    //* Referências dos elementos HTML *//
    const textArea = document.getElementById('text-area');
    const charCount = document.getElementById('char-count');
    const wordCount = document.getElementById('word-count');
    const yourNameSpan = document.getElementById('your-name');
    
    //* Função Nome *//
    function addYourName() {
        yourNameSpan.textContent = "Eduardo Fernandes";
        console.log("Você está aqui!!!");
    }
    addYourName();
    
    //* Função que conta chars e palavras *//
    function countTextStats() {
        const text = textArea.value;
        const characters = text.length;
        let words = 0;
        if (text.trim().length > 0) {
            const wordArray = text.trim().split(/\s+/);
            words = wordArray.filter(word => word.length > 0).length;
        }
        
        //* Atualizar na UI *//
        charCount.textContent = characters;
        wordCount.textContent = words;
    }

    textArea.addEventListener('input', () => {
        countTextStats();
        console.log("Você Digitou algo!!!");
    });
    
    countTextStats();
});


