# Word Finder
This project provides a solution for finding all possible words from a given dictionary that can be formed using the letters from a specified input string. Each letter in the input string can be used at most once per word. The solution comprises several key components detailed below.

## Project Setup
Follow these steps:

1. Open your terminal, `cd` into your projects directory and run this command `git clone https://github.com/Dnguye92/wh-takehome.git`.
2. `cd` into `wh-takehome`.
3. Run `npm i` to install project dependencies.
4. Uncomment line 54 and/or 56 in `./src/findWords.ts` to call the `findWords()` function.
5. Run `npm run start` to run `src/findWords.ts`. `ts-node` was added for easability so that we don't have worry about compiling the TypeScript files to JavaScript to run the code.

## Running Tests
Simply run `npm test` to run the `jest` test suite.

## High-level Approach
I first had to figure an effective way to use some data structure that would be able to hold a count for each occurence of a character in a given word; which in this case was a map. Although the lookup time for a map vs an object is the same, a map offers consistent performance for adding keys frequently which is why I decided to go with it. Since I was able to find a suiteable method of counting characters, it called for a helper function that could do this for both `inputString` and for each word in `dictionary`. That function would be:

```typescript
function countLetters(word: string): Map<string, number>
```

In this helper function I had to implement the logic for creating a letter count map where each character would be the key and it's value would be the number of occurences of said character. Looping through each character of the word, I had to add each character as a map key with an initial value of 0. If the next character in the loop already exists in the map, then I would simply increment it's value by 1. Shown below:

```typescript
const letterCountMap = new Map<string, number>();

for (const char of word) {
    letterCountMap.set(char, (letterCountMap.get(char) ?? 0) + 1);
}
```
The next problem to figure out was how to filter the words that meet the criteria. To do this, I figured using a `.filter()` method would be a nice place to implement the conditions to satisfy the objective. This is initiated in the following snippet:

```typescript
const result = dictionary.filter(word => {
    const wordCount = countLetters(word);
    ...
});
```
Like stated in the beginning of this approach, I needed to also create a map for each word in `dictionary` which is done inside of the filter method.

Based off of this, I was able to move on to the next step of the problem which was figuring out a way to count the values of each key between the `inputString` map and a map of each word in `dictionary`. Now that I had a way to create a map for all of the strings, the last thing to do was to check if there were enough characters in `inputString` to form the words in `dictionary`; which is taken care of with this function:

```typescript
function canFormWord(letterCount: Map<string, number>, wordCount: Map<string, number>): boolean
```

The function takes in two maps; one for the `inputString` letter count and another for the current word in the `dictionary`. In this function, I would need to create another loop, this time for each character for every word in `dictionary`. Within the loop, I figured that I could use the character in the word as a key to check the value of the `inputString` map, which in this case is `letterCount`, against the count of the `dictionary` word which is `wordCount`. This was accomplished with the following:

```typescript
...
for (const [char, count] of wordCount) {
    if ((letterCount.get(char) ?? 0) < count) return false;
}
return true;
```

All that was left to do was to call this function on both `inputStringCount` and `wordCount` where the boolean returned from that function would determine which words to filter into result.