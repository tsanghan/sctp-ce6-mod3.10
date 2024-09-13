const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns");

const snsClient = new SNSClient({ region: "ap-southeast-1" });

exports.hello = async (event) => {
  console.log("*****HELLO*****")
  try {
    const eventText = JSON.stringify(event, null, 2);
    const params = {
      Message: eventText,
      TopicArn: process.env.SNS_ARN,
      Message: "Hello from SNS!!",
    };
    const data = await snsClient.send(new PublishCommand(params));
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless v4.0! Your function executed successfully!',
        class_name: process.env.CLASS_NAME,
        snsResponse: data
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error publishing message",
        error: err.message,
      }),
    };
  }
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
