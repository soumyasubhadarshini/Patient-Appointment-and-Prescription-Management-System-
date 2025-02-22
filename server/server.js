const express = require('express');
    const { MongoClient } = require('mongodb');

    const app = express();
    const port = 3000;

    // Connection URI
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    async function run() {
      try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make sure to call close() on the client when you're finished
        console.log("Connected successfully to server");

      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }

    run().catch(console.dir);

    app.get('/', (req, res) => {
      res.send('Hello from the server!');
    });

    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
