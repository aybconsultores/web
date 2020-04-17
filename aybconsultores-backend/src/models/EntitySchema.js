const util = require("util")
const { Schema } = require("mongoose")

function EntitySchema() {
  Schema.apply(this, arguments);

  this.add({
    id: String,
    created: { type: Date, default: Date.now },
    updated: {
      type: Date,
      required: function() {
        return this.objectID !== undefined
      }
    }
  })
}

util.inherits(EntitySchema, Schema)

exports.EntitySchema = EntitySchema
