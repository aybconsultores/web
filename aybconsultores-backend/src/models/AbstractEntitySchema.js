const util  = require('util');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function AbstractEntitySchema() {
  Schema.apply(this, arguments);

  this.add({
    objectID: Schema.Types.ObjectId,
    id: String,
    created: { type: Date, default: Date.now },
    updated: {
      type: Date,
      required: function() {
        return this.objectID !== undefined
      }
    }
  });
}

util.inherits(AbstractEntitySchema, Schema);

exports.AbstractEntitySchema = AbstractEntitySchema;
