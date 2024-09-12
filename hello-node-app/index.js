exports.hello = async (event) => {
  console.log("*****HELLO*****")
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v4.0! Your function executed successfully!'
    })
  };
};

exports.hello2 = async (event) => {
  console.log("*****HELLO-2*****")
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v4.0! Your function executed successfully! Function 2'
    })
  };
};

exports.hello3 = async (event) => {
  console.log("*****HELLO-3*****")
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v4.0! Your function executed successfully! Function 3'
    })
  };
};
