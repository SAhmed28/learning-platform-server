const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req,res) => {
    res.send('Learning Platform API running');
})


app.listen(port, () => {
    console.log(`Server running on port:`, port);
})