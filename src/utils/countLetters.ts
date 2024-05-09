/**
 * Counts the occurrences of each letter in a given word and returns a map with these counts.
 * The function iterates over each character in the input string, maintaining a count
 * of each character in a map. If a character is found again, the count is incremented.
 * 
 * @param {string} word - The word from which to count each letter's occurrences.
 * @returns {Map<string, number>} A map where each key is a unique character from the word and each value is the count of that character's occurrences in the word.
 */
export function countLetters(word: string): Map<string, number> {
  /*
    Create an empty map which will be used to store the number
    of occurences of each character in the provided `word` where
    the key will be the character and the number of occurences
    of that character will be the value.
    Example: if the provided word is 'ate' then the map returned would be
    { 'a' => 1, 't' => 1, 'e' => 1 }
  */
  const letterCountMap = new Map<string, number>();

  // Loop through each character of the provided `word`
  for (const char of word) {
    /*
      For each character, set the character as a key in `letterCountMap`.
      In order to set the value of the current key, we need to check
      if the key exists in `letterCountMap`. If the key doesn't exist
      in `letterCountMap`, then we set the initial value to 0. If the key
      does exist then we simply increase the value by 1.
    */ 
    letterCountMap.set(char, (letterCountMap.get(char) ?? 0) + 1);
  }

  return letterCountMap;
};
