import { Collection, ObjectId } from 'mongodb';

export interface Review {
  _id: ObjectId;
  user: string;
  product_or_service: string;
  title: string;
  url: string;
  review: string;
  rating: number;
}

export interface Database {
  reviews: Collection<Review>;
}
