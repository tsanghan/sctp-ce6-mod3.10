const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns");
const { hello, hello2, hello3 } = require("../index"); // replace with your actual file name

jest.mock("@aws-sdk/client-sns");

describe('Lambda Functions', () => {
  beforeEach(() => {
    SNSClient.mockClear();
    PublishCommand.mockClear();
  });

  describe('hello function', () => {
    it('should return success response when SNS publish is successful', async () => {
      const mockSend = jest.fn().mockResolvedValue({ MessageId: '12345' });
      SNSClient.prototype.send = mockSend;

      const response = await hello({ key: "value" });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toEqual({
        message: 'Go Serverless v4.0! Your function executed successfully!',
        class_name: process.env.CLASS_NAME,
        snsResponse: { MessageId: '12345' }
      });
      expect(mockSend).toHaveBeenCalledWith(expect.any(PublishCommand));
    });

    it('should return error response when SNS publish fails', async () => {
      const mockError = new Error('SNS Error');
      const mockSend = jest.fn().mockRejectedValue(mockError);
      SNSClient.prototype.send = mockSend;

      const response = await hello({ key: "value" });

      expect(response.statusCode).toBe(500);
      expect(JSON.parse(response.body)).toEqual({
        message: "Error publishing message",
        error: 'SNS Error',
      });
      expect(mockSend).toHaveBeenCalledWith(expect.any(PublishCommand));
    });
  });

  describe('hello2 function', () => {
    it('should return success response', async () => {
      const response = await hello2({ key: "value" });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toEqual({
        message: 'Go Serverless v4.0! Your function executed successfully! Function 2',
        class_name: process.env.CLASS_NAME
      });
    });
  });

  describe('hello3 function', () => {
    it('should return success response', async () => {
      const response = await hello3({ key: "value" });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toEqual({
        message: 'Go Serverless v4.0! Your function executed successfully! Function 3',
        class_name: process.env.CLASS_NAME
      });
    });
  });
});
