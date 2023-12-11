import { describe, it } from 'node:test';
import assert from 'node:assert';
import { MyEventEmitter } from './main.js';

describe('MyEventEmitter', () => {
  it('can subscribe an emit events', () => {
    const emitter = new MyEventEmitter();

    let calls = [];
    const cb = (...args) => {
      calls.push({ args });
    };

    emitter.on('test-event', cb);

    emitter.emit('test-event', 1);
    emitter.emit('test-event', 1, 2);

    assert.strictEqual(calls.length, 2);
    assert.deepStrictEqual(calls, [{ args: [1] }, { args: [1, 2] }]);
  });

  it('can unsubscribe from events', () => {
    const emitter = new MyEventEmitter();

    let calls = [];
    const cb = (...args) => {
      calls.push({ args });
    };

    emitter.on('test-event', cb);

    emitter.emit('test-event', 1);

    assert.strictEqual(calls.length, 1);
    assert.deepStrictEqual(calls, [{ args: [1] }]);

    emitter.off('test-event', cb);

    emitter.emit('test-event', 1);

    assert.strictEqual(calls.length, 1);
  });

  it('can subscribe to events once', () => {
    const emitter = new MyEventEmitter();

    let calls = [];
    const cb = (...args) => {
      calls.push({ args });
    };

    emitter.once('test-event', cb);

    emitter.emit('test-event', 1);
    emitter.emit('test-event', 1, 2);

    assert.strictEqual(calls.length, 1);
    assert.deepStrictEqual(calls, [{ args: [1] }]);
  });

  it('supports multiple topics', () => {
    const emitter = new MyEventEmitter();

    let calls = [];
    const cb1 = (...args) => {
      calls.push({ sub: 1, args });
    };
    const cb2 = (...args) => {
      calls.push({ sub: 2, args });
    };

    emitter.on('test-event', cb1);
    emitter.on('test-event-2', cb2);

    emitter.emit('test-event', 1);
    emitter.emit('test-event-2', 2);

    assert.strictEqual(calls.length, 2);
    assert.deepStrictEqual(calls, [
      { sub: 1, args: [1] },
      { sub: 2, args: [2] },
    ]);
  });
});
