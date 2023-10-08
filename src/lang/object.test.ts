type PersonData = {
  name: string
  age: number
  sex: 'male' | 'female'
}

class Person implements PersonData {
  name: string = ''
  age: number = 0
  sex: 'male' | 'female' = 'male'

  constructor(data: PersonData) {
    Object.assign(this, data)
  }

  isAdult() {
    return this.age >= 20
  }
}

describe('object', () => {
  test('json to object', () => {
    const data1: PersonData = { name: 'Mikasa', age: 20, sex: 'female' }
    const data2: PersonData = { name: 'Eren', age: 18, sex: 'male' }
    const obj1 = new Person(data1)
    const obj2 = new Person(data2)
    expect(obj1).toEqual(data1)
    expect(obj2).toEqual(data2)
    expect(obj1.isAdult()).toEqual(true)
    expect(obj2.isAdult()).toEqual(false)
  })
})
