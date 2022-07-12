const { Stack, Duration } = require('aws-cdk-lib');
// const sqs = require('aws-cdk-lib/aws-sqs');
const widget_service = require('../lib/widget_service');

class MyWidgetServiceStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new widget_service.WidgetService(this, 'Widgets');
    // example resource
    // const queue = new sqs.Queue(this, 'MyWidgetServiceQueue', {
    //   visibilityTimeout: Duration.seconds(300)
    // });
  }
}

module.exports = { MyWidgetServiceStack }
