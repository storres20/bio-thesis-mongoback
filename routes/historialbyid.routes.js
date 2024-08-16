const express = require('express');
const router = express.Router();
const Historialbyid = require('../models/historialbyid.model');

// Fetch historials with populated hospital and inventory
router.get('/', async (req, res) => {
    try {
        const historials = await Historialbyid.find()
            /*.populate({
                path: 'inventories_id',
                populate: { path: 'hospitals_id' }
            })
            .populate({
                path: 'usersid_open',
                populate: { path: 'hospitals_id' }
            })
            .populate({
                path: 'usersid_close',
                populate: { path: 'hospitals_id' }
            });*/
        res.json(historials);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Fetch historials by ID
router.get('/:id', async (req, res) => {
    try {
        const historial = await Historialbyid.findById(req.params.id)
            /*.populate({
                path: 'inventories_id',
                populate: { path: 'hospitals_id' }
            })
            .populate({
                path: 'usersid_open',
                populate: { path: 'hospitals_id' }
            })
            .populate({
                path: 'usersid_close',
                populate: { path: 'hospitals_id' }
            });*/
        if (historial === null) {
            return res.status(404).json({ message: "Cannot find historial" });
        }
        return res.json(historial);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

// Fetch historials by ID
router.get('/getByHistorial/:historialId', async (req, res) => {
    try {
        const historial = await Historialbyid.find({ historials_id: req.params.historialId })
            //.populate('historials_id')
            .populate('users_id')
            .populate({
                path: 'historials_id',
                populate: [
                    { path: 'inventories_id' },
                    { path: 'usersid_open', model: 'User' }, // Populate usersid_open
                    { path: 'usersid_close', model: 'User' }  // Populate usersid_close
                ]
            });

        if (historial === null) {
            return res.status(404).json({ message: "Cannot find historial" });
        }
        return res.json(historial);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

//Update by ID Method
router.patch('/:id', async (req, res) => {
    //res.send('Update by ID API')

    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Historialbyid.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Add a new historial
router.post('/create', async (req, res) => {
    const historial = new Historialbyid({
        hospitals_id: req.body.hospitals_id,
        inventories_id: req.body.inventories_id,
        //servicio: req.body.servicio,
        problema: req.body.problema,
        fecha_open: req.body.fecha_open,
        estado: req.body.estado,
        usersid_open: req.body.usersid_open,
        usersid_close: null,
        fecha_close: '',
        solucion: '',
        image: req.body.image,
    });

    try {
        const newHistorialbyid = await historial.save();
        res.status(201).json(newHistorialbyid);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Fetch historials by hospitals_id
router.get('/getByHospital/:hospitalId', async (req, res) => {
    try {
        const historials = await Historialbyid.find({ hospitals_id: req.params.hospitalId })
            .populate('hospitals_id')
            .populate({
                path: 'inventories_id',
                populate: { path: 'hospitals_id' }
            })
            .populate({
                path: 'usersid_open',
                populate: { path: 'hospitals_id' }
            })
            .populate({
                path: 'usersid_close',
                populate: { path: 'hospitals_id' }
            });

        // Disable caching
        res.set('Cache-Control', 'no-store');
        res.set('Pragma', 'no-cache');
        res.set('Expires', '0');

        res.json(historials);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// module.exports = router;

// Fetch historials by inventories_id
router.get('/getByInventory/:inventoryId', async (req, res) => {
    try {
        const historials = await Historialbyid.find({ inventories_id: req.params.inventoryId })
            .populate({
                path: 'inventories_id',
                populate: { path: 'hospitals_id' }
            });
        res.json(historials);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
