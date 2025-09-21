const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');


router.get('/', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skipIndex = (page - 1) * limit;

    try {
        const totalContacts = await Contact.countDocuments();
        const contacts = await Contact.find().limit(limit).skip(skipIndex);

        res.json({
            contacts,
            currentPage: page,
            totalPages: Math.ceil(totalContacts / limit),
            totalItems: totalContacts
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Adding new contacts
router.post('/', async (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    const newContact = new Contact({ name, email, phone });
    try {
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Deleting the contacts
router.delete('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json({ message: 'Contact deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Updating the contacts

module.exports = router;