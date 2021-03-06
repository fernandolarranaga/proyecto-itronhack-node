const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const TYPES    = require('./item-types');
const moment = require('moment');

const ItemSchema = new Schema({
  title         : { type: String, required: true },
  description   : { type: String, required: true },
 //category
  _creator      : { type: Schema.Types.ObjectId, ref: 'User', required: true },
  paginas        : { type: Number, required: true },
  goal          : { type: Number, required: true },
  //backerCount   : { type: Number, default: 0 },
//  totalPledged  : { type: Number, default: 0 },
  //deadline      : { type: Date, required: true },
  pic_path      : String,
  pic_name      : String,
  winner        : { type: String}
});

/*ItemSchema.virtual('timeRemaining').get(function () {
  let remaining = moment(this.deadline).fromNow(true).split(' ');
  let [days, unit] = remaining;
  return { days, unit };

});*/


module.exports = mongoose.model('Item', ItemSchema);
