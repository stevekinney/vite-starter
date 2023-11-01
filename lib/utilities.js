/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 *
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} A random integer between min and max.
 */
export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Returns a random item from an array.
 *
 * @template T
 * @param {T[]} array - The array to pick a random item from.
 * @returns {T} A random item from the array.
 */
export const getRandomItemFromArray = (array) => {
  return array[getRandomNumber(0, array.length - 1)];
};

/**
 * Returns a new array with the specified number of random items from the original array.
 *
 * @template T
 * @param {T[]} array - The array to pick random items from.
 * @param {number} count - The number of random items to pick.
 * @returns {T[]} A new array with the specified number of random items from the original array.
 */
export const getRandomItemsFromArray = (array, count) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

/**
 * Returns a new array with the unique items from the original array.
 *
 * @template T
 * @param {T[]} array - The array to remove duplicates from.
 * @returns {T[]} A new array with the unique items from the original array.
 */
export const removeDuplicatesFromArray = (array) => {
  return [...new Set(array)];
};

/**
 * Returns a new object with the specified keys and values.
 *
 * @template T
 * @param {string[]} keys - The keys of the new object.
 * @param {T[]} values - The values of the new object.
 * @returns {Record<string, T>} A new object with the specified keys and values.
 */
export const zipArraysToObject = (keys, values) => {
  return keys.reduce((obj, key, index) => {
    obj[key] = values[index];
    return obj;
  }, {});
};
