const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require("./routes/user-routes");
const app = express();
const port = 3000;
const cors = require("cors")

app.use(cors(
  {
    origin:["http://localhost:4200"],
    methods:["POST", "GET", "PUT", "DELETE"],
    credentials:true
  }
));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('running ');
});

app.use(userRoutes);

async function connectdb() {
  try {
    await mongoose.connect("mongodb+srv://tanmaybagal03:gIpFLyoYK8Q7pc2p@userdb.6pkzh.mongodb.net/", {
      dbName: "UserDB",
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}
connectdb();

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
