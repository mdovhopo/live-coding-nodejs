import { describe, it } from 'node:test';
import assert from 'node:assert';
import { BankAccount } from './main.js';

describe('BankAccount', () => {
  it('basic test case', () => {
    const account = new BankAccount('John Doe', 100);

    assert.strictEqual(typeof account, 'object');
  });

  // todo: write some test cases
});
