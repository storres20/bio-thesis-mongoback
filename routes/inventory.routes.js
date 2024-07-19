const express = require('express');
const Model = require('../models/inventory.model');
const InventoryModel = require('../models/inventory.model');

const router = express.Router()

module.exports = router;

//Post Method - create
router.post('/create', async (req, res) => {
  //res.send('Post API')

  const data = new Model({
    name: req.body.name,
    brand: req.body.brand,
    model: req.body.model,
    serie: req.body.serie,
    location: req.body.location,
    codepat: req.body.codepat,
    show: '1',
    hospitals_id: req.body.hospitals_id,
  })

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//Post Method - Login
router.post('/', async (req, res) => {
  //res.send('Post API')

  data = {
    email: req.body.email,
    password: req.body.password
  }

  try {
    const data2 = await Model.findOne(data);

    if (data2 === null) {
      res.status(400).json({
        status: 0,
        message: "Intente de nuevo"
      })
    }
    else if (data2.email === data.email && data2.password === data.password) {
      res.json({
        status: 1,
        message: "success"
      })
    }

  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//Get all Method
router.get('/', async (req, res) => {
  //res.send('Get All API')

  try {
    const data = await Model.find().populate('hospitals_id');
    res.json(data)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//Get by ID Method
router.get('/:id', async (req, res) => {
  //res.send('Get by ID API')
  //res.send(req.params.id)

  try {
    const data = await Model.findById(req.params.id);
    res.json(data)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//Get by CODEPAT Method
router.get('/codepat/:codepat', async (req, res) => {
  try {
    const data = await Model.findOne({ codepat: req.params.codepat });
    if(data !== null){
      res.json(data);
    }else{
      res.status(400).json({ message: 'No data found for the provided CODEPAT' });
    }
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch('/:id', async (req, res) => {
  //res.send('Update by ID API')

  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(
      id, updatedData, options
    )

    res.send(result)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Delete by ID Method
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    // Delete the inventory item
    const deletedItem = await InventoryModel.findByIdAndDelete(id);

    // Optionally, delete related appointments
    // await AppointmentModel.deleteMany({ user_id: id });

    if (!deletedItem) {
      return res.status(404).json({ message: `Item with ID ${id} not found` });
    }

    res.send(`Item with ID ${id} has been deleted.`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method
/*
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    // Eliminar el usuario
    const deletedUser = await InventoryModel.findByIdAndDelete(id);

    // Eliminar los APPOINTMENT relacionados con el user_id
    await AppointmentModel.deleteMany({ user_id: id });

    res.send(`User with ID ${id} has been deleted, and related appointments have been removed.`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});*/

// Fetch inventories by hospitals_id
router.get('/getByHospital/:hospitalId', async (req, res) => {
  try {
    const inventories = await Model.find({ hospitals_id: req.params.hospitalId })
        .populate('hospitals_id')
    res.json(inventories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
