import { Document } from 'mongoose';

export interface Comment extends Document {
    readonly body: string;
    readonly author: string;
    readonly date: Date;
  }