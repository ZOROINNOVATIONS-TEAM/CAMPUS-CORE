import express from 'express';
import webpush from '../lib/webpush';

const router = express.Router();

const subscriptions: any[] = []; // You should store this in DB instead

// POST /api/v1/notifications/subscribe
router.post('/subscribe', (req, res) => {
  const subscription = req.body;
  subscriptions.push(subscription);
  res.status(201).json({ message: 'Subscribed' });
});

// POST /api/v1/notifications/send
router.post('/send', async (req, res) => {
  const notificationPayload = JSON.stringify({
    title: 'New Notification',
    body: 'This is a test push notification!',
  });

  const promises = [];
  for (const sub of subscriptions) {
    promises.push(webpush.sendNotification(sub, notificationPayload));
  }

  try {
    await Promise.all(promises);
    res.json({ message: 'Notifications sent' });
  } catch (error) {
    res.status(500).json({ error: 'Error sending notifications' });
  }
});

export default router;
