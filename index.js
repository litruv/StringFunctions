

// Export module functions
export const someFunction = (input) => {
  // Function implementation
};

/**
 * Splits a given paragraph into an array of strings, each with a maximum length of `maxSize`.
 * @param {string} paragraph - The paragraph to split.
 * @param {number} maxSize - The maximum length of each string in the resulting array.
 * @returns {string[]} - The array of split strings.
 */
export const splitParagraph = (paragraph, maxSize) => {
    const words = paragraph.split(" ");
    const splitStrings = [];
    let currentString = "";
    for (const word of words) {
        if (currentString.length + word.length <= maxSize) {
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