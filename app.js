function criaCartao(categoria, pergunta, resposta, imagem) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

       cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
                ${imagem ? `<div class="cartao__imagem"><img src="${imagem}" alt="Imagem do álbum"></div>` : ''}
            </div>
        </div>
    `;

    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }
    cartao.addEventListener('click', viraCartao);

    container.appendChild(cartao);
}
criaCartao(
    'Álbum de fotos', 
    'Minhas memórias!', 
    'Aqui está a montagem das suas fotos.',
    'https://www.google.com/search?client=tablet-android-samsung-ss&sca_esv=f51b23d37af80b04&q=pregui%C3%A7oso&udm=2&fbs=AEQNm0DpQcEzDrBY1AADpFwXtbXmjWhQ1l2xxsOd24OCdheCCql5m8R4NnvhJp1UDOol1NxqHnCCItE7xgOPu-WbmodDmcIu7NgnE4LLGuQngTFA3_g-MbaX-qJ4uDJhV9ohbx_-mZ65FwTZFgA4zVxJk6ngzr8zRoGNi1GqZEz3OXW-3A3QH9RhFQOxa_JvEsrc9fDFMj00q9pPJ6Kr_PMUcIclY4s8yCalu1aYHS1HQ-_zGQ6pqJE&sa=X&sqi=2&ved=2ahUKEwiP5NiV_o2KAxXvspUCHbk0CvoQtKgLegQIFxAB&biw=1280&bih=800&dpr=1.5#vhid=Q1T2xJU_p_KGXM&vssid=mosaic'
);
