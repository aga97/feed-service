import { Document } from 'mongoose';

export interface Feed extends Document {
  readonly title: string;
  readonly body: string;
  readonly author: string;
}
