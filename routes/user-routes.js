const express = require("express");
const router = express.Router();
const { addUser, getUser, getUsers, updateUser, deleteUser } = require("../Handlers/userHandle");

router.post("/users", async (req, res) => {
  try {
    console.log("req.body", req.body);
    let user = await addUser(req.body);
    res.send(user);
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).send({ error: 'Failed to create user' });
  }
});

router.get("/users", async (req, res) => {
  try{
    let users = await getUsers();
    res.send(users);
  } catch(err){
    console.error('Error fetching user:', err);
    res.status(500).send({ error: 'Failed to fetching user' });
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    console.log("id", req.params["id"]);
    let user = await getUser(req.params["id"]);
    res.send(user);
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(404).send({ error: 'User not found' });
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    console.log("id", req.params["id"]);
    await updateUser(req.params["id"], req.body);
    res.send({ message: "User updated successfully" });
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).send({ error: 'Failed to update user' });
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    console.log("id", req.params["id"]);
    await deleteUser(req.params["id"]);
    res.send({ message: "User deleted successfully" });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).send({ error: 'Failed to delete user' });
  }
});

module.exports = router;
