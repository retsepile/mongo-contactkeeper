const express = require('express');
const router = express.Router();

//  @route GET api/contact
//  @desc  Get all users
//  @acess Private
router.get('/', (req, res) => {
    res.send('Get all contacts');
});

//  @route POST api/contact
//  @desc  Add new contact
//  @acess Private
router.post('/', (req, res) => {
    res.send('Add contact');
});

//  @route PUT api/contact: id
//  @desc  Update contact
//  @acess Private
router.put('/:id', (req, res) => {
    res.send('Contact updated');
});

//  @route DELETE api/contact:id
//  @desc Delete contact
//  @acess Private
router.delete('/:id', (req, res) => {
    res.send('Contact deleted ');
});

module.exports = router;