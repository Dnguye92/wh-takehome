/**
 * Checks if a specific word can be formed with the given counts of letters.
 * Iterates through each character required by the word (specified in `wordCount`) and
 * compares it against the available letters (specified in `letterCount`). The function
 * returns `true` only if every character required by the word has a sufficient count
 * available in `letterCount`.
 * 
 * @param {Map<string, number>} letterCount - A map where each key is a character and its value is the count of that character available. This map holds the inventory of letters that can be used to form the word.
 * @param {Map<string, number>} wordCount - A map where each key is a character required to form the word and its value is the count needed of that character. This map details the number of each letter needed to completely form the word.
 * @returns {boolean} Returns `true` if the word can be formed from the available letters, otherwise returns `false`.
 */
export function canFormWord(letterCount: Map<string, number>, wordCount: Map<string, number>): boolean {
  // Loop through each key-value pair in `wordCount`.
  for (const [char, count] of wordCount) {
    /*
      Here, we are checking if the current character in `wordCount` exists
      in the `letterCount` map and if the value is less than the
      value or `count` of the current character in the `wordCount` map.
      If the count of the current character in `letterCount` is than
      the count of the current character in `wordCount` then we know that
      there aren't enough occurences of this character to form the word,
      in which we would exit the loop by returning false.
    */
    if ((letterCount.get(char) ?? 0) < count) return false;
  }

  /*
    If all of the characters pass the condition in the for-loop above
    then we can return true.
  */
  return true;
}
