const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StoreSchema = Schema({
  name: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true,
  },
  linkFB: String,
  image: String,
  belongToUser: { type: Schema.Types.ObjectId, ref: 'User' },
  products:
    [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  comments:
    [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
},
  {
    timestaps: true
  });

module.exports = mongoose.model('Store', StoreSchema);