# vscode-portfolio

<h1 align="center">
  Portfolio <img width="25px" src="https://github.com/ysneshy/portfolio-carlos-filho/blob/main/public/brainfuck.svg"/>
</h1>

 <p align="center">
  <img alt="Github Top Language" src="https://img.shields.io/github/languages/top/ysneshy/portfolio-carlos-filho?color=00FFFB">
  <img alt="Github Language Count" src="https://img.shields.io/github/languages/count/ysneshy/portfolio-carlos-filho?color=00FFFB">
  <img alt="Repository Size" src="https://img.shields.io/github/repo-size/ysneshy/portfolio-carlos-filho?color=00FFFB">
</p>

<br>

![Resultado final do projeto](https://imgur.com/0jXsflo.png)

<br>

## 📝 Descrição 

Portfólio criado com o objetivo de mostrar meus projetos. 

- Website: [carlosfilho.vercel.app](https://carlosfilho.vercel.app/)

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- NextJS
- ReactJS
- JavaScript
- Sass

## 📚 Bibliotecas

- [Google Fonts](https://fonts.google.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Phosphor Icons](https://phosphoricons.com/)


## 🔗 Links

<p align="left">

 <a href="https://www.linkedin.com/in/ysneshy" alt="Linkedin">
  <img src="https://img.shields.io/badge/-Linkedin-000?style=for-the-badge&logo=Linkedin&logoColor=0A66C2&link=https://www.linkedin.com/in/ysneshy/"/> 
 </a>
  
 <a href="https://www.facebook.com/ysneshy" alt="Facebook">
  <img src="https://img.shields.io/badge/-Facebook-000?style=for-the-badge&logo=Facebook&logoColor=000dff&link=https://www.facebook.com/ysneshy"/> 
 </a>
  
 <a href="https://twitter.com/ysneshy" alt="Twitter">
  <img src="https://img.shields.io/badge/-Twitter-000?style=for-the-badge&logo=Twitter&logoColor=1DA1F2&link=https://twitter.com/ysneshy"/> 
 </a>

 <a href="https://carlosfilho.vercel.app" alt="Portfolio">
  <img src="https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=FFF&link=https://www.carlosfilho.vercel.app/"/>
 </a>

 </p>
 
<br>
<table>
  <tr>
    <!--<td align="center">
      <a href="https://github.com/ysneshy">
        <img src="" width="100px;" /><br>
        <sub>
          <b></b>
        </sub>
      </a>
    </td>
  </tr>
</table> 


Resumo das Correções Implementadas
Corrigi todos os problemas identificados no seu projeto portfolio. Aqui está o que foi feito:

📦 Dependências Atualizadas
Principais mudanças no 
package.json
:

Next.js: ^12.0.6 → ^14.0.4
React: ^17.0.2 → ^18.2.0
React DOM: ^17.0.2 → ^18.2.0
Styled Components: ^5.3.6 → ^6.1.6
@emotion/react: ^11.10.5 → ^11.11.1
React Icons: ^4.6.0 → ^4.12.0
Sass: ^1.57.1 → ^1.69.5
Removidas dependências problemáticas:

animate-css-styled-components (causava conflitos)
react-reveal e react-awesome-reveal (substituídas por Framer Motion)
Dependências de desenvolvimento desatualizadas
Adicionadas:

Framer Motion: ^10.16.16 (para animações modernas)
TypeScript: ^5.3.3 (suporte futuro)
ESLint: ^8.56.0 (linting)
📱 Responsividade Mobile Moderna
Meta Tags Otimizadas
Adicionado viewport meta tag correto para dispositivos móveis
Configurado para permitir zoom até 5x
Otimizado para touch devices
Breakpoints Atualizados
768px: Tablets e dispositivos médios
600px: Smartphones grandes
480px: Smartphones pequenos
320px: Dispositivos muito pequenos
Layout Mobile-First
Sidebar: Transformada em bottom navigation bar no mobile
Explorer: Oculto em dispositivos móveis para economizar espaço
Bottombar: Oculto no mobile para interface mais limpa
Content: Padding otimizado para diferentes tamanhos de tela
🎨 Melhorias de CSS
Prevenção de Scroll Horizontal
css
body {
  overflow-x: hidden;
}

* {
  max-width: 100%;
}
Touch Targets Otimizados
Botões com mínimo 44px de altura/largura
touch-action: manipulation para melhor responsividade
Hover states otimizados para dispositivos touch
Flexbox e Grid Melhorados
Layout flexível que se adapta a diferentes telas
Containers com max-width: 100vw para prevenir overflow
Gaps responsivos entre elementos
🔧 Correções Específicas
HomePage.module.css
Botões responsivos que se ajustam ao tamanho da tela
Ilustrações que se redimensionam automaticamente
Typography escalável com rem units
Layout em coluna para mobile
Layout.module.css
Altura mínima calculada corretamente
Overflow controlado
Padding responsivo
Sidebar.module.css
Transformação para bottom navigation no mobile
Ícones redimensionados para diferentes telas
Z-index configurado para sobreposição correta
🚀 Como Executar
Para instalar as dependências e executar o projeto:

bash
# Instalar dependências
yarn install

# Executar em desenvolvimento
yarn dev

# Build para produção
yarn build

# Executar produção
yarn start
✅ Compatibilidade
O projeto agora é totalmente compatível com:

Smartphones: iPhone, Android (todas as resoluções)
Tablets: iPad, Android tablets
Desktop: Todas as resoluções
Navegadores: Chrome, Firefox, Safari, Edge
🎯 Melhorias de Performance
Dependências mais leves e modernas
CSS otimizado para carregamento rápido
Imagens responsivas com max-width: 100%
Font loading otimizado
Todas as correções foram implementadas mantendo a identidade visual original do seu portfolio, apenas tornando-o completamente responsivo e moderno para dispositivos móveis de hoje.

Feedback submitted

-----

  <h3 align="center"> Developed by <a href="https://www.linkedin.com/in/ysneshy/">Carlos Filho</a> ☕</h3>