import test from 'ava'

import { helloWorld } from './main.js'

test('hello world', (t) => {
  t.is(helloWorld(), 'hello world')
})
