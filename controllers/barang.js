const Barang = require("../models/brgEmbedded");

module.exports = {
  insert: async (req, res) => {
    //Ambil data request dari front end
    const data = new Barang({
      nomor: req.body.nomor,
      nama: req.body.nama,
      jumlah: req.body.jumlah,
    });
    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  insertCatatan: async (req, res) => {
    const nomor = req.params.nomor;
    try {
      await Barang.updateOne(
        { nomor: nomor },
        {
          $push: {
            catatan: {
              deskripsi: req.body.deskripsi,
            },
          },
        }
      );
      res.send("Catatan telah di simpan");
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },

  getBarang: async (req, res) => {
    try {
      const result = await Barang.find();
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  getBarangByNomor: async (req, res) => {
    const nomor = req.params.nomor;
    try {
      const result = await Barang.find().where("nomor").equals(nomor);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getCatatanByNomor: async (req, res) => {
    const nomor = req.params.nomor;
    try {
      const result = await Barang.find(
        { nomor: nomor },
        { _id: 0, nilai: 1 }
      );
      /* let res2 =[];
            for (let i = 0; i < result.lenght i++){
                res2.push(result[i])
            }*/
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  
  update: async (req, res) => {
    const filter = { nomor: req.params.nomor };
    const updatedData = {
      nama: req.body.nama,
      jumlah: req.body.jumlah,
    };
    try {
      let result = await Barang.updateOne(filter, updatedData);
      res.send("Data telah terupdate");
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },

  delete: async (req, res) => {
    const filter = { nomor: req.params.nomor };
    try {
      await Barang.deleteOne(filter);
      res.send("Data telah terhapus");
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },
};
