import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateCommentDTO } from '../dto/create-comment.dto';
import { CommentService } from '../services/comment.service';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes'

@Controller('post')
export class CommentController {
    constructor(private commentService: CommentService) { }

    @Get('/comment/:feedId')
    async getComment(@Res() res, @Param('feedId', new ValidateObjectId()) feedId) {
        const feed = await this.commentService.getComment(feedId);
        if(!feed) {
            throw new NotFoundException('Comment does not exist!');
        }
        return res.status(HttpStatus.OK).json(feed);
    }  
    @Put('/comment/edit')
    async editFeed(
        @Res() res,
        @Query('feedId', new ValidateObjectId()) feedID,
        @Body() createCommentDTO: CreateCommentDTO,) {

        const editedFeed = await this.commentService.addComment(feedID, createCommentDTO);
        if (!editedFeed) {
            throw new NotFoundException('Feed does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Feed has been successfully updated',
            feed: editedFeed,
        });
    }
}

