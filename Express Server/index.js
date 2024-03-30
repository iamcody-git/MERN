import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>Hello</h1>");
});
app.get("/home", (req, res)=>{
    res.send("<h1>Home</h1><p>Home page okay with me</p>");
});

app.get("/about", (req, res)=>{
    res.send("<h1>About</h1><p>This is me cody</p>");
});


app.get("/contact", (req, res)=>{
    res.send("<h1>Contact</h1><p>856545 call that</p>");
});

app.listen(port, ()=>{
    console.log(`The server is listen at ${port}`);
});