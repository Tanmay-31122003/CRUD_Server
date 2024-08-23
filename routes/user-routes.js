const express = require("express");
const router = express.Router();
const { addUser, getUser, getUsers, updateUser, deleteUser } = require("../Handlers/userHandle");
const User = require("../db/User");

router.post("/users", async (req, res) => {
  console.log("req.body", req.body);
  let user = await addUser(req.body);
  res.send(user);
});

router.get("/users", async (req, res) => {
  let users = await getUsers();
  res.send(users);
});

router.get("/users/:id", async (req, res) => {
  console.log("id", req.params["id"]);
  let user = await getUser(req.params["id"]);
  res.send(user);
});

router.put("/users/:id", async (req, res) => {  // Updated the route to include :id
  console.log("id", req.params["id"]);
  await updateUser(req.params["id"], req.body);
  res.send({ message: "User updated successfully" });  // Added a response message for clarity
});

router.delete("/users/:id", async (req, res) => {
  console.log("id", req.params["id"]);
  await deleteUser(req.params["id"]);
  res.send({ message: "User deleted successfully" });  // Added a response message for clarity
});

module.exports = router;
