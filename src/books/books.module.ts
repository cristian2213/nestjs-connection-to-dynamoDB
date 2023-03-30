import { BooksService } from './books.service';
import { BooksController } from './books.controller';

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
