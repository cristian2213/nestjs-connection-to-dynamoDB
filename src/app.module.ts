import { BooksModule } from './books/books.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [BooksModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
