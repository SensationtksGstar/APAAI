# APAAI Website

Website institucional bilingue (PT/EN) para a APAAI - Associacao Portuguesa de Aikido Adaptado Inclusivo.

Site publico: https://sensationtksgstar.github.io/APAAI/pt/

## Stack

- Next.js 16 e Node.js 22+
- React 19
- Tailwind CSS 4

## Desenvolvimento local

```bash
npm ci
npm run dev
```

## Build de producao

```bash
npm run build
npm run start
```

## Estrutura

- `app/` - rotas App Router e SEO
- `components/` - homepage, navegacao e UI base
- `data/locales/` - copy bilingue PT/EN
- `public/` - ativos estaticos, incluindo o logotipo

## GitHub Pages e verificacao

```bash
npm run build:pages
npm run check:export
npm run test:browser
npm run preview:pages
```

A pre-visualizacao fica em http://127.0.0.1:4173/APAAI/pt/. O workflow publica automaticamente os commits de `main`. Nao abrir o HTML pelo sistema de ficheiros: as rotas e recursos precisam do servidor HTTP e do prefixo `/APAAI`.

O verificador confirma destinos internos, imagens, ancoras, ausencia de fotografias duplicadas na homepage, contactos atualizados e as paginas em ambas as linguas.

Os testes de navegador usam o Edge no Windows e Chromium nos restantes sistemas (`npx playwright install chromium`). Validam navegacao, imagens, layouts, rodape, assuntos do formulario e paginas PT/EN sem enviar mensagens. Detetam erros de JavaScript e respostas HTTP em falta. Correm tambem no workflow antes de publicar.

A navegacao usa links HTML diretos, compativeis com alojamento estatico, sem depender de pedidos de navegacao RSC. Os elementos interativos, como a escolha do assunto do contacto, continuam ativos na pagina.

## Atualizar os conteudos

- `data/locales/pt.ts` e `en.ts`: textos da pagina principal e galeria.
- `data/association.ts`: orgaos sociais, equipa, parceiros e documentos publicos. Adicionar retratos apenas depois de confirmar a identidade de cada pessoa.
- `data/news.ts`: noticias reais com data ISO `AAAA-MM-DD`, categoria, fotografia, titulo, resumo e texto PT/EN. A homepage mostra as tres mais recentes; o arquivo mostra todas.
- `lib/contact.ts`: assuntos dos pedidos e links que pre-selecionam o formulario.
- `public/media/project/` e `public/media/partners/`: fotografias e logotipos com nomes descritivos.

## Contactos e privacidade

Email institucional: `appaigeral@gmail.com`. Nesta publicacao, por escolha do responsavel, o formulario abre o programa de email com assunto e mensagem preenchidos. Nao simula um envio direto, nao guarda dados no site e nao apresenta confirmacao de entrega. Nome, email, assunto e mensagem sao obrigatorios; entidade e telefone sao opcionais.

Nao ha analytics, formularios externos, cookies de marketing nem incorporacoes do Facebook. Links sociais abrem os servicos externos apenas quando escolhidos pelo visitante. Os cabecalhos definidos no Next.js aplicam-se ao alojamento Node, nao ao GitHub Pages.

## Materiais ainda a fornecer pelo cliente

- Estatutos em PDF: ate receber o ficheiro, o botao permite solicitar o documento por contacto. Nao expor documentos internos.
- Retratos identificados da equipa.
- Fotografias adicionais para completar a galeria de 6 a 9 imagens e imagens identificadas de cada territorio. As sete fotografias atuais aparecem uma unica vez na pagina principal.
- Noticias e eventos com datas e textos aprovados. Enquanto nao forem fornecidos, a secao remete para as novidades oficiais no Facebook, sem eventos inventados.
- Logotipo da Junta de Freguesia da Baixa da Banheira. O nome ja consta na rede de parceiros. O simbolo da Rarissimas foi identificado pelo responsavel e incluido.

`references/` e apenas uma pasta de trabalho e nao e publicada no site. A composicao TMA4ALL recebida inclui a marca de cofinanciamento europeu; nao e usada publicamente porque o documento do cliente indica uma candidatura ainda em desenvolvimento/a aguardar decisao.
