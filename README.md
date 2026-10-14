# StockSmart (S&S) - Sistema de Controle de Estoque de Cafeteria

## Descrição do Projeto

O **StockSmart (S&S)** é uma proposta de sistema destinado à organização
e ao controle do estoque de uma cafeteria. Seu objetivo é tornar a
administração dos produtos mais prática e eficiente, contribuindo para a
consulta de informações e o acompanhamento dos itens armazenados.

Entre as funcionalidades previstas estão:

-   Cadastrar produtos com nome, quantidade, preço e data de validade.
-   Atualizar a quantidade dos produtos.
-   Buscar produtos pelo nome ou pelo identificador (ID).
-   Ordenar produtos por preço ou data de validade.
-   Filtrar produtos vencidos.
-   Registrar entradas e saídas de itens.
-   Consultar informações do estoque e gerar relatórios.

O sistema prevê dois perfis principais de usuário: **estoquista**,
responsável pelas operações de gerenciamento dos itens, e **gerente**,
que pode consultar o estoque e gerar relatórios para apoiar a tomada de
decisões.

## Tecnologias Utilizadas

A documentação do projeto não especifica as tecnologias de
implementação. Para uma possível implementação, podem ser utilizadas as
seguintes ferramentas:

-   **JavaScript:** linguagem de programação.
-   **Node.js:** ambiente de execução JavaScript no servidor.
-   **Jest:** ferramenta para execução de testes automatizados.
-   **Git:** sistema de controle de versão.
-   **npm:** gerenciador de pacotes do ecossistema Node.js.

> Observação: confirme e ajuste esta lista de acordo com as tecnologias
> efetivamente utilizadas no projeto.

## Estrutura do Projeto

A estrutura abaixo é uma sugestão inicial e deve ser adaptada à
organização real dos arquivos:

``` text
StockSmart/
├── src/
│   ├── Equipamentos.js       
│   ├── Estoque.js     
│   ├── Item.js   
│   └── Produto.js
├── tests/  
│   ├── equipamentos.test.js       
│   ├── estoque.test.js     
│   ├── item.test.js   
│   └── produto.test.js                     
├── package.json      
├── package-lock.json
├── LinkGitHub.txt 
└── README.md         
```

As pastas e os arquivos apresentados são ilustrativos. Sua existência
depende da implementação adotada.

## Como Executar

Caso o projeto utilize Node.js e possua um arquivo `package.json`, siga
estes passos:

1.  Instale uma versão compatível do [Node.js](https://nodejs.org/).

2.  Abra o terminal na pasta do projeto.

3.  Instale as dependências:

    ``` bash
    npm install
    ```

4.  Execute a aplicação utilizando o script definido em `package.json`:

    ``` bash
    npm start
    ```

> O comando `npm start` somente funcionará se houver um script `start`
> configurado no arquivo `package.json`. Caso contrário, utilize o
> comando de execução definido no projeto.

## Como Executar os Testes

Se o projeto utilizar Jest e possuir um script `test` configurado no
`package.json`, execute:

``` bash
npm test
```

Esse comando deverá iniciar os testes automatizados configurados no
projeto. Se o script ou o Jest ainda não estiverem configurados, será
necessário adicioná-los antes da execução.

## Requisitos de Qualidade

A proposta estabelece os seguintes requisitos não funcionais:

-   **Desempenho:** as páginas devem carregar em até três segundos em
    condições normais de uso.
-   **Usabilidade:** a interface deve ser simples e intuitiva,
    permitindo que novos usuários compreendam suas principais funções
    sem treinamento.
-   **Disponibilidade:** o sistema deve permanecer disponível durante
    99% do tempo, exceto em períodos de manutenção programada.

## Modelagem do Sistema

A documentação do projeto contempla três representações:

-   **Diagrama de casos de uso:** apresenta as interações do estoquista
    e do gerente com as funcionalidades do sistema.
-   **Diagrama de classes:** descreve as classes `Item`, `Produto`,
    `Equipamento` e `Estoque`, seus atributos, métodos e
    relacionamentos.
-   **Fluxograma de busca por ID:** representa o processo de consulta de
    um produto pelo identificador e os resultados possíveis da busca.

## Integrantes

-   Pedro
-   José
