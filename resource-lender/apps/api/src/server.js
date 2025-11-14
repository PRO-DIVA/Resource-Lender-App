import app from './app.js'

const port = process.env.API_PORT ?? 4000;
app.listen(port, ()=> console.log(`API listening on: http://localhost:${port}/`));
