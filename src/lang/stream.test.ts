describe('stream', () => {
  test('map does not stream', () => {
    const history: number[] = []
    const result = [...Array(10).keys()]
      .map(x => {
        history.push(x)
        return x
      })
      .find(x => x === 1)
    console.log('history:', history)
    expect(result).toEqual(1)
    expect(history).toEqual([...Array(10).keys()])
  })
})
