import $ from 'jquery'

describe('jQuery', () => {
  // To run this test, run `./src/jquery/jolokia.java` first
  test.skip('ajax', done => {
    const value = '900719925474099123' // number larger than max safe integer
    $.ajax({
      url: `http://localhost:8778/jolokia/exec/samples.ts:name=Sample/longValue(long)/${value}`,
      success: (data, _status, _xhr) => {
        console.log('data =', data)
        try {
          expect(data).toContain(value)
          // Converting to JSON fails with value larger than max safe integer
          //const result = JSON.parse(data)
          //expect(result.value).toEqual(value)
          done()
        } catch (error) {
          done(error)
        }
      },
      error: (_xhr, _status, error) => {
        done(error)
      },
    })
  })
})
