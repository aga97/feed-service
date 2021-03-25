import * as mongoose from 'mongoose';

//feed data 
export const FeedSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: String,    
    comments: [new mongoose.Schema({ body: String, author: String ,date: {type: Date, default: Date.now}})],
    date: {type: Date, default: Date.now},
});

