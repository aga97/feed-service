import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateFeedDTO } from '../dto/create-feed.dto';
import { FeedService } from '../services/feed.service';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes'

@Controller('post')
export class FeedController {

    constructor(private feedService: FeedService) { }

    @Post('/feed')
    async addFeed(@Res() res, @Body() createFeedDTO: CreateFeedDTO) {
        const newFeed = await this.feedService.addFeed(createFeedDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Feed has been submiited successfully.',
            feed: newFeed,
        });
    }

    @Get('/feed/:feedId')
    async getFeed(@Res() res, @Param('feedId', new ValidateObjectId()) feedId) {
        const feed = await this.feedService.getFeed(feedId);
        if(!feed) {
            throw new NotFoundException('Feed does not exist!');
        }
        return res.status(HttpStatus.OK).json(feed);
    }

    @Get('/feeds')
    async getFeeds(@Res() res) {
        const feeds = await this.feedService.getFeeds();
        return res.status(HttpStatus.OK).json(feeds);
    }

    @Put('/edit')
    async editFeed(
        @Res() res,
        @Query('feedId', new ValidateObjectId()) feedID,
        @Body() createFeedDTO: CreateFeedDTO,) {

        const editedFeed = await this.feedService.editFeed(feedID, createFeedDTO);
        if (!editedFeed) {
            throw new NotFoundException('Feed does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Feed has been successfully updated',
            feed: editedFeed,
        });
    }
  
    @Delete('/delete')
    async deleteFeed(@Res() res, @Query('feedId', new ValidateObjectId()) feedID,) {
        const deletedFeed = await this.feedService.deleteFeed(feedID);
        if (!deletedFeed) {
            throw new NotFoundException('Feed does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Feed has been deleted!',
            feed: deletedFeed,
        });
    }  
}

