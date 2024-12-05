const InvariantError = require('../exceptions/InvariantError.cjs');
const { UserValidationSchema } = require('./schema.cjs');

const UserValidator = {
  validateUserPayload: (payload) => {
    const validationResult = UserValidationSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = UserValidator;