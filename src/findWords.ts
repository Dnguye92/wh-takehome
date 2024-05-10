import { countLetters } from "./utils/countLetters";
import { canFormWord } from "./utils/canFormWord";

/**
 * Searches through a provided dictionary array to find all words that can be formed using the letters
 * from a specified input string. The function counts the occurrences of each letter in the input string
 * and each word in the dictionary, and then checks if the word can be formed using the `canFormWord` function.
 * Returns an empty array immediately if the dictionary is empty.
 * 
 * @param {string} inputString - The string from which letters are used to form words. This string's letters 
 *                               are counted and used to determine if dictionary words can be formed from it.
 * @param {string[]} dictionary - An array of words representing the dictionary. The function checks each word
 *                                to see if it can be formed from the inputString's letters.
 * @returns {string[]} An array containing all the words from the dictionary that can be formed using the letters 
 *                     from the input string. If no words can be formed, the function returns an empty array.
 */
export function findWords(inputString: string, dictionary: string[]) {
  // Return an empty array if `dictionary` is empty.
  if (dictionary.length === 0) return [];
  /*
    Call `countLetters` to create a map of the number
    of occurences for each character in the provided `inputString`.
  */
  const inputStringCount = countLetters(inputString);

  /*
    Use a filter method on the provided `dictionary`
    to find the words that pass the given criteria of
    having the same or more characters and it's number of occurences
    from the provided `inputString` which will be returned in a new array `result`.
  */
  const result = dictionary.filter(word => {
    /*
      Call `countLetters` on each word in the provided `dictionary`
      to create a map; similar to line 9.
    */
    const wordCount = countLetters(word);

    /*
      Call `canFormWord` while passing in both maps, `inputStringCount` and `wordCount`.
      `canFormWord` will return a boolean of whether or not there are enough
      letters in `inputStringCount` to form the current word in `dictionary`.
      If true, then we can filter the current word into the array `result`.
      If false, then we can ignore the word given that it doesn't satisfy
      the criteria.
    */
    return canFormWord(inputStringCount, wordCount);
  });

  return result;
};

// Example usages
// console.log(findWords("ater", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));

// console.log(findWords("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
