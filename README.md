# Documentação do Projeto: Roteamento e Navegação em React

Aqui está o que eu fiz para o projeto. O objetivo era implementar um sistema de navegação simples usando o **React Router** para criar diferentes rotas na aplicação. A ideia era ter páginas de "Sobre" e "Equipe", com navegação entre elas sem recarregar a página, como é típico de aplicações SPA (Single Page Application). Vou explicar tudo o que fiz, como segui as instruções da atividade e mostrar os códigos.

## Estrutura do Projeto

### **1. App.js (Componente Principal)**

No `App.js`, eu configurei as rotas usando o `BrowserRouter` e `Route` do `react-router-dom`. Aqui, eu defini as rotas para cada página do site (como "Início", "Sobre" e "Equipe").

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Sobre from './Sobre';
import Equipe from './Equipe';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/equipe">Equipe</Link>
        </nav>

        <Route exact path="/" render={() => <h1>Bem-vindo à página inicial!</h1>} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/equipe" component={Equipe} />
      </div>
    </Router>
  );
}

export default App;
``` 

Aqui, usei o **BrowserRouter** para envolver a aplicação e garantir que as páginas fossem carregadas sem recarregar a página inteira. Defini o **Route** para cada uma das páginas: "Início", "Sobre" e "Equipe". Quando eu clico nos links da navegação, a página correspondente é carregada.

### **2. Sobre.js (Componente da Página Sobre)**

Para a página "Sobre", eu criei o componente `Sobre.js`. Aqui, coloquei um título e um parágrafo explicando o projeto, como foi solicitado.

```javascript
import React from 'react';

function Sobre() {
  return (
    <div>
      <h2>Sobre o Projeto</h2>
      <p>Este projeto tem como objetivo implementar um sistema de navegação simples utilizando React e React Router.</p>
      <p>O projeto foi desenvolvido com foco em praticar a criação de rotas e o gerenciamento da navegação entre páginas de forma eficiente.</p>
    </div>
  );
}

export default Sobre;` 
```
Esse componente exibe informações sobre o projeto e foi desenvolvido de acordo com as especificações que pediam para explicar o que o sistema faz.

### **3. Equipe.js (Componente da Página Equipe)**

Eu também criei um componente para a página "Equipe". Nessa página, listei os integrantes do time e suas funções no projeto, como era esperado.

```javascript
import React from 'react';

function Equipe() {
  return (
    <div>
      <h2>Conheça a nossa equipe!</h2>
      <p>Somos um time de pessoas muito dedicadas. Cada um com suas habilidades específicas para fazer o projeto acontecer.</p>
      <h3>Integrantes da equipe:</h3>
      <ul>
        <li><strong>Lucas:</strong> Desenvolvedor front-end, focado na estrutura do site.</li>
        <li><strong>Debora:</strong> Designer, responsável por deixar tudo visualmente bonito.</li>
        <li><strong>Pedro Lucas:</strong> Programador back-end, garantindo que tudo funcione nos bastidores.</li>
      </ul>
    </div>
  );
}

export default Equipe;` 
```
Aqui, eu usei uma lista para organizar os membros da equipe e suas funções. Essa parte foi tranquila de implementar, pois a estrutura é simples e só precisei listar os nomes e responsabilidades.

### **4. Estilos com CSS (index.css)**

Para o estilo da aplicação, eu criei um arquivo `index.css`. Ele define um design básico e claro, com a fonte **Roboto**, como foi solicitado na atividade. Aqui estão os estilos:

```css
/* Estilo simples para a navegação */
nav {
  font-size: 20px;
  padding: 20px;
}

nav a {
  margin-right: 15px;
  text-decoration: none;
  color: #5f5f5f;
}

nav a:hover {
  color: #000;
}

/* Estilo para os títulos e textos */
h2 {
  font-size: 24px;
  color: #333;
}

p {
  font-size: 18px;
  color: #555;
}

ul {
  list-style-type: none;
}

ul li {
  font-size: 18px;
  margin: 5px 0;
}

/* Fonte padrão */
body {
  font-family: 'Roboto', sans-serif;
} 
```
Eu apliquei a fonte **Roboto** em todo o corpo da aplicação, garantindo uma aparência mais limpa. A navegação tem um estilo básico, e os títulos e textos foram ajustados para ficarem claros e fáceis de ler.

### **5. index.html (Arquivo HTML)**

No arquivo `index.html`, eu importei a fonte **Roboto** diretamente do Google Fonts e configurei a estrutura básica do HTML.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Roteamento Aula 22</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>` 
```
Aqui, eu só defini a estrutura básica do HTML e garanti que a fonte fosse carregada corretamente para a aplicação.

----------

## Conformidade com os Requisitos da Atividade

Eu segui todos os requisitos da atividade conforme descrito nos PDFs fornecidos. Abaixo, listo como cada um foi atendido:

1.  **Roteamento com React Router**: Eu configurei o **react-router-dom** para criar as rotas e fiz com que a navegação entre as páginas fosse possível sem recarregar a página. Usei o **BrowserRouter**, **Route** e **Link** corretamente para garantir que as páginas fossem renderizadas conforme as rotas definidas.
    
2.  **Estrutura de Componentes**: Dividi a aplicação em componentes como `Sobre` e `Equipe`, como era esperado. Cada componente é responsável por uma página específica, o que torna o código mais organizado e modular.
    
3.  **Estilo e Layout**: O layout segue as diretrizes de ser simples e legível. A navegação está clara, e os textos são fáceis de ler. A fonte **Roboto** foi escolhida para garantir que o design fosse moderno e agradável.
    
4.  **Implementação das Páginas**: As páginas "Sobre" e "Equipe" foram implementadas conforme o solicitado. Eu incluí informações sobre o projeto e a equipe, utilizando a estrutura de componentes do React.
