<h1> Lista de músicas favoritas</h1>

**Descrição**: 

Este projeto é uma aplicação React simples que permite aos usuários adicionar e deletar suas músicas favoritas. A aplicação consiste em um campo de entrada de texto, um botão "Adicionar Música" e uma lista de músicas adicionadas. Cada música na lista tem um botão "Deletar" que remove a música da lista.

**Instalação**:

Clone o repositório usando `git clone <url-do-repositório>``

Instale as dependências usando `npm install`

Inicie o servidor de desenvolvimento usando `npm start`

Abra a aplicação em seu navegador web em http://localhost:3000

**Uso**:

Digite o nome da sua música favorita no campo de entrada de texto
Clique no botão "Adicionar Música" para adicionar a música à lista
Clique no botão "Deletar" ao lado de uma música para removê-la da lista

<h2>Componentes:</h2>

<h3>App.js</h3>

Este é o componente principal da aplicação que renderiza toda a aplicação. Ele contém os seguintes componentes:

Um campo de entrada de texto para digitar o nome da música
Um botão "Adicionar Música" para adicionar a música à lista
Um componente ListaMusicas que exibe a lista de músicas adicionadas
ListaMusicas.js
Este componente renderiza uma lista de músicas. Cada item da lista contém:

Um elemento span exibindo o nome da música
Um botão "Deletar" que remove a música da lista quando clicado
useState Hook
O hook useState é usado para armazenar a lista de músicas no estado da aplicação. O estado é inicializado como um array vazio e atualizado quando uma nova música é adicionada ou uma música existente é deletada.

**onDelete Função**
Esta função é chamada quando o botão "Deletar" é clicado ao lado de uma música. Ela filtra a lista de músicas para remover a música com o índice correspondente.

**adicionar Função**
Esta função é chamada quando o botão "Adicionar Música" é clicado. Ela adiciona uma nova música à lista com o valor de entrada e limpa o campo de entrada.