import { countLetters } from "../src/utils/countLetters";
import { canFormWord } from "../src/utils/canFormWord";

describe('canFormWord', () => {
    test('returns true if the word can be formed', () => {
        const letterCount = countLetters('aabbcc');
        const wordCount = countLetters('abc');
        expect(canFormWord(letterCount, wordCount)).toBe(true);
    });
  
    test('returns false if the word cannot be formed', () => {
        const letterCount = countLetters('aabbcc');
        const wordCount = countLetters('aaa');
        expect(canFormWord(letterCount, wordCount)).toBe(false);
    });
  
    test('returns true for an empty word', () => {
        const letterCount = countLetters('aabbcc');
        const wordCount = countLetters('');
        expect(canFormWord(letterCount, wordCount)).toBe(true);
    });
  
    test('returns true when input string is empty and no word is requested', () => {
        const letterCount = countLetters('');
        const wordCount = countLetters('');
        expect(canFormWord(letterCount, wordCount)).toBe(true);
    });
  
    test('returns false if the word has letters not present in the input', () => {
        const letterCount = countLetters('aabbcc');
        const wordCount = countLetters('aabbccd');
        expect(canFormWord(letterCount, wordCount)).toBe(false);
    });
  
    test('returns true for repeated characters', () => {
        const letterCount = countLetters('aabbc');
        const wordCount = countLetters('abbc');
        expect(canFormWord(letterCount, wordCount)).toBe(true);
    });
  
    test('returns false if trying to form a word with more repeated characters than available', () => {
        const letterCount = countLetters('aabbc');
        const wordCount = countLetters('aabbbcc');
        expect(canFormWord(letterCount, wordCount)).toBe(false);
    });
});
