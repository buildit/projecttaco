import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: aws.accessKeyId,
  secretAccessKey: aws.secretAccessKey,
  region: aws.region,
});

class Notifier {
  constructor() {
    this.sns = new AWS.SNS();
  }

  publishHandler(err, data) {
    if (err) {
      console.log(err, err.stack);
    }
    else {
      console.log(data);
    }
  }

  sendOrderPlacedNotification(number) {
    var publishParams = {
      Message: 'Your order has been placed',
      PhoneNumber: number,
    };
    this.sns.publish(publishParams, this.publishHandler);
  }

  sendOrderReadyNotification(number) {
    var publishParams = {
      Message: 'Your order is ready to be picked up!',
      PhoneNumber: number,
    };
    this.sns.publish(publishParams, this.publishHandler);
  }
}

const notifier = new Notifier();
export default notifier;
