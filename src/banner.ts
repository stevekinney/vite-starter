export const addBanner = (text: string) => {
  const container = document.querySelector('#content') as HTMLDivElement;
  container.textContent = text;
};
