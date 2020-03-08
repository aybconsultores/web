import mongoose from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";
import AbstractEntitySchema from "./AbstractEntitySchema";

const NewsSchema = new AbstractEntitySchema({
  photo: { type: String, require: [ true, "La dirección de la foto principal es obligatoria" ] },
  content: { type: String, require: [ true, "El contenido es obligatorio" ] },
  title: { type: String, require: [ true, "El titulo es obligatorio" ] },
  category: {
    type: String,
    enum: [ 'Financiera', 'Contable', 'Tributaria', 'Administrativa' ],
    require: [ true, "La categoria es obligatoria" ]
  },
  likes: { type: Number, default: 0 },
  numberOfComments: { type: Number, default: 0 }
});

NewsSchema.plugin(aggregatePaginate);
export default mongoose.model('news', NewsSchema);
