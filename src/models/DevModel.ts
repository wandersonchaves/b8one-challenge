const { Schema, model } = require("mongoose");

const DevModel = new Schema(
  {
    name: { type: String, required: true },
    user: { type: String, required: true },
    bio: String,
  },
  { timestamps: true }
);

export default model("DevModel", DevModel);
