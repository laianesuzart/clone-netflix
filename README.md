# Assessment - Estilizando Página Inicial de uma Plataforma de Streaming

Bom, nós já estamos trabalhando com o projeto da plataforma de streaming há um tempo agora. Até o momento você desenvolveu as duas primeiras telas de acesso à plataforma, a tela de login e a tela de escolha de usuário(aquela "Quem está assistindo"). E nada mais justo que finalizar esse projeto, desenvolvendo agora a página inicial da plataforma.

Para essa entega, voce vai receber um repositório, contendo a estruturação inicial mínima de um projeto. Você vai fazer o fork desse repositório e a partir disso você vai trabalhar com a estilização(CSS) da página.

Arquivos base já são fornecidos, juntamente com algumas imagens para você poder se preocupar apenas com o código. Também foram disponibilizadas todas as especificações necessárias: cores, fontes, tamanhos, etc.

## Especificações

### Projeto

Recomendamos que você analise toda a estrutura HTML proposta para esse projeto, é importante entender como tudo foi estruturado antes de colocar a mão na massa. 

Não tenha preça para conhecer o projeto antes de partir para ação!

### Estrutura de pastas

- README.md
- index.html
- /assets
    - /css
        - style.css
    - /img
        - layout.png
        - logo.png
        - user.png
        - /movies
            - amigas.jpg
            - gg.jpg
            - good.webp
            - papel.jpg
            - papel2.webp
            - ted.webp
            - tedlogo.png
    - /js
        - script.js

### Geral

- Fonte: `'Helvetica Neue',Helvetica,Arial,sans-serif;`
- Background body: `#141414`

### Header

- A logo possui `92px` de largura
- O ícone do usuário possui `32px` de largura
- Itens menu: `#e5e5e5`
- Item ativo menu: `#ffffff`
- Item hover menu: `#b3b3b3`
- Fonte: `14px`
- Background: `linear-gradient(to bottom, rgba(0,0,0,.7) 10%, rgba(0,0,0,0))`
<!-- - Background após scroll: `#141414`
    - _*Obs:_ a header é fixa no topo -->

### Destaque

- Fonte buttons: `22px`

#### Descrição

- Cor descrição: `#ffffff`
- Fonte descrição: `26px`
- Sombra do texto: `2px 2px 4px rgb(0 0 0 / 45%)`;
    - _Um pouco mais sobre sombras de texto_: [text-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
    - _Ferramenta:_ [Text Shadow CSS Generator](https://cssgenerator.org/text-shadow-css-generator.html)

#### Button "Mais informações"

- Background: `rgba(109,109,110,0.7)`
- Background hover: `rgba(109,109,110,0.4)`
- Cor do texto: `#ffffff`

#### Button "Assistir"

- Background: `#ffffff`
- Background hover: `rgba(255,255,255,0.75)`
- Cor do texto: `#000000`

### Catálogo

- Cor do título: `#e5e5e5`
- Fonte títutlo: `26px`
- Background seção 'Continuar assistindo': `linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%)`
- Cada item(programa) do catálogo possui `287px` de largura

### Footer

- Borda: `1px solid rgb(128 128 128 / 26%)`
- Cor conteúdos: `gray`
- Ícones redes sociais: `20px` de largura
- Fonte itens do menu: `13px`
- Fonte copyright: `11px`

## Itens obrigatórios

- O site precisa ser **mobile first**
- Precisa estar **publicado no gitlab pages**

## Repositório

[Link para fazer o fork do projeto](https://gitlab.com/kenzie-academy-brasil/se/fe/sprint-3-css-week/assessment-styling-streaming-platform-home-page)

#### Você vai utilizar o seguinte layout como base:

A imagem também está dentro do repositório também, então você pode abrir na sua máquina, caso ache melhor.

![Netflix Template](./assets/img/layout.png)

## Envio

Faça o push do código para o seu repositório GitLab e implemente-o via GitLab pages. No Canvas, por favor, envie a url de seu Gitlab Pages (ex: https://nomedeusuario.gitlab.io/streaming-platform-layout/) e, no GitLab, adicione o grupo ka-br-<sua-turma>-correcoes como membro do seu projeto com a permissão "Reporter".