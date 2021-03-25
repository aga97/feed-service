import { Module } from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedController } from '../controllers/feed.controller';
import { CommentController } from '../controllers/comment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedSchema } from '../schemas/feed.schema';
import { CommentService } from '../services/comment.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Feed', schema: FeedSchema }, {name: 'Comment', schema: FeedSchema}]),
  ],
  providers: [FeedService, CommentService],
  controllers: [FeedController, CommentController]
})
export class FeedModule {}
