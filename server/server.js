const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json({'users': [{name: 'John', age: 22}, {name: 'Jane', age: 19}, {name: 'Maria', age: 20}]})//users array

})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})