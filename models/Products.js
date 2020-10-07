const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    name: { type: String, required: true }, //Esto es para que a la de afuerza se mande
    price: { type: Number, required: true },
  },
  {
    timestamps: true, //Esto nos sirve para poder decirle que cada vez que cree un nuevo modelo le ponga la fecha de creacion
  }
);

module.exports = model("Product", ProductSchema);
