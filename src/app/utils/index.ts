import { compose, head, join, map, split, tail, toLower, toUpper } from 'ramda';
import { DEFAULT_DATE_LOCALE } from '~constants';

export const convertWordToCamelCase = (word: string): string =>
  `${toUpper(head(word))}${toLower(tail(word))}`;

export const convertSentenceToCamelCase = (sentence: string): string => {
  const words: string[] = split(' ', sentence);

  const sentenceTail: string[] = compose(map(convertWordToCamelCase))(
    tail(words)
  );

  return `${head(words)}${join(' ', sentenceTail)}`;
};

export const setDeadline = (deadline: string | undefined) => {
  return deadline
    ? new Date(deadline).toLocaleDateString(DEFAULT_DATE_LOCALE)
    : new Date().toLocaleDateString(DEFAULT_DATE_LOCALE);
};
