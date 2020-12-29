/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

import { ObjectId } from 'mongodb';
import { connectDatabase } from '../src/database';
import { Review } from '../src/lib/types';

const seed = async () => {
  try {
    console.log('[Seed] running...');

    const db = await connectDatabase();
    const reviews: Review[] = [
      {
        _id: new ObjectId(),
        user: 'Luna',
        product_or_service: 'Kong chew toy',
        title: 'My favorite toy to cope with anxiety!',
        url: '',
        review:
          "The most durable toy I've ever used! I couldn't destroy this thing in the 6 months I've owned it!",
        rating: 5,
      },
      {
        _id: new ObjectId(),
        user: 'Al',
        product_or_service: 'Kong Frisbee',
        title: 'Daily fun with my owner!',
        url: '',
        review:
          'This frisbee is super durable and has great geometry. It allows my owner to float this frisbee accross the yard so I can easily catch it! Playing frisbee with my owner is the best part of my day!',
        rating: 5,
      },
      {
        _id: new ObjectId(),
        user: 'Felix',
        product_or_service: 'Scratch post with catnip',
        title: 'This post drives me crazy.',
        url: '',
        review:
          'I dont know what my owner puts in this thing, but I cannot keep my claws off it! My owner says he loves that I scratch on this instead of the drapes.',
        rating: 5,
      },
    ];

    for (const review of reviews) {
      await db.reviews.insertOne(review);
    }

    console.log('[Seed] successful!');
  } catch (err) {
    throw new Error('failed to seed database');
  }
};

seed();
