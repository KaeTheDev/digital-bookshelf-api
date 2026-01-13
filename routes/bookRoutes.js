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


// GET all books
router.get('/', async(req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});


// GET one book
router.get('/:id', async(req, res) => {
    try{
        const book = await Book.findById(req.params.id);
        if(!book) return res.status(404).json({ error: 'Book not found' });
        res.json(book);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});