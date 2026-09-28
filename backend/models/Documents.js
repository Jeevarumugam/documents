const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  documentName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Document", documentSchema);
