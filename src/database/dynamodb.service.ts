import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { AwsCredentialIdentity } from '@aws-sdk/types';

@Injectable()
export class DynamodbService {
  private client: DynamoDBClient;
  private credentials: AwsCredentialIdentity;

  constructor(private readonly config: ConfigService) {
    this.credentials = {
      accessKeyId: this.config.get<string>('AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.config.get<string>('AWS_SECRET_ACCESS_KEY'),
    };

    this.client = new DynamoDBClient({
      region: this.config.get<string>('AWS_REGION'), // cambia esto por la region de tu tabla
      credentials: this.credentials,
    });
  }

  public getClient(): DynamoDBClient {
    return this.client;
  }
}
