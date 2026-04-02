# Fonsecar — PWA Orçamento Automotivo

App PWA mobile-first para preenchimento e download de orçamentos da Fonsecar Auto Mecânica.

## Funcionalidades

- Layout fixo do orçamento original como fundo
- Campos editáveis sobrepostos ao design
- Dados do veículo: placa, modelo, ano, cor, KM, chassi, combustível
- 20 linhas de itens com cálculo automático de total
- Botão de download via impressão para PDF (A4)
- PWA: instalável no celular via navegador
- Service Worker para uso offline

## Como usar

1. Abra `orcamento-pwa.html` em um servidor HTTPS (ex: Netlify, Cloudflare Pages, GitHub Pages)
2. Preencha os campos do painel superior
3. Os dados aparecem automaticamente sobre o layout do orçamento
4. Clique em **Baixar PDF** para salvar

## Deploy rápido no GitHub Pages

1. Faça upload da pasta `assets/` com a imagem `modelo.jpg`
2. Vá em **Settings → Pages → Source: main branch**
3. Acesse `https://maralmhz.github.io/fonsecar/orcamento-pwa.html`

## Estrutura

```
fonsecar/
├── orcamento-pwa.html
├── manifest.webmanifest
├── sw.js
└── assets/
    ├── modelo.jpg
    └── icon.svg
```