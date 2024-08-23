const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require("./routes/user-routes");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('running ');
});

app.use(userRoutes);

async function connectdb() {
  try {
    await mongoose.connect("your-connection-string", {
      dbName: "UserDB",
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
}

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
