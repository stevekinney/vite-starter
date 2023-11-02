import { defineConfig } from 'vite';

import Markdown from 'markdown-it';
import { readFile } from 'fs/promises';

const md = new Markdown();

const renderMarkdown = async (file) => {
  const content = await readFile(file, 'utf-8');
  const rendered = md.render(content);

  return rendered;
};

function markdownToHtml() {
  return {
    name: 'markdown-to-html',
    resolvedId(id) {
      if (id.endsWith('.md')) {
        return id;
      }
    },
    async load(id) {
      if (id.endsWith('.md')) {
        const rendered = await renderMarkdown(id);
        return `export default ${JSON.stringify(rendered)}`;
      }
    },
  };
}

export default defineConfig({
  plugins: [markdownToHtml()],
});
