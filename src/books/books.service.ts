import {
  AttributeValue,
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
} from '@aws-sdk/client-dynamodb';
import { Injectable } from '@nestjs/common';
import { DynamodbService } from './../database/dynamodb.service';

@Injectable()
export class BooksService {
  private client: DynamoDBClient;

  constructor(private readonly dynamodbService: DynamodbService) {
    this.client = this.dynamodbService.getClient();
  }

  public async getBook(id: string): Promise<Record<string, AttributeValue>> {
    const command = new GetItemCommand({
      TableName: 'Books',
      Key: { id: { S: id } },
    });
    const response = await this.client.send(command);
    return response.Item;
  }

  public async saveBook(book: any): Promise<void> {
    const command = new PutItemCommand({
      TableName: 'Books',
      Item: book,
    });
    await this.client.send(command);
  }
}
