const express = require('express');
const cors = require('cors');
const { searchMovies } = require('./crawler');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/search', async (req, res) => {
    const { q } = req.query;
    if (!q) {
        return res.status(400).json({ error: 'Query parameter "q" is required' });
    }

    console.log(`Searching for: ${q}`);
    try {
        const results = await searchMovies(q);
        res.json({ results });
    } catch (error) {
        res.status(500).json({ error: 'Failed to search movies' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
