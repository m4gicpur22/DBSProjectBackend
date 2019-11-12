const express = require('express');
const path = require('path');
//const config = require('config');
// const sql = require('mysql');
const sql = require('mssql');
const bodyparser = require('body-parser');

const sqlconnection = require('./Config/DBConnection');

const app = express();

app.use(express.json());

(async () =>
{

    try {

        var pool1 = await sqlconnection.connect();
        console.log("Succesfully connected to database!");
        pool1.close();

    }
    catch(err){
        console.log("Error with connection " + JSON.stringify(err, undefined, 2));
    }
    

})()



//connecting to heroku
// if(process.env.NODE_ENV == 'production') {
    
//     app.use(express.static('client/build'));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html'));
//     });
// }

//ENV variables for connection, backend will start on the port 3000
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server has started on port: ${port}`));

app.get('/events', (async (res, req) => {

    try {

        var pool1 = await sqlconnection.connect();
        let result = await pool1.request()
            .query("SELECT FirstName FROM newUser WHERE FirstName = 'Affner' ");

        console.log(result);

    }
    catch(err ){

        console.log("Could not get data back from database with error: " + JSON.stringify(err, undefined, 2));
        pool1.close();

    }

}));