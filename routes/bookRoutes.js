const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// CREATE a book
router.post('/', async(req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json(newBook);
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
});