# Clona Cartão

Projeto front-end criado pra estudar e fixar conteúdo do curso de JavaScript e Node que estou fazendo, focado em manipulação de formulário e DOM. É uma simulação de site de phishing, feita com o objetivo de conscientizar sobre esse tipo de golpe — não guarda nem envia nenhum dado preenchido.

## Sobre o projeto

A tela mostra um cartão de crédito fake que vai se atualizando em tempo real conforme você preenche o formulário ao lado (nome, número, validade e CVV). Ao clicar em "Verificar", em vez de qualquer verificação de verdade, aparece uma sequência de alertas explicando que aquilo era uma simulação de phishing, o que é esse golpe, como ele costuma se disfarçar de sites conhecidos e como se proteger.

## Funcionalidades

- Cartão visual que reflete em tempo real o que é digitado no formulário (nome, número, validade e CVV).
- Formatação automática dos campos: nome só aceita letras e espaço (e vira maiúsculo), número do cartão é mascarado em blocos de 4 dígitos, validade formata sozinha como MM/AA, e CVV aceita só até 3 dígitos.
- Validação simples pra impedir envio com campo vazio.
- Sequência de alertas (via SweetAlert2) explicando o golpe de phishing, com imagens de exemplo de sites suspeitos e link pro repositório do projeto no GitHub.
- Áudio de alerta tocado no momento do "envio" dos dados.
- Favicon customizado e layout responsivo pra telas pequenas.

## Habilidades praticadas

- Manipulação do DOM e formulários (`addEventListener("input")`, `preventDefault` no submit).
- Uso de expressões regulares pra mascarar/formatar campos de texto conforme o usuário digita.
- Integração com biblioteca externa (SweetAlert2) via CDN.
- Manipulação de áudio com a API `Audio`.
- CSS com Flexbox e media queries pra responsividade.
- Lógica encadeada de várias telas/alertas (uma chamando a próxima via `.then()`).

## Tecnologias

- HTML5
- CSS3
- JavaScript (vanilla)
- SweetAlert2 (via CDN, só pra estilizar os alertas)

## Sobre o uso de IA

O README foi escrito com ajuda de IA. O código do projeto foi todo escrito por mim, sem IA — a ideia aqui era treinar os conceitos na unha mesmo.

## Como executar

Abre o `index.html` no navegador ou acesse o [`ClonaCartao2000`](https://leonardosigolo.github.io/clonaCartao2000/). Sem dependência de build, só precisa de internet pra carregar o SweetAlert2 via CDN.

## Aviso

Este projeto é só pra fins educativos/de conscientização sobre golpes de phishing. Nenhum dado digitado é salvo, enviado ou coletado em lugar nenhum.
