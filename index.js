/**
 * Splits a given paragraph into an array of strings, each with a maximum length of `maxSize`.
 * @param {string} paragraph - The paragraph to split.
 * @param {number} maxLength - The maximum length of each string in the resulting array.
 * @returns {string[]} - The array of split strings.
 */
export const splitParagraph = (paragraph, maxLength) => {
    const words = paragraph.split(" ");
    const splitStrings = [];
    let currentString = "";
    for (const word of words) {
        if (currentString.length + word.length <= maxLength) {
            currentString += word + " ";
        } else {
            splitStrings.push(currentString);
            currentString = word + " ";
        }
    }
    splitStrings.push(currentString);
    return splitStrings;
}

/**
 * Splits a given string into an array of strings, each with a maximum length of `maxLength`, and
 * each separated by at least two newlines or two `\r\n` sequences.
 * @param {string} str - The string to split.
 * @param {number} maxLength - The maximum length of each string in the resulting array.
 * @returns {string[]} - The array of split strings.
 */
export const splitString = (str, maxLength) => {
    const paragraphs = str.split(/\n\n|\r\n\r\n/);
    const splitStrings = [];
    for (const paragraph of paragraphs) {
        const paragraphStrings = splitParagraph(paragraph, maxLength);
        for (const paragraphString of paragraphStrings) {
            const paragraphStringStrings = splitParagraph(paragraphString, maxLength);
            for (const string of paragraphStringStrings) {
                const trimmedString = string.trim();
                if (trimmedString !== "") {
                    splitStrings.push(trimmedString);
                }
            }
        }
    }
    return splitStrings;
}

/**
 * Checks if a string contains a URL.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string contains a URL, false otherwise.
 */
export const containsURL = (str) => {
  const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]+[0-9a-zA-Z()@:%_\+.~#?&\/\/=]*\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/;
  return regex.test(str);
}

