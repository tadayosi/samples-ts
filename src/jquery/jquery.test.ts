import Jolokia from 'jolokia.js'
import $ from 'jquery'

describe('jQuery', () => {
  // To run this test, run `./src/jquery/jolokia.java` first
  test.skip('ajax', done => {
    const value = '900719925474099123' // number larger than max safe integer
    $.ajax({
      url: `http://localhost:8778/jolokia/exec/samples.ts:name=Sample/longValue(long)/${value}`,
      dataType: 'json',
      success: (data, status, _xhr) => {
        console.log('status =', status)
        console.log('type =', typeof data)
        console.log('data =', data)
        try {
          // Number larger than max safe integer is not converted accurately
          expect(data.value).not.toEqual(value)
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

  // To run this test, run `./src/jquery/jolokia.java` first
  test.skip('jolokia', done => {
    const jolokia = new Jolokia('http://localhost:8778/jolokia')
    const value = '900719925474099123' // number larger than max safe integer
    jolokia.request(
      { type: 'exec', mbean: 'samples.ts:name=Sample', operation: 'longValue(long)', arguments: [value] },
      {
        //dataType: 'text',
        success: resp => {
          console.log('type =', typeof resp)
          console.log('resp =', resp)
          try {
            expect(resp).toContain(value)
            done()
          } catch (error) {
            done(error)
          }
        },
        error: error => {
          done(error)
        },
      },
    )
  })
})
