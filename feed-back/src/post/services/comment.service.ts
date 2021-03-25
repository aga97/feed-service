import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDTO } from '../dto/create-comment.dto';
import { Comment } from '../interfaces/comment.interface';
import { Feed } from '../interfaces/feed.interface';
import { FeedSchema } from '../schemas/feed.schema';


@Injectable()
export class CommentService {
    constructor(@InjectModel('Feed') private readonly commentModel: Model<Comment>) { }

    async getComment(feedID): Promise<Comment[]> {
      const comment = await this.commentModel
        .find({_id:feedID},{comments:1})
        .exec();
      return comment;
    }

    async addComment(feedId, createCommentDTO: CreateCommentDTO): Promise<Comment> {
        const comment = await this.commentModel
        .findByIdAndUpdate(feedId, {$push: {comments: createCommentDTO}}, { new: true });
        console.log(comment);
        return comment.save();
    }  

}
