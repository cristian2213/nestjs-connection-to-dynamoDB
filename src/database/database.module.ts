import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DynamodbService } from './dynamodb.service';

@Global()
@Module({
  imports: [ConfigModule],
  controllers: [],
  providers: [DynamodbService],
  exports: [DynamodbService],
})
export class DatabaseModule {}
