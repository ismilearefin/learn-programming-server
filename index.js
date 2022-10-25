const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.Port || 5000;
const allcourse = require("./Data/course.json");

app.get('/', (req, res)=>{
    res.send("Good Now You can create your own server");
})

app.get('/allcourse', (req,res)=>{
    res.send(allcourse);
});


app.get('/course/:id',(req, res)=>{
    const id = req.params.id;
    // console.log(id);
    const course = allcourse.find((p) => p.id == id);
    // console.log(course)
    res.send(course);
});

app.listen(Port, () => {
    console.log("server is running", Port);
});


module.exports = app;