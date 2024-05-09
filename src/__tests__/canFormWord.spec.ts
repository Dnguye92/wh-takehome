import { countLetters } from "../utils/countLetters";
import { canFormWord } from "../utils/canFormWord";

describe('canFormWord function', () => {
    test('should return true if the word can be formed with the given letters', () => {
        const letterCount = countLetters('aabbcc');
        const wordCount = countLetters('abc');
        expect(canFormWord(letterCount, wordCount)).toBe(true);
    });
  
    test('should return false if the word cannot be formed due to insufficient letters', () => {
        const letterCount = countLetters('aabbcc');
        const wordCount = countLetters('aaa');
        expect(canFormWord(letterCount, wordCount)).toBe(false);
    });
  
    test('should return true for an empty word (no letters needed)', () => {
        const letterCount = countLetters('aabbcc');
        const wordCount = countLetters('');
        expect(canFormWord(letterCount, wordCount)).toBe(true);
    });
  
    test('should return true when input string is empty and no word is requested', () => {
        const letterCount = countLetters('');
        const wordCount = countLetters('');
        expect(canFormWord(letterCount, wordCount)).toBe(true);
    });
  
    test('should return false if the word has letters not present in the input', () => {
        const letterCount = countLetters('aabbcc');
        const wordCount = countLetters('aabbccd');
        expect(canFormWord(letterCount, wordCount)).toBe(false);
    });
  
    test('should handle cases with repeated characters correctly', () => {
        const letterCount = countLetters('aabbc');
        const wordCount = countLetters('abbc');
        expect(canFormWord(letterCount, wordCount)).toBe(true);
    });
  
    test('should return false if trying to form a word with more repeated characters than available', () => {
        const letterCount = countLetters('aabbc');
        const wordCount = countLetters('aabbbcc');
        expect(canFormWord(letterCount, wordCount)).toBe(false);
    });
});
  