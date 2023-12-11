import { describe, it } from 'node:test';
import assert from 'node:assert';
import { highestScoringWord } from './main.js';

describe(highestScoringWord.name, () => {
  const cases = [
    { input: 'man i need a taxi up to ubud', expectedOutput: 'taxi' },
    {
      input: 'what time are we climbing up the volcano',
      expectedOutput: 'volcano',
    },
    { input: 'take me to semynak', expectedOutput: 'semynak' },
    { input: 'aa b', expectedOutput: 'aa' },
    { input: 'b aa', expectedOutput: 'b' },
    { input: 'bb d', expectedOutput: 'bb' },
    { input: 'd bb', expectedOutput: 'd' },
    { input: 'aaa b', expectedOutput: 'aaa' },
  ];

  for (const { input, expectedOutput } of cases) {
    it(`should return ${expectedOutput} for ${input}`, () => {
      assert.strictEqual(highestScoringWord(input), expectedOutput);
    });
  }
});
