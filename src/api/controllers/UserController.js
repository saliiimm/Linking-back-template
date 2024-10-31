const User = require('../model/User');
const mongoose = require('mongoose');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: 'Users retrieved successfully', users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const { name, age, email, password } = req.body;
  try {
    const user = new User({ name, age, email, password });
    await user.save();
    res.status(201).json({ message: 'User saved successfully', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID' });
    }
    const user = await User.findById(id);
    if (user) {
      res.status(200).json({ message: 'User found', user });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, age, email, password },
      { new: true }
    );
    if (updatedUser) {
      res
        .status(200)
        .json({ message: 'User updated successfully', updatedUser });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (deletedUser) {
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
