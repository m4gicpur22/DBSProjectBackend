const express = require('express');
const path = require('path');
const sql = require('mssql');

const app = express();

app.use(express.json());

const dbconfig = {
    server: "DESKTOP-LLQOSHI",
    user: "affnerlefevre",
    password: "testcase123",
    database: "newUser",
    options: {
        encrpyt: false
    }
};

const connection = new sql.ConnectionPool(dbconfig);

module.exports = connection;

