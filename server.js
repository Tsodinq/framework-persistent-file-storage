const express = require("express");

const port = parseInt(process.env.PORT, 10) || 3000;
const app = express();
const publicDir = process.env.PUBLIC_DIR || "../framework/public";

// on requests, serve requested file from public directory
// since nextjs public directory isnt persistent and updates every build
// rather than on upload

app.use(express.static(publicDir));

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});