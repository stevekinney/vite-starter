import type { Character } from './generate-character';

const createCharacterElement = (character: Character): HTMLElement => {
  const characterDiv = document.createElement('div');
  characterDiv.className = 'character-card';

  const nameElement = document.createElement('h2');
  nameElement.textContent = character.name;
  characterDiv.appendChild(nameElement);

  const classElement = document.createElement('p');
  classElement.textContent = `Class: ${character.characterClass}`;
  characterDiv.appendChild(classElement);

  const statsList = document.createElement('ul');

  const stats: (keyof Character)[] = [
    'strength',
    'dexterity',
    'wisdom',
    'intelligence',
    'constitution',
    'hitPoints',
    'mana',
  ];

  for (const stat of stats) {
    const statElement = document.createElement('li');
    statElement.textContent = `${stat}: ${character[stat]}`;
    statsList.appendChild(statElement);
  }

  characterDiv.appendChild(statsList);

  const funFactElement = document.createElement('p');
  funFactElement.textContent = `Fun Fact: ${character.funFact}`;
  characterDiv.appendChild(funFactElement);

  const itemsElement = document.createElement('p');
  itemsElement.textContent = `Items: ${character.items.join(', ')}`;
  characterDiv.appendChild(itemsElement);

  return characterDiv;
};

export default createCharacterElement;
