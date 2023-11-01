/**
 * Returns the length of a string.
 * @param {string} str - The input string.
 * @returns {number} - The length of the input string.
 */
export function stringLength(str) {
  return str.length;
}

/**
 * Returns a new string with all the characters in the input string converted to uppercase.
 * @param {string} str - The input string.
 * @returns {string} - The uppercase version of the input string.
 */
export function toUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Returns a new string with all the characters in the input string converted to lowercase.
 * @param {string} str - The input string.
 * @returns {string} - The lowercase version of the input string.
 */
export function toLowerCase(str) {
  return str.toLowerCase();
}

/**
 * Returns a new string with the first letter of the input string capitalized.
 * @param {string} str - The input string.
 * @returns {string} - The input string with the first letter capitalized.
 */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Returns a new string with the first letter of each word in the input string capitalized.
 * @param {string} str - The input string.
 * @returns {string} - The input string with the first letter of each word capitalized.
 */
export function titleCase(str) {
  return str
    .split(' ')
    .map((word) => capitalize(word))
    .join(' ');
}

/**
 * Returns a new string with all occurrences of the search string replaced with the replacement string.
 * @param {string} str - The input string.
 * @param {string} search - The string to search for.
 * @param {string} replacement - The string to replace the search string with.
 * @returns {string} - The input string with all occurrences of the search string replaced with the replacement string.
 */
export function replaceAll(str, search, replacement) {
  return str.split(search).join(replacement);
}

/**
 * Returns a new string with all whitespace characters removed from the beginning and end of the input string.
 * @param {string} str - The input string.
 * @returns {string} - The input string with all whitespace characters removed from the beginning and end.
 */
export function trim(str) {
  return str.trim();
}
