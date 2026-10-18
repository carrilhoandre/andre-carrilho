# Portfólio · André Carrilho

Site pessoal em Next.js 15 + Tailwind 4, exportado como site estático.

## Editar conteúdo

Todo o texto fica em `src/content.ts`. Itens marcados com `REVISAR` precisam de conferência.

- Foto: coloque em `public/foto.jpg` e preencha `profile.photo = "/foto.jpg"`.
- Currículo: coloque o PDF em `public/` e preencha `profile.cv`.
- LinkedIn/GitHub: preencha `profile.linkedin` e `profile.github`.

## Rodar

```bash
npm install
npm run dev
```

## Publicar na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. Em vercel.com, "Add New Project" e importe o repositório (framework: Next.js).
3. O deploy gera uma URL `*.vercel.app`; dá para ligar um domínio próprio depois.

`npm run build` gera a pasta `out/`, que também pode ser publicada em GitHub Pages ou Netlify.
