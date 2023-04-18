export function flat(list: Set<string>[]): string[] {
  const array: string[] = list.reduce((acc: string[], set) => {
    const setArray = [...set]
    return acc.concat(setArray)
  }, [])

  return array
}
