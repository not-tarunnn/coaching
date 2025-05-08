const express = require('express');
const app = express();
const port = 3000;

// Serve static files from "public"
app.use(express.static('public'));

// Route for home
app.get('/', (req, res) => {const express = require('express');
    const app = express();
    const port = 3000;
    
    // Serve static files from "public"
    app.use(express.static('public'));
    
    // Route for home
    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/public/index.html');
    });
    
    // Start server
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
    
  res.sendFile(__dirname + '/public/index.html');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
