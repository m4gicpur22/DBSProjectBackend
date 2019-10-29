const express = require('express');
const path = require('path');
const config = require('config');
const SQLdata = require('mssql');

const app = express();

app.use(express.json());

const dbConfig = {
    //server being hosted here
    server: 'localhost',
    database: 'tempdb',
    user: 'NewUser2',
    password: 'User2',
    port: 1434,

}

function getEmp(){

    const connection = new SQLdata.ConnectionPool(dbConfig);

    connection.connect().then( function(){

        const req = new SQLdata.Request(connection);

        req.query("SELECT * FROM emp").then(function(recordset){
            console.log(recordset);
            connection.close();
        })
        .catch(function(err){
            console.log(err);
            connection.close();
        });

        connection.close();

    })
    .catch(function(err){

        console.log(err);

    });

}

getEmp();


//connecting to heroku
if(process.env.NODE_ENV == 'production') {
    
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html'));
    });
}

//ENV variables for connection, backend will start on the port 5000
//When we run npm run dev(included in our package.json script), our frontend will run on port 3000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server has started on port: ${port}`));