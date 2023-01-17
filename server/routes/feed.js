const express = require('express');
const { body } = require('express-validator/check');

const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /feed/docs
router.get('/docs', isAuth, feedController.getEvents);

// POST /feed/doc
router.post(
  '/doc',
  isAuth,
  [
    body('title')
      .trim()
      .isLength({ min: 5 }),
    body('content')
      .trim()
      .isLength({ min: 5 })
  ],
  feedController.createEvent
);

router.get('/doc/:postId', isAuth, feedController.getEvent);

router.put(
  '/doc/:docId',
  isAuth,
  [
    body('title')
      .trim()
      .isLength({ min: 5 }),
    body('content')
      .trim()
      .isLength({ min: 5 })
  ],
  feedController.updateEvent
);

router.delete('/doc/:docId', isAuth, feedController.deleteEvent);

module.exports = router;
