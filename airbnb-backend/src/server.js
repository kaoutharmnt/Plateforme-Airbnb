import app from './app.js';

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Airbnb API : http://localhost:${PORT}`);
});

const server = app.listen(PORT,()=>{
    console.log(`Airbnb API : http://localhost:${PORT}`);
});