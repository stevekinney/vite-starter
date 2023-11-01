import funFacts from './fun-facts';

export type CharacterClass =
  | 'Paladin'
  | 'Rogue'
  | 'Wizard'
  | 'Ranger'
  | 'Barbarian'
  | 'Cleric';

export interface Character {
  name: string;
  characterClass: CharacterClass;
  strength: number;
  dexterity: number;
  wisdom: number;
  intelligence: number;
  constitution: number;
  hitPoints: number;
  mana: number;
  funFact: string;
  items: string[];
}

const getRandomNumber = (min: number = 8, max: number = 20): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const classes: CharacterClass[] = [
  'Paladin',
  'Rogue',
  'Wizard',
  'Ranger',
  'Barbarian',
  'Cleric',
];

const itemsPool = [
  'Longsword',
  'Shield',
  'Potion of Healing',
  'Dagger',
  'Lockpick Set',
  'Smoke Bomb',
  'Spellbook',
  'Wand',
  'Arcane Gem',
  'Longbow',
  'Quiver',
  'Camouflage Cloak',
  'Battleaxe',
  'Bearskin Cloak',
  'Rations',
  'Mace',
  'Burrito',
];

export const generateCharacter = (name: string): Character => {
  const randomClass = classes[getRandomNumber(0, classes.length - 1)];
  const randomFunFact = funFacts[getRandomNumber(0, funFacts.length - 1)];

  const randomItems = Array.from({ length: getRandomNumber(1, 4) }, () => {
    return itemsPool[getRandomNumber(0, itemsPool.length - 1)];
  });

  return {
    name,
    characterClass: randomClass,
    strength: getRandomNumber(8, 20),
    dexterity: getRandomNumber(8, 20),
    wisdom: getRandomNumber(8, 20),
    intelligence: getRandomNumber(8, 20),
    constitution: getRandomNumber(8, 20),
    hitPoints: getRandomNumber(20, 50),
    mana: getRandomNumber(10, 40),
    funFact: randomFunFact,
    items: randomItems,
  };
};
