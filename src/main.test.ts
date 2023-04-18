import { it, describe, expect } from 'vitest'
import { flat } from './main.js'

describe('flat', () => {
  it('should flatten a list of sets', () => {
    const list = [new Set(['a', 'b']), new Set(['c', 'd'])]
    const result = flat(list)
    expect(result).toEqual(['a', 'b', 'c', 'd'])
  })
})
