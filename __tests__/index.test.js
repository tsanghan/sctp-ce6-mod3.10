// index.test.js

const { hello, hello2, hello3 } = require('../index');

describe('Test hello functions', () => {

  test('hello function should return status code 200 and correct message', async () => {
    const result = await hello();

    expect(result.statusCode).toBe(200);
    expect(result.body).toBe(JSON.stringify({
      message: 'Go Serverless v4.0! Your function executed successfully!'
    }));
  });

  test('hello2 function should return status code 200 and correct message', async () => {
    const result = await hello2();

    expect(result.statusCode).toBe(200);
    expect(result.body).toBe(JSON.stringify({
      message: 'Go Serverless v4.0! Your function executed successfully! Function 2'
    }));
  });

  test('hello3 function should return status code 200 and correct message', async () => {
    const result = await hello3();

    expect(result.statusCode).toBe(200);
    expect(result.body).toBe(JSON.stringify({
      message: 'Go Serverless v4.0! Your function executed successfully! Function 3'
    }));
  });

});
