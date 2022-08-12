const { Schema, model, models } = require('mongoose');

const bdaysSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  birthday: {
    day: { type: Number, required: true },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
  },
});

const bdays = models.bdays || model('bdays', bdaysSchema);

module.exports = bdays;

