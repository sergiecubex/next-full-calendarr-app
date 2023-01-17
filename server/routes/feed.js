const express = require('express');
const { body } = require('express-validator/check');

const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /feed/events
router.get('/events', isAuth, feedController.getEvents);

// POST /feed/event
router.post(
  '/event',
  isAuth,
  [
    body('title')
      .trim()
      .isLength({ min: 5 }),
  ],
  feedController.createEvent
);

router.get('/event/:eventId', isAuth, feedController.getEvent);

router.put(
  '/event/:eventId',
  isAuth,
  [
    body('title')
      .trim()
      .isLength({ min: 5 }),
  ],
  feedController.updateEvent
);

router.delete('/event/:eventId', isAuth, feedController.deleteEvent);

module.exports = router;
