import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedModule } from './post/modules/feed.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/jungwoo-feed', { useNewUrlParser: true }),
    FeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
