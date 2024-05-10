import { countLetters } from "../../src/utils/countLetters";

describe('countLetters', () => {
    test('counts each letter correctly', () => {
        const result = countLetters('hello');
        expect(result.get('h')).toBe(1);
        expect(result.get('e')).toBe(1);
        expect(result.get('l')).toBe(2);
        expect(result.get('o')).toBe(1);
    });
  
    test('returns correct counts for a word with repeated letters', () => {
        const result = countLetters('aaa');
        expect(result.get('a')).toBe(3);
    });
  
    test('handles case sensitivity by treating upper and lower case as different', () => {
        const result = countLetters('aA');
        expect(result.get('a')).toBe(1);
        expect(result.get('A')).toBe(1);
    });
  
    test('returns an empty map for an empty string', () => {
        const result = countLetters('');
        expect(result.size).toBe(0);
    });
  
    test('counts letters correctly in a longer phrase', () => {
        const result = countLetters('hello world');
        expect(result.get('h')).toBe(1);
        expect(result.get('e')).toBe(1);
        expect(result.get('l')).toBe(3);
        expect(result.get('o')).toBe(2);
        expect(result.get('w')).toBe(1);
        expect(result.get('r')).toBe(1);
        expect(result.get('d')).toBe(1);
    });
});
