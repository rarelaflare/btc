const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CryptoSchema = new Schema({
  name: String,
  abbreviation: String,
  link: String,
  type: String,
  initialization_date: {
    type: Date,
    default: Date.now
  }
});

const Crypto = mongoose.model('Crypto', CryptoSchema);

module.exports = Crypto;