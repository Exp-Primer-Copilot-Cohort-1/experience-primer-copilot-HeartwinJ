// Create web server using express that has one endpoint that returns hello world
// Endpoint: GET /comments
// Respond with JSON object: { comments: [ 'hello world' ] }
// Use express router to create endpoint
// Use express.json() middleware to parse JSON body

const express = require('express');
const app = express();
const port = 8080;
const router = express.Router();

app.use(express.json());

router.get('/comments', (req, res) => {
    res.json({ comments: ['hello world'] });
});

app.use(router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});