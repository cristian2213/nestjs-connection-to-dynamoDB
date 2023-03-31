import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { Dynamo } from 'dynamodb-onetable/Dynamo';

const credentials = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
};

const awsConfig = new DynamoDBClient({
  region: process.env.AWS_REGION, // cambia esto por la region de tu tabla
  credentials: credentials,
});

const client = new Dynamo({
  client: awsConfig,
});

export { client };
