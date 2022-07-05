const mongoose = require("mongoose");

const brgEmbeddedSchema = new mongoose.Schema({
  nomor: {
    require: true,
    type: String,
  },
  nama: {
    require: true,
    type: String,
  },
  jumlah: {
    require: true,
    type: String,
  },
  catatan: [
    {
      deskripsi: String,
    },
  ],
});

module.exports = mongoose.model("Barang", brgEmbeddedSchema, "barang");
