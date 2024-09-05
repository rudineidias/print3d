
function criarTabela() {
    const tabela = document.createElement('table');
    tabela.id = 'minhaTabela';
  
    // Criar a linha de cabeçalho
    const cabecalho = tabela.insertRow();
    const propriedades = Object.keys(dados[0]);
    propriedades.forEach(propriedade => {
      const th = document.createElement('th');
      th.textContent = propriedade;
      cabecalho.appendChild(th);
    });
  
    // Criar as linhas de dados
    dados.forEach(item => {
      const linha = tabela.insertRow();
      propriedades.forEach(propriedade => {
        const celula = linha.insertCell();
        celula.textContent = item[propriedade];
      });
    });
  
    // Adicionar a tabela ao corpo do documento
    document.body.appendChild(tabela);
  }

  