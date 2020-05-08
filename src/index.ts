import express from 'express';
let app = express();

const port = 8080;

app.use('/', express.json());
app.get('/', (req, res) => {
	res.send('setup complete');
});


app.listen(port, () => {
	console.log(`Applicatino is now running on port: ${port}`);
});