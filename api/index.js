import express from 'express';

mongoose.connect('mongodb+srv://elifvural03:elifvural03@mern-blog.el1cf.mongodb.net/?retryWrites=true&w=majority&appName=mern-blog');

const app = express();

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
});