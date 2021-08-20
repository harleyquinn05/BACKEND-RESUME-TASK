const express = require('express');
const app = express();


const PORT= process.env.PORT||3000;

//middleware
app.use(express.static('public'));
app.use(express.json())


app.get('/', (req, res)=>{
    res.send('Vivian Nwosu')
})
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})