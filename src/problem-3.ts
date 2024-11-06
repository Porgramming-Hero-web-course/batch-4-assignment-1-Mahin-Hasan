function countWordOccurrences(sentence: string, word: string): number {
  const sentenceToLower = sentence.toLocaleLowerCase();
  const wordSeperate = sentenceToLower.split(/\b/); // seperating by " " will encounter a error as it includs TypeScript with ! mark as single word
  const wordToLower = word.toLocaleLowerCase();

  let counter = 0;

  for (const word of wordSeperate) {
    if (word === wordToLower) {
      counter++;
    }
  }

  return counter;
}
const res3 = countWordOccurrences(
  "TypeScript is great. I love TypeScript!",
  "typescript"
);
console.log(res3);
