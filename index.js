exports.hello = async (event) => {
  console.log("*****HELLO*****")
  const sns = new aws.SNS({ region: 'ap-southeast-1' });
  const payload = JSON.stringify({ message: "Hello from SNS!" });
  await sns.publish({
    Subject: 'My Subject',
    Message: payload,
    TargetArn: 'arn:aws:sns:ap-southeast-1:255945442255:MyCustomTopic-node',
  })
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v4.0! Your function executed successfully!',
      class_name: process.env.CLASS_NAME,
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
