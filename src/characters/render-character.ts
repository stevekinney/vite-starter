import type { Character } from './generate-character';

export const renderCharacterElement = (character: Character): HTMLElement => {
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

export function renderCharacter(character: Character): string {
  let result = '';

  result += `Name: ${character.name}\n`;
  result += `Class: ${character.characterClass}\n`;
  result += `Strength: ${character.strength}\n`;
  result += `Dexterity: ${character.dexterity}\n`;
  result += `Wisdom: ${character.wisdom}\n`;
  result += `Intelligence: ${character.intelligence}\n`;
  result += `Constitution: ${character.constitution}\n`;
  result += `Hit Points: ${character.hitPoints}\n`;
  result += `Mana: ${character.mana}\n`;
  result += `Fun Fact: ${character.funFact}\n`;
  result += `Items: ${character.items.join(', ')}\n`;

  return result;
}

export default renderCharacter;
