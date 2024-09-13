exports.hello = async (event) => {
  console.log("*****HELLO*****")
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v4.0! Your function executed successfully!',
      class_name: process.env.CLASS_NAME
    })
  };
};

exports.hello2 = async (event) => {
  console.log("*****HELLO-2*****")
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v4.0! Your function executed successfully! Function 2',
      class_name: process.env.CLASS_NAME
    })
  };
};

exports.hello3 = async (event) => {
  console.log("*****HELLO-3*****")
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v4.0! Your function executed successfully! Function 3',
      class_name: process.env.CLASS_NAME
    })
  };
};
