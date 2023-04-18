import { it, bench, describe, expect } from 'vitest'
import { flat } from './main.js'

describe('flat', () => {
  bench('for', () => {
    const list = [new Set(['a', 'b']), new Set(['c', 'd'])]

    const flat = (list: Set<string>[]): string[] => {
      const array: string[] = []

      for (const set of list) {
        const setArray = [...set]
        array.push(...setArray)
      }

      return array
    }

    expect(flat(list)).toEqual(['a', 'b', 'c', 'd'])
  })

  bench('reduce', () => {
    const list = [new Set(['a', 'b']), new Set(['c', 'd'])]
    const result = flat(list)
    expect(result).toEqual(['a', 'b', 'c', 'd'])
  })
})
