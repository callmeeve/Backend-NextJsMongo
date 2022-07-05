const express = require("express");
const routerBarang = express.Router();
const controllerBarang = require("../controllers/barang");

routerBarang
  .route("/Barang")
  .get(controllerBarang.getBarang)
  .post(controllerBarang.insert);

routerBarang
  .route("/Barang/:nomor")
  .put(controllerBarang.update)
  .delete(controllerBarang.delete)
  .get(controllerBarang.getBarangByNomor);

routerBarang
  .route("/Barang/catatan/:nomor")
  .get(controllerBarang.getCatatanByNomor)
  .put(controllerBarang.insertCatatan);

module.exports = routerBarang;
