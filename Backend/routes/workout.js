const express = require('express');
const Workout = require('../models/workoutModel');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Workout route is working!' });
});

router.get('/:id', (req, res) => {
    res.json({ message: `Fetching workout with ID: ${req.params.id}` });
});

router.post('/',async (req, res) => {
    const { title, reps, load } = req.body;
    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(201).json(workout);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', (req, res) => {
    res.json({ message: `Deleting workout with ID: ${req.params.id}` });
});

router.patch('/:id', (req, res) => {
    res.json({ message: `Updating workout with ID: ${req.params.id}` });
});

module.exports = router;