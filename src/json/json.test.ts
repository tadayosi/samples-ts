import JSONbig from 'json-bigint'

describe('JSON', () => {
  test('parse', () => {
    const json = `
      {
        "boolean": true,
        "string": "hello",
        "number": 12345,
        "long": 900719925474099123
      }`
    const obj1 = JSON.parse(json)
    expect(obj1.boolean).toEqual(true)
    expect(obj1.string).toEqual('hello')
    expect(obj1.number).toEqual(12345)
    // unsafe number cannot be parsed correctly
    console.log('obj1.long =', obj1.long)
    expect(String(obj1.long)).not.toEqual('900719925474099123')

    const obj2 = JSON.parse(json, (key, value) => {
      console.log('key =', key, ',', 'value =', value)
      return typeof value === 'number' && !Number.isSafeInteger(value) ? String(value) : value
    })
    // reviver still doesn't work with unsafe number
    console.log('obj2.long =', obj2.long)
    expect(obj2.long).not.toEqual('900719925474099123')
  })

  test('parse with json-bigint', () => {
    const json = `
      {
        "boolean": true,
        "string": "hello",
        "number": 12345,
        "long": 900719925474099123
      }`
    const obj3 = JSONbig({ storeAsString: true }).parse(json)
    console.log('obj3 =', obj3)
    expect(obj3.boolean).toEqual(true)
    expect(obj3.string).toEqual('hello')
    expect(obj3.number).toEqual(12345)
    console.log('obj3.long =', obj3.long)
    expect(obj3.long).toEqual('900719925474099123')
  })
})
