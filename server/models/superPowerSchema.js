var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SuperPowerSchema = new Schema({
  power_name: { type: String, required: true }
});

var SuperPower = mongoose.model('SuperPower', SuperPowerSchema);

module.exports = SuperPower;
