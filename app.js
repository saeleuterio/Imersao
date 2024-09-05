function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Exibe o elemento HTML selecionado no console
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
    // Constrói o HTML para cada item do resultado da pesquisa
        resultados += `
        <div class="item-resultado">
            <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  
    // Atribui o HTML gerado para o conteúdo da seção
    section.innerHTML = resultados;
  }