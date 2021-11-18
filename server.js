const express = require('express')
const cors = require("cors");
const app = express()
const fs = require('fs')
const usersRou = require('./router/usersRou')
const libraryRou =  require('./router/library')
const users = require('./users')
const library = require('./library')
const path = require("path")
const PORT = process.env.PORT || 8080


app.use(express.json({limit: "50mb"}))
app.use(cors({origin: 'http://localhost:8080'}))
// for file in router
app.use('/users',usersRou)
app.use('/library',libraryRou)


// Serve sstatic assets if in production
// if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// }


app.listen(PORT, function () {
    console.log('Example app listening on port 8080!')
    })