import util from "util";
import { Schema, SchemaDefinition, SchemaOptions } from "mongoose";

function AbstractEntitySchema(definition?: SchemaDefinition, options?: SchemaOptions):any {
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

export default AbstractEntitySchema();
