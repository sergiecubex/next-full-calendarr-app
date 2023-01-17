const { validationResult } = require('express-validator/check');

const Event = require('../models/event');

exports.getEvents = (req, res, next) => {
  Event.find()
    .then(events => {
      res
        .status(200)
        .json({
          message: 'Fetched events successfully.',
          events,
        });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createEvent = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }

  const title = req.body.title;

  const event = new Event({
    title: title,
    creator: req?.user?._id
  });
  event
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Event created successfully!',
        event: result
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getEvent = (req, res, next) => {
  const eventId = req.params.eventId;
  
  Event.findById(eventId)
    .then(event => {
      if (!event) {
        const error = new Error('Could not find event.');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: 'Event fetched.', event });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updateEvent = (req, res, next) => {
  const eventId = req.params.eventId;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }
  const title = req.body.title;

  Event.findById(eventId)
    .then(event => {
      if (!event) {
        const error = new Error('Could not find event.');
        error.statusCode = 404;
        throw error;
      }
      post.title = title;
      return post.save();
    })
    .then(result => {
      res.status(200).json({ message: 'Event updated!', event: result });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteEvent = (req, res, next) => {
  const eventId = req.params.eventId;
  Event.findById(eventId)
    .then(event => {
      if (!event) {
        const error = new Error('Could not find post.');
        error.statusCode = 404;
        throw error;
      }
      return Event.findByIdAndRemove(eventId);
    })
    .then(result => {
      res.status(200).json({ message: 'Deleted event.' });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
