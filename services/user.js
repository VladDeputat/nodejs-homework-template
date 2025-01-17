const { User } = require("../models");

const getUser = (filter) => {
  return User.findOne(filter);
};

const getUserById = (id) => {
  return User.findById(id);
};

const addUser = ({ email, password, verificationToken }) => {
  const newUser = new User({ email, verificationToken });
  newUser.setPassword(password);
  return newUser.save();
};

const updateUserToken = async (id, token) => {
  return await User.findByIdAndUpdate(id, { token });
};

const updateUserSubscription = async (id, subscription) => {
  return await User.findByIdAndUpdate(id, { subscription });
};

const updateUserAvatar = async (id, avatarURL) => {
  return await User.findByIdAndUpdate(id, { avatarURL });
};


const verifyUser = async (token) => {
  return await User.findOneAndUpdate(token, {
    verify: true,
    verificationToken: null,
  });
};

module.exports = {
  getUser,
  getUserById,
  addUser,
  updateUserToken,
  updateUserSubscription,
  updateUserAvatar,
  verifyUser,
};
