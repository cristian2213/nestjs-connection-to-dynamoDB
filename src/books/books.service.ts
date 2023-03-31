import {
  AttributeValue,
  GetItemCommand,
  PutItemCommand,
  DynamoDBClient,
} from '@aws-sdk/client-dynamodb';
import { Injectable } from '@nestjs/common';
import { Account, AccountType } from './book.model';

@Injectable()
export class BooksService {
  private client: DynamoDBClient;

  constructor() {
    // this.client = this.dynamodbService.getClient();
  }

  // public async getBook(id: string): Promise<Record<string, AttributeValue>> {
  //   const command = new GetItemCommand({
  //     TableName: 'Books',
  //     Key: { id: { S: id } },
  //   });
  //   const response = await this.client.send(command);
  //   return response.Item;
  // }

  // public async saveBook(book: any): Promise<void> {
  //   const command = new PutItemCommand({
  //     TableName: 'Books',
  //     Item: book,
  //   });
  //   await this.client.send(command);
  // }

  public async getBook(id: string): Promise<any> {
    const book = await Account.get({ pk: id });
    return book;
  }

  public async saveBook(payload: any): Promise<any> {
    const newBook: AccountType = {
      name: payload.name,
    };
    return await Account.create(newBook);
  }
}
