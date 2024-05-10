import { findWords } from "../../findWords";

describe('findWords', () => {
    describe('find whole words', () => {
        const inputString = "dog";

        test('returns an empty array when the dictionary is empty', () => {
            const dictionary: string[] = [];
            expect(findWords(inputString, dictionary)).toEqual([]);
        });

        test('returns an empty array if no words can be formed', () => {
            const dictionary: string[] = ["oog", "doo"];
            expect(findWords(inputString, dictionary)).toEqual([]);
        });

        test('returns `dog` when a word can be formed', () => {
            const dictionary: string[] = ["oog", "doo", "dog"];
            expect(findWords(inputString, dictionary)).toEqual(["dog"]);
        });
    });

    describe('find single characters', () => {
        test('returns ["a"] when the dictionary has a word that can be formed', () => {
            const inputString = "a";
            const dictionary = ["a", "aa", "aaa", "b"];
            expect(findWords(inputString, dictionary)).toEqual(["a"]);
        });

        test('returns [] when the dictionary has no words that can formed', () => {
            const inputString = "b";
            const dictionary = ["a", "aa", "aaa", "bb"];
            expect(findWords(inputString, dictionary)).toEqual([]);
        });
    });
});
