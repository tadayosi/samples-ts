type PersonData = {
  name: string
  age: number
  sex: 'male' | 'female'
}

// Option 1
class Person1 implements PersonData {
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

// Option 2
class Person2 {
  constructor(public data: PersonData) {}

  isAdult() {
    const { age } = this.data
    return age >= 20
  }
}

describe('object', () => {
  test('json to object', () => {
    const data1: PersonData = { name: 'Mikasa', age: 20, sex: 'female' }
    const data2: PersonData = { name: 'Eren', age: 18, sex: 'male' }
    const obj1 = new Person1(data1)
    const obj2 = new Person2(data2)
    expect(obj1).toEqual(data1)
    expect(obj2.data).toEqual(data2)
    expect(obj1.isAdult()).toEqual(true)
    expect(obj2.isAdult()).toEqual(false)
  })
})
