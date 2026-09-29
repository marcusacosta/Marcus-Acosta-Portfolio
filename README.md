# Marcus Acosta — Portfolio

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3100. Changes update in the same browser tab.

## Project structure

- `app/`: homepage route, metadata, global styles, and analytics.
- `components/DeveloperPortfolio.tsx`: header, about, projects, tools, and contact.
- `components/WritingLayout.js`: shared article layout and metadata.
- `pages/writing/`: three project write-ups served through the Pages Router.
- `pages/_app.js`: writing styles and article analytics.
- `styles/writing.scss` and `styles/blog.scss`: article styling.
- `public/`: portrait, résumé, research proposal, favicon, and tool icons.

Tool logo attribution: `public/img/tools/ATTRIBUTION.md`.

## Checks and production

```bash
npm run lint
npm run build
npm start
```

The production server defaults to port 3000. Use `npm start -- --port 3100` to select a different port. Stop the development server before a production build; both use `.next/`.
