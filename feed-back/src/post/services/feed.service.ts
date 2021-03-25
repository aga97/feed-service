import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFeedDTO } from '../dto/create-feed.dto';
import { Feed } from '../interfaces/feed.interface';

@Injectable()
export class FeedService {
    constructor(@InjectModel('Feed') private readonly feedModel: Model<Feed>) { }

    async addFeed(createFeedDTO: CreateFeedDTO): Promise<Feed> {
      const newFeed = await this.feedModel.create({...createFeedDTO});
      console.log(newFeed);
      return newFeed.save();
    }  
  
    async getFeed(feedID): Promise<Feed> {
      const feed = await this.feedModel
        .findById(feedID)
        .exec();
      return feed;
    }
  
    async getFeeds(): Promise<Feed[]> {
      const feeds = await this.feedModel.find().sort({"_id": -1}).exec()
      return feeds;
    }

    async editFeed(feedId, createFeedDTO: CreateFeedDTO): Promise<Feed> {
        const editedFeed = await this.feedModel
            .findByIdAndUpdate(feedId, createFeedDTO, { new: true });
        return editedFeed;
    }

    async deleteFeed(feedId): Promise<any> {
        const deletedFeed = await this.feedModel
            .findByIdAndRemove(feedId);
        return deletedFeed;
    }

    async getComment(feedID): Promise<Feed[]> {
      const comment = await this.feedModel
        .findById(feedID)
        .find({},{comment:1})
        .exec();
      return comment;
    }

}
