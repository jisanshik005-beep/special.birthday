const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files from the current directory
const publicDir = __dirname;
app.use(express.static(publicDir));

// Fallback: for any route, serve index.html (single-page app behavior)
app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Birthday site listening on port ${PORT}`);
});
