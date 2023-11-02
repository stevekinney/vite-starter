const content = document.querySelector('#content');

export default function logos() {
  const modules = import.meta.glob('./logos/**/*.svg');

  for (const m of Object.values(modules)) {
    m().then((svg) => {
      const img = document.createElement('img');
      img.width = 100;

      img.src = svg.default;
      content.appendChild(img);
    });
  }
}
