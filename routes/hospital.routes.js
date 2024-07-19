const express = require('express');
const router = express.Router();
const Hospital = require('../models/hospital.model');

// Fetch all hospitals
router.get('/', async (req, res) => {
    try {
        const hospitals = await Hospital.find();
        res.json(hospitals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new hospital
router.post('/create', async (req, res) => {
    const hospital = new Hospital({
        name: req.body.name,
        address: req.body.address,
        // Other fields
    });

    try {
        const newHospital = await hospital.save();
        res.status(201).json(newHospital);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
