const express = require('express');
const path = require('path');
//const config = require('config');
const sql = require('mssql');
const bodyparser = require('body-parser');
const jwt = require('jsonwebtoken');
const bycryptjs = require('bcryptjs');
const auth =  require('../../Middleware/Auth');
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.get('/events', auth, (async (req, res) => {



}));


router.post('/events', auth, (async (req, res) => {



}));

module.exports = router;
