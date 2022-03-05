import {compose, head, join, map, split, tail, toLower, toUpper} from 'ramda';

export const convertWordToCamelCase = (word: string ): string => `${toUpper(head(word))}${toLower(tail(word))}`;

export const convertSentenceToCamelCase = (sentence: string): string => {
  const words: string[] = split(' ', sentence);

  const sentenceTail: string[] = compose(
    map(convertWordToCamelCase)
  )(tail(words));

  return `${head(words)}${join(' ', sentenceTail)}`;
}
