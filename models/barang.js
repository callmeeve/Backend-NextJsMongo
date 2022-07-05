const mongoose = require("mongoose");

const brgSchema = new mongoose.Schema({
  nomor: {
    require: true,
    type: String,
  },
  nama: String,
  jumlah: String,
});

module.exports = mongoose.model("Barang", brgSchema, "barang");
