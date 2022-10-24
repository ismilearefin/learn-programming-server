const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.Port || 5000;
const allcourse = require("./Data/course.json");

app.get('/', (res, req)=>{
    req.send("Good Now You can create your own server");
})

app.get('/allcourse', (res,req)=>{
    req.send(allcourse);
})

app.listen(Port, () => {
    console.log("server is running", Port);
});



