const Joi = require('joi');

const UserValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(30).required()
});

const BookingPayloadSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  contact_number: Joi.string().required(),
  date: Joi.date().format("DD/MM/YYYY").required(),
  doctor_id: Joi.string().required(),
});

module.exports = { UserValidationSchema, BookingPayloadSchema };