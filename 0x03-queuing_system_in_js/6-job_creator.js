#!/usr/bin/yarn dev
import { createQueue } from 'kue';

const queue = createQueue();

const jobData = {
  phoneNumber: '0123456789',
  message: 'you have a new notification!',
};

const job = queue.create('push_notification_code', jobData)
  .save((err) => {
    if (!err) {
      console.log(`Notification job created: ${job.id}`);
    } else {
      console.error('Error creating job:', err);
    }
  });

job.on('complete', () => {
  console.log('Notification job completed');
});

job.on('failed', () => {
  console.log('Notification job failed');
});
