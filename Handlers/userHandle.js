const User = require("../db/User");

async function addUser(userModel) {
    let user = new User({
        ...userModel
    });
    await user.save();
    return user.toObject();
}

async function getUsers() {
    const users = await User.find();
    return users.map(x => x.toObject());
}

async function getUser(id) {
    const user = await User.findById(id);
    if (!user) {
        throw new Error('User not found');
    }
    return user.toObject();
}

async function updateUser(id, userModel) {
    const filter = { _id: id };
    await User.findOneAndUpdate(filter, userModel);
}

async function deleteUser(id) {
    const filter = { _id: id };
    await User.findByIdAndDelete(id);
}

module.exports = { addUser, getUsers, getUser, updateUser, deleteUser };
