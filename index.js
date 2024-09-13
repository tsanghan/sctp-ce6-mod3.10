import { PublishCommand } from "@aws-sdk/client-sns";
import { snsClient } from "libs/snsClient.js";

exports.hello = async (event) => {
  console.log("*****HELLO*****")
  const publish = async (
    message = "Hello from SNS!",
    topicArn = "arn:aws:sns:ap-southeast-1:255945442255:MyCustomTopic-node",
  ) => {
    const response = await snsClient.send(
      new PublishCommand({
        Message: message,
        TopicArn: topicArn,
      }),
    );
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
